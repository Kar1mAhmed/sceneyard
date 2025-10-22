'use client';

export default function DottedBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{ 
        zIndex: 0,
        backgroundImage: 'radial-gradient(circle, #e5d5c0 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.5
      }}
      aria-hidden="true"
    />
  );
}
