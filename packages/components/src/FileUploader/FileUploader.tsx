import React, { useRef, useState, useCallback, useId } from 'react';
import { UploadCloud, XSmall, RefreshCcw02, AlertOctagon } from '@zen/icons/line';
import {
  FileAudio,
  FileDoc,
  FileFigma,
  FileImage,
  FileMedia,
  FilePDF,
  FileSheet,
  FileVideo,
  FileZip,
} from '@zen/icons/file';
import { Button } from '../Button';
import styles from './FileUploader.module.css';

/* ── Types ── */

export type FileIconType =
  | 'audio'
  | 'doc'
  | 'figma'
  | 'image'
  | 'media'
  | 'pdf'
  | 'sheet'
  | 'video'
  | 'zip';

export interface UploaderFile {
  /** Unique identifier for this file entry */
  id: string;
  /** File name */
  name: string;
  /** File size in bytes */
  size: number;
  /**
   * Upload status:
   * 'uploading'   — progress bar shown, Remove button
   * 'uploaded'    — done, Remove button only
   * 'replaceable' — done, Replace + Remove buttons
   * 'error'       — red bg, error message, Retry + Remove buttons
   */
  status: 'uploading' | 'uploaded' | 'replaceable' | 'error';
  /** Upload progress 0–100 (used when status = 'uploading') */
  progress?: number;
  /** Remaining time label shown during upload e.g. "7 seconds left" */
  timeLeft?: string;
  /**
   * Thumbnail shown on the left:
   * 'none' (default) — no thumbnail
   * 'file'           — file-type icon (32×40)
   * 'photo'          — image preview (40×40 rounded)
   */
  thumbnail?: 'none' | 'file' | 'photo';
  /** File type icon (used when thumbnail = 'file') */
  fileType?: FileIconType;
  /** Image URL (used when thumbnail = 'photo') */
  photoSrc?: string;
  /** Error message shown when status = 'error' */
  errorMessage?: string;
}

export interface FileUploaderProps {
  /** Field label */
  label?: string;
  /** Helper text below the uploader */
  helpText?: string;
  /** Accepted file types, forwarded to <input accept> */
  accept?: string;
  /** Allow selecting multiple files */
  multiple?: boolean;
  /**
   * Variant:
   * 'drag-drop' (default) — dashed drop zone with icon + text
   * 'browse-button' — only a "Choose File" button
   */
  variant?: 'drag-drop' | 'browse-button';
  /**
   * Drop zone layout:
   * true (default) — tall/centered column with icon, title, and caption
   * false — compact inline row with icon + title only
   */
  extended?: boolean;
  /** Show error/alert state border on the drop zone */
  error?: boolean;
  /** Primary text inside the drop zone */
  dropText?: string;
  /** Caption below the title (only visible when extended=true) */
  dropCaption?: string;
  /** Controlled file list */
  files?: UploaderFile[];
  /** Called when the user selects/drops new files */
  onFilesAdd?: (files: File[]) => void;
  /** Called when a file is removed */
  onFileRemove?: (id: string) => void;
  /** Called when a file replace button is clicked (status = 'replaceable') */
  onFileReplace?: (id: string) => void;
  /** Called when retry is clicked (status = 'error') */
  onFileRetry?: (id: string) => void;
  className?: string;
}

/* ── Helpers ── */

function formatSize(bytes: number): string {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
  if (bytes >= 1_000) return `${(bytes / 1_000).toFixed(0)} KB`;
  return `${bytes} B`;
}

/* ── File type icon ── */

const FILE_ICON_MAP = {
  audio: FileAudio,
  doc: FileDoc,
  figma: FileFigma,
  image: FileImage,
  media: FileMedia,
  pdf: FilePDF,
  sheet: FileSheet,
  video: FileVideo,
  zip: FileZip,
} as const;

function FileTypeIcon({ type = 'doc' }: { type?: FileIconType }) {
  const Icon = FILE_ICON_MAP[type];
  return (
    <div className={styles['file-type-icon']}>
      <Icon width={32} height={40} />
    </div>
  );
}

/* ── FileItem ── */

interface FileItemProps {
  file: UploaderFile;
  onRemove?: (id: string) => void;
  onReplace?: (id: string) => void;
  onRetry?: (id: string) => void;
}

