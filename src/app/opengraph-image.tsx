import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'FIGHT4 Foundation — By young adults with cancer, for young adults with cancer';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 1200,
          height: 630,
          background: '#FBF8F3',
          padding: '80px 96px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div style={{ display: 'flex', position: 'relative', width: 60, height: 60 }}>
            <div style={{ display: 'flex', position: 'absolute', width: 32, height: 32, borderRadius: 50, background: '#8B1E2B', top: 0, left: 14 }} />
            <div style={{ display: 'flex', position: 'absolute', width: 32, height: 32, borderRadius: 50, background: '#A8C088', top: 14, right: 0 }} />
            <div style={{ display: 'flex', position: 'absolute', width: 32, height: 32, borderRadius: 50, background: '#E5736E', bottom: 0, left: 14 }} />
            <div style={{ display: 'flex', position: 'absolute', width: 32, height: 32, borderRadius: 50, background: '#3F5A6E', top: 14, left: 0 }} />
          </div>
          <div style={{ fontSize: 28, color: '#1A1416', fontWeight: 500, letterSpacing: -0.5 }}>FIGHT4 Foundation</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 76, color: '#1A1416', lineHeight: 1.05, letterSpacing: -2, marginTop: 20 }}>
          <div style={{ display: 'flex', gap: 18 }}>
            <span>By young adults</span>
            <span style={{ color: '#8B1E2B', fontStyle: 'italic' }}>with cancer.</span>
          </div>
          <div style={{ display: 'flex', gap: 18 }}>
            <span>For young adults</span>
            <span style={{ color: '#8B1E2B', fontStyle: 'italic' }}>with cancer.</span>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: 'auto', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 20, color: '#706367' }}>
          <div style={{ display: 'flex', fontStyle: 'italic' }}>By the people, for the people.</div>
          <div style={{ display: 'flex', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 32, color: '#1A1416', letterSpacing: -0.5 }}>$90K</span>
              <span style={{ fontSize: 14 }}>raised for research</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 32, color: '#1A1416', letterSpacing: -0.5 }}>100%</span>
              <span style={{ fontSize: 14 }}>survivor-vetted</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
