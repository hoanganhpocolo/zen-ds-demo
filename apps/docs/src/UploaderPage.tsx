import { useState } from 'react';
import { FileUploader, Segmented, type UploaderFile } from '@zen/components';
import { DemoBlock } from './DemoBlock';
import { ApiTable } from './ApiTable';

let _id = 0;
function uid() { return String(++_id); }

function makeFile(name: string, size: number, status: UploaderFile['status'], extra?: Partial<UploaderFile>): UploaderFile {
  return { id: uid(), name, size, status, ...extra };
}

/* ── Interactive file-item state demo ── */
type ItemState = UploaderFile['status'];
type ItemThumbnail = UploaderFile['thumbnail'];

function FileItemDemo() {
  const [itemState, setItemState] = useState<ItemState>('uploading');
  const [thumbnail, setThumbnail] = useState<ItemThumbnail>('none');
  const [progress, setProgress] = useState(60);

  const file: UploaderFile = {
    id: 'demo',
    name: 'report-q4.pdf',
    size: 1_240_000,
    status: itemState,
    progress: itemState === 'uploading' ? progress : undefined,
    timeLeft: itemState === 'uploading' ? '7 seconds left' : undefined,
    thumbnail,
    fileType: thumbnail === 'file' ? 'pdf' : undefined,
    photoSrc: thumbnail === 'photo' ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' : undefined,
    errorMessage: itemState === 'error' ? 'Upload failed — file too large' : undefined,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)', width: '100%', maxWidth: 400 }}>
      <Segmented
        fullWidth
        value={itemState}
        onChange={(v) => setItemState(v as ItemState)}
        items={[
          { value: 'uploading', label: 'Uploading' },
          { value: 'uploaded', label: 'Uploaded' },
          { value: 'replaceable', label: 'Replaceable' },
          { value: 'error', label: 'Error' },
        ]}
      />
      <Segmented
        fullWidth
        value={thumbnail}
        onChange={(v) => setThumbnail(v as ItemThumbnail)}
        items={[
          { value: 'none', label: 'No thumbnail' },
          { value: 'file', label: 'File icon' },
          { value: 'photo', label: 'Photo' },
        ]}
      />
      {/* Progress slider */}
      {itemState === 'uploading' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-2xsmall)' }}>
          <span style={{ fontSize: 12, color: 'var(--color-content-neutral-tertiary)', fontWeight: 500 }}>PROGRESS: {progress}%</span>
          <input type="range" min={0} max={100} value={progress} onChange={(e) => setProgress(Number(e.target.value))} style={{ width: '100%' }} />
        </div>
      )}
      {/* Live preview */}
      <FileUploader
        variant="browse-button"
        files={[file]}
        onFileRemove={() => {}}
        onFileReplace={() => {}}
        onFileRetry={() => {}}
      />
    </div>
  );
}

/* ── Drop zone state demo ── */
function DropZoneDemo() {
  const [extended, setExtended] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-medium)', width: '100%', maxWidth: 400 }}>
      <div style={{ display: 'flex', gap: 'var(--gap-medium)', flexWrap: 'wrap' }}>
        <Segmented
          value={extended ? 'extended' : 'compact'}
          onChange={(v) => setExtended(v === 'extended')}
          items={[
            { value: 'extended', label: 'Extended' },
            { value: 'compact', label: 'Compact' },
          ]}
        />
        <Segmented
          value={error ? 'error' : 'normal'}
          onChange={(v) => setError(v === 'error')}
          items={[
            { value: 'normal', label: 'Normal' },
            { value: 'error', label: 'Error' },
          ]}
        />
      </div>
      <FileUploader
        label="Attachment"
        helpText={error ? 'File type not supported' : 'JPG, GIF or PNG. Max size of 800K'}
        dropCaption="JPG, GIF or PNG. Max size of 800K"
        extended={extended}
        error={error}
        multiple
      />
    </div>
  );
}

