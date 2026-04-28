import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Texture } from 'ogl';

const VERTEX = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2  uMouse;
  uniform float uHover;
  uniform float uTime;

  varying vec2 vUv;

  // Simplex noise 2D — Ashima
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x  = 2.0 * fract(p * C.www) - 1.0;
    vec3 h  = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;

    // UV distance from mouse (both already in 0..1)
    float d = distance(uv, uMouse);
    // Falloff radius ~0.25 of canvas. Smooth, strongest at cursor.
    float influence = smoothstep(0.28, 0.0, d) * uHover;

    // Ambient "breath" — always on, very subtle
    float aFreq = 2.5;
    float aAmp  = 0.003;
    vec2 aN = vec2(
      snoise(vec2(uv.x * aFreq + uTime * 0.12, uv.y * aFreq)),
      snoise(vec2(uv.x * aFreq, uv.y * aFreq + uTime * 0.12))
    );

    // Interactive ripple near mouse
    float iFreq = 7.0;
    float iAmp  = 0.015 * influence;
    vec2 iN = vec2(
      snoise(vec2(uv.x * iFreq + uTime * 0.45, uv.y * iFreq)),
      snoise(vec2(uv.x * iFreq, uv.y * iFreq + uTime * 0.45))
    );

    vec2 distortedUv = uv + aN * aAmp + iN * iAmp;

    gl_FragColor = texture2D(uTexture, distortedUv);
  }
`;

export function HeroLandscape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const renderer = new Renderer({
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio, 2),
      premultipliedAlpha: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    // Hide until texture + first frame are ready, then fade in.
    // Width/height/position are handled by CSS (.zen-home-hero-landscape canvas)
    // so the canvas cannot perturb the surrounding layout on first paint.
    gl.canvas.style.opacity = '0';
    gl.canvas.style.transition = 'opacity 500ms ease-out';
    el.appendChild(gl.canvas);

    const texture = new Texture(gl, {
      generateMipmaps: false,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
    });

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/home/herobg.png';

    const program = new Program(gl, {
      vertex: VERTEX,
      fragment: FRAGMENT,
      uniforms: {
        uTexture: { value: texture },
        uMouse: { value: [0.5, 0.5] },
        uHover: { value: 0 },
        uTime: { value: 0 },
      },
      transparent: true,
    });

    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      renderer.setSize(rect.width, rect.height);
    };
    resize();

    let textureReady = false;
    img.onload = () => {
      texture.image = img;
      textureReady = true;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(el);

    // Smooth-followed mouse (UV 0..1, flipped Y so (0,0)=bottom-left)
    const mouseTarget: [number, number] = [0.5, 0.5];
    const mouseCurrent: [number, number] = [0.5, 0.5];
    let hoverTarget = 0;
    let hoverCurrent = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      mouseTarget[0] = x;
      mouseTarget[1] = y;
      // Boost hover when cursor is within or near the canvas bounds
      const inside = x > -0.1 && x < 1.1 && y > -0.1 && y < 1.1;
      hoverTarget = inside ? 1 : 0;
    };
    const onLeave = () => { hoverTarget = 0; };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);

    let raf = 0;
    let revealed = false;
    const start = performance.now();
    const tick = () => {
      const t = (performance.now() - start) / 1000;

      // Smoothing (low-pass)
      mouseCurrent[0] += (mouseTarget[0] - mouseCurrent[0]) * 0.08;
      mouseCurrent[1] += (mouseTarget[1] - mouseCurrent[1]) * 0.08;
      hoverCurrent += (hoverTarget - hoverCurrent) * 0.04;

      program.uniforms.uMouse.value = [mouseCurrent[0], mouseCurrent[1]];
      program.uniforms.uHover.value = hoverCurrent;
      program.uniforms.uTime.value = t;

      if (textureReady) {
        renderer.render({ scene: mesh });
        if (!revealed) {
          revealed = true;
          // First frame painted — fade canvas in on next tick so the pixels
          // settle before the transition starts
          requestAnimationFrame(() => { gl.canvas.style.opacity = '1'; });
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      if (gl.canvas.parentNode === el) {
        el.removeChild(gl.canvas);
      }
    };
  }, []);

  return <div ref={containerRef} className="zen-home-hero-landscape" aria-hidden="true" />;
}