function FileItem({ file, onRemove, onReplace, onRetry }: FileItemProps) {
  const { status, thumbnail = 'none' } = file;
  const isError = status === 'error';
  const isUploading = status === 'uploading';

  const itemClass = [
    styles['file-item'],
    isError ? styles['file-item-alert'] : (isUploading ? '' : styles['file-item-done']),
  ].filter(Boolean).join(' ');

  /* ── Right-side action buttons ── */
  const actions = (
    <div className={styles['file-item-actions']}>
      {status === 'replaceable' && onReplace && (
        <button className={styles['file-item-action-btn']} onClick={() => onReplace(file.id)} type="button" aria-label="Replace file">
          <RefreshCcw02 size={16} />
        </button>
      )}
      {isError && onRetry && (
        <button className={styles['file-item-action-btn']} onClick={() => onRetry(file.id)} type="button" aria-label="Retry upload">
          <RefreshCcw02 size={16} />
        </button>
      )}
      {onRemove && (
        <button className={styles['file-item-action-btn']} onClick={() => onRemove(file.id)} type="button" aria-label="Remove file">
          <XSmall size={16} />
        </button>
      )}
    </div>
  );

  /* ── Details row ── */
  const details = (
    <div className={styles['file-item-details']}>
      {isError ? (
        <>
          <span className={styles['file-item-error-info']}>
            <span className={styles['file-item-error-icon']}><AlertOctagon size={14} /></span>
            <span className={styles['file-item-error-msg']}>{file.errorMessage ?? 'Upload failed'}</span>
          </span>
          <span className={styles['file-item-error-dot']} />
          <span className={styles['file-item-error-size']}>{formatSize(file.size)}</span>
        </>
      ) : (
        <>
          <span className={styles['file-item-size']}>{formatSize(file.size)}</span>
          {isUploading && file.timeLeft && (
            <>
              <span className={styles['file-item-dot']} />
              <span className={styles['file-item-time']}>{file.timeLeft}</span>
            </>
          )}
        </>
      )}
    </div>
  );

  /* ── Body (name row + details) ── */
  const body = (
    <div className={styles['file-item-body']}>
      <div className={styles['file-item-main']}>
        <span className={styles['file-item-name']}>{file.name}</span>
        {actions}
      </div>
      {details}
    </div>
  );

  /* ── Thumbnail left side ── */
  const thumbLeft = thumbnail === 'file' ? (
    <div className={styles['file-item-file-icon']}>
      <FileTypeIcon type={file.fileType} />
    </div>
  ) : thumbnail === 'photo' ? (
    <img className={styles['file-item-photo']} src={file.photoSrc} alt={file.name} />
  ) : null;

  return (
    <div className={itemClass}>
      {thumbLeft ? (
        <div className={styles['file-item-thumbnail']}>
          {thumbLeft}
          {body}
        </div>
      ) : body}

      {isUploading && (
        <div className={styles['progress-bar']}>
          <div className={styles['progress-bar-fill']} style={{ width: `${file.progress ?? 0}%` }} />
        </div>
      )}
    </div>
  );
}

/* ── FileUploader ── */

export function FileUploader({
  label,
  helpText,
  accept,
  multiple = false,
  variant = 'drag-drop',
  extended = true,
  error = false,
  dropText = 'Drag & Drop or Choose file to upload',
  dropCaption,
  files = [],
  onFilesAdd,
  onFileRemove,
  onFileReplace,
  onFileRetry,
  className,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputId = useId();

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      onFilesAdd?.(Array.from(fileList));
    },
    [onFilesAdd],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles],
  );

  const dropZoneClass = [
    styles['drop-zone'],
    !extended ? styles['drop-zone-compact'] : '',
    isDragOver ? styles['drop-zone-dragover'] : '',
    error ? styles['drop-zone-error'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        className={styles.native}
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
      />

      {label && <span className={styles.label}>{label}</span>}

      {variant === 'drag-drop' ? (
        <div
          className={dropZoneClass}
          onClick={() => inputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
          aria-label="File upload area"
        >
          <span className={styles['drop-zone-icon']}>
            <UploadCloud size={24} />
          </span>
          <div className={styles['drop-zone-content']}>
            <span className={styles['drop-zone-title']}>{dropText}</span>
            {extended && dropCaption && (
              <span className={styles['drop-zone-caption']}>{dropCaption}</span>
            )}
          </div>
        </div>
      ) : (
        <Button
          variant="tertiary"
          size="s"
          onClick={() => inputRef.current?.click()}
        >
          Choose File
        </Button>
      )}

      {helpText && (
        <div className={styles['help-text']}>
          <span className={styles['help-text-message']}>{helpText}</span>
        </div>
      )}

      {files.length > 0 && (
        <div className={styles['file-list']}>
          {files.map((file) => (
            <FileItem
              key={file.id}
              file={file}
              onRemove={onFileRemove}
              onReplace={onFileReplace}
              onRetry={onFileRetry}
            />
          ))}
        </div>
      )}
    </div>
  );
}