export function UploaderPage() {
  const [files1, setFiles1] = useState<UploaderFile[]>([]);

  const handleFilesAdd = (newFiles: File[]) => {
    const uploaded: UploaderFile[] = newFiles.map((f) => ({
      id: uid(), name: f.name, size: f.size, status: 'uploaded',
    }));
    setFiles1((prev) => [...prev, ...uploaded]);
  };

  return (
    <>
      {/* ── Header ── */}
      <div className="docs-page-header">
        <div className="docs-page-header-top">
          <div className="docs-page-header-breadcrumb">
            <span className="text-subheading">
              <span style={{ color: 'var(--color-content-neutral-primary)' }}>Zen Design System </span>
              <span style={{ color: 'var(--color-content-neutral-tertiary)' }}>by Đìzai Studio</span>
            </span>
          </div>
        </div>
        <div className="docs-page-header-divider" />
        <h1 className="docs-page-title text-display-1">File Uploader</h1>
        <div className="docs-page-text">
          <p className="docs-page-description text-subheading">
            A file upload component with drag-and-drop support, browse button variant, and a file list with four item states.
          </p>
        </div>
      </div>

      <div className="docs-page-body">

        <h2 className="docs-section-title text-h3">Examples</h2>
        <div className="docs-demo-grid">

          {/* Interactive drop zone */}
          <DemoBlock title="Drop Zone States" description="Toggle layout (extended/compact) and error state. Hover/dragover/focus states are shown on interaction." direction="column" fullWidth>
            <DropZoneDemo />
          </DemoBlock>

          {/* Interactive file item */}
          <DemoBlock title="File Item States" description="Toggle status and thumbnail type to see all combinations." direction="column" fullWidth>
            <FileItemDemo />
          </DemoBlock>

          {/* Live drag & drop */}
          <DemoBlock title="Live Drag & Drop" description="Fully interactive — drag files in or click to browse. Files appear in the list after selection." direction="column" fullWidth>
            <div style={{ maxWidth: 400, width: '100%' }}>
              <FileUploader
                label="Attachment"
                helpText="JPG, GIF or PNG. Max size of 800K"
                dropCaption="JPG, GIF or PNG. Max size of 800K"
                multiple
                files={files1}
                onFilesAdd={handleFilesAdd}
                onFileRemove={(id) => setFiles1((p) => p.filter((f) => f.id !== id))}
              />
            </div>
          </DemoBlock>

          {/* All item states — No thumbnail */}
          <DemoBlock title="Item States — No Thumbnail" description="All four states without a thumbnail." direction="column" fullWidth>
            <div style={{ maxWidth: 400, width: '100%' }}>
              <FileUploader
                variant="browse-button"
                files={[
                  makeFile('uploading-file.pdf', 1_240_000, 'uploading', { progress: 60, timeLeft: '7 seconds left' }),
                  makeFile('uploaded-file.jpg', 2_800_000, 'uploaded'),
                  makeFile('replaceable-file.png', 340_000, 'replaceable'),
                  makeFile('error-file.docx', 980_000, 'error', { errorMessage: 'Upload failed' }),
                ]}
                onFileRemove={() => {}}
                onFileReplace={() => {}}
                onFileRetry={() => {}}
              />
            </div>
          </DemoBlock>

          {/* All item states — File thumbnail */}
          <DemoBlock title="Item States — File Thumbnail" description="All four states with file-type icon." direction="column" fullWidth>
            <div style={{ maxWidth: 400, width: '100%' }}>
              <FileUploader
                variant="browse-button"
                files={[
                  makeFile('uploading.pdf', 1_240_000, 'uploading', { progress: 45, timeLeft: '12 seconds left', thumbnail: 'file', fileType: 'pdf' }),
                  makeFile('uploaded.xlsx', 860_000, 'uploaded', { thumbnail: 'file', fileType: 'sheet' }),
                  makeFile('replaceable.zip', 4_200_000, 'replaceable', { thumbnail: 'file', fileType: 'zip' }),
                  makeFile('error.docx', 980_000, 'error', { thumbnail: 'file', fileType: 'doc', errorMessage: 'File type not supported' }),
                ]}
                onFileRemove={() => {}}
                onFileReplace={() => {}}
                onFileRetry={() => {}}
              />
            </div>
          </DemoBlock>

          {/* All item states — Photo thumbnail */}
          <DemoBlock title="Item States — Photo Thumbnail" description="All four states with photo preview." direction="column" fullWidth>
            <div style={{ maxWidth: 400, width: '100%' }}>
              <FileUploader
                variant="browse-button"
                files={[
                  makeFile('photo-uploading.jpg', 2_100_000, 'uploading', { progress: 75, timeLeft: '3 seconds left', thumbnail: 'photo', photoSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' }),
                  makeFile('photo-uploaded.jpg', 1_800_000, 'uploaded', { thumbnail: 'photo', photoSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' }),
                  makeFile('photo-replaceable.png', 3_400_000, 'replaceable', { thumbnail: 'photo', photoSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80' }),
                  makeFile('photo-error.png', 9_200_000, 'error', { thumbnail: 'photo', photoSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', errorMessage: 'Image too large' }),
                ]}
                onFileRemove={() => {}}
                onFileReplace={() => {}}
                onFileRetry={() => {}}
              />
            </div>
          </DemoBlock>

          {/* Browse button */}
          <DemoBlock title="Browse Button Variant" description="Compact trigger without a drop zone." direction="column" fullWidth>
            <div style={{ maxWidth: 400, width: '100%' }}>
              <FileUploader
                label="Resume"
                helpText="PDF or DOCX accepted"
                variant="browse-button"
              />
            </div>
          </DemoBlock>

          {/* Compact drop zone */}
          <DemoBlock title="Compact Drop Zone" description="extended=false — inline row layout with no caption." direction="column" fullWidth>
            <div style={{ maxWidth: 400, width: '100%' }}>
              <FileUploader
                label="Attachment"
                extended={false}
                dropText="Drag & Drop or Choose file to upload"
                multiple
              />
            </div>
          </DemoBlock>

        </div>

        {/* ── API ── */}
        <h2 className="docs-section-title text-h3">API</h2>

        <ApiTable
          columns={['Property', 'Description', 'Type', 'Default']}
          rows={[
            [<code>variant</code>, 'Drop zone or browse button', <><code>'drag-drop'</code> | <code>'browse-button'</code></>, <code>'drag-drop'</code>],
            [<code>extended</code>, 'Tall column layout vs compact row', <code>boolean</code>, <code>true</code>],
            [<code>error</code>, 'Error/alert border on the drop zone', <code>boolean</code>, <code>false</code>],
            [<code>label</code>, 'Field label above the uploader', <code>string</code>, '—'],
            [<code>helpText</code>, 'Helper text below the uploader', <code>string</code>, '—'],
            [<code>dropText</code>, 'Primary text inside the drop zone', <code>string</code>, <code>'Drag & Drop or Choose file to upload'</code>],
            [<code>dropCaption</code>, 'Caption text (extended only)', <code>string</code>, '—'],
            [<code>accept</code>, 'Accepted file types (native input accept)', <code>string</code>, '—'],
            [<code>multiple</code>, 'Allow selecting multiple files', <code>boolean</code>, <code>false</code>],
            [<code>files</code>, 'Controlled list of file entries', <code>UploaderFile[]</code>, <code>[]</code>],
            [<code>onFilesAdd</code>, 'Called when user selects or drops new files', <code>(files: File[]) =&gt; void</code>, '—'],
            [<code>onFileRemove</code>, 'Called when remove (×) is clicked', <code>(id: string) =&gt; void</code>, '—'],
            [<code>onFileReplace</code>, 'Called when replace button is clicked (replaceable)', <code>(id: string) =&gt; void</code>, '—'],
            [<code>onFileRetry</code>, 'Called when retry button is clicked (error)', <code>(id: string) =&gt; void</code>, '—'],
          ]}
        />

        <h2 className="docs-section-title text-h3">UploaderFile</h2>

        <ApiTable
          columns={['Property', 'Description', 'Type']}
          rows={[
            [<code>id</code>, 'Unique identifier', <code>string</code>],
            [<code>name</code>, 'File name', <code>string</code>],
            [<code>size</code>, 'File size in bytes (auto-formatted)', <code>number</code>],
            [<code>status</code>, 'Upload state', <><code>'uploading'</code> | <code>'uploaded'</code> | <code>'replaceable'</code> | <code>'error'</code></>],
            [<code>progress</code>, 'Upload progress 0–100 (uploading only)', <code>number</code>],
            [<code>timeLeft</code>, 'Remaining time label e.g. "7 seconds left"', <code>string</code>],
            [<code>thumbnail</code>, 'Thumbnail type on the left', <><code>'none'</code> | <code>'file'</code> | <code>'photo'</code></>],
            [<code>fileType</code>, "File icon when thumbnail = 'file'", <><code>'audio'</code> | <code>'doc'</code> | <code>'figma'</code> | <code>'image'</code> | <code>'media'</code> | <code>'pdf'</code> | <code>'sheet'</code> | <code>'video'</code> | <code>'zip'</code></>],
            [<code>photoSrc</code>, "Image URL when thumbnail = 'photo'", <code>string</code>],
            [<code>errorMessage</code>, "Error text shown when status = 'error'", <code>string</code>],
          ]}
        />

      </div>
    </>
  );
}
