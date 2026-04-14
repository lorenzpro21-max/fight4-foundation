import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', position: 'relative', width: 32, height: 32, background: '#FBF8F3' }}>
        <div style={{ display: 'flex', position: 'absolute', width: 17, height: 17, borderRadius: 50, background: '#8B1E2B', top: 0, left: 7.5 }} />
        <div style={{ display: 'flex', position: 'absolute', width: 17, height: 17, borderRadius: 50, background: '#A8C088', top: 7.5, right: 0 }} />
        <div style={{ display: 'flex', position: 'absolute', width: 17, height: 17, borderRadius: 50, background: '#E5736E', bottom: 0, left: 7.5 }} />
        <div style={{ display: 'flex', position: 'absolute', width: 17, height: 17, borderRadius: 50, background: '#3F5A6E', top: 7.5, left: 0 }} />
      </div>
    ),
    { ...size },
  );
}
