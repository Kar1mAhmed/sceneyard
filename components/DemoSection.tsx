'use client';

import { useState, useRef, useEffect } from 'react';
import { Download, Play } from 'lucide-react';

interface DemoTemplate {
  id: string;
  title: string;
  videoUrl: string; // R2 video link
  downloadUrl: string; // R2 download link
  aeVersion: string;
  duration: string;
  tags: string[];
  isVertical?: boolean; // For vertical videos (9:16)
}

// Add your R2 links here
const demoTemplates: DemoTemplate[] = [
  {
    id: '1',
    title: 'Community Collage',
    videoUrl: 'https://media.senu.studio/scenes/Community.mp4',
    downloadUrl: 'https://media.senu.studio/scenes/community%20scene%20folder.zip',
    aeVersion: 'AE 2025+',
    duration: 'Horizontal',
    tags: ['No plugins'],
    isVertical: false,
  },
  {
    id: '2',
    title: 'Chess Animation',
    videoUrl: 'https://media.senu.studio/scenes/Chess.mp4',
    downloadUrl: 'https://media.senu.studio/scenes/Chess.zip',
    aeVersion: 'AE 2025+',
    duration: 'Vertical',
    tags: ['No plugins'],
    isVertical: true,
  },
  {
    id: '3',
    title: 'Board Paper-style',
    videoUrl: 'https://media.senu.studio/scenes/Board.mp4',
    downloadUrl: 'https://media.senu.studio/scenes/board%20scene%20folderr.zip',
    aeVersion: 'AE 2025+',
    duration: 'Horizontal',
    tags: ['Instagram', 'TikTok'],
    isVertical: false,
  },
  {
    id: '4',
    title: 'Instagram UI',
    videoUrl: 'https://media.senu.studio/scenes/apps.mp4',
    downloadUrl: 'https://media.senu.studio/scenes/apps%20scene%20folder.zip',
    aeVersion: 'AE 2015+',
    duration: 'Vertical',
    tags: ['8 variations'],
    isVertical: true,
  },
  {
    id: '5',
    title: 'Payment UI',
    videoUrl: 'https://media.senu.studio/scenes/Finance.mp4',
    downloadUrl: 'https://media.senu.studio/scenes/Finance%20scene%20folder.zip',
    aeVersion: 'AE 2025+',
    duration: 'Vertical',
    tags: ['Reels', 'Shorts'],
    isVertical: true,
  },
];

function DemoCard({ template }: { template: DemoTemplate }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.5);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay failed, user interaction required
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const handleDownload = () => {
    // Direct download from R2
    window.open(template.downloadUrl, '_blank');
  };

  return (
    <div
      ref={containerRef}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[var(--border)] hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full"
    >
      {/* Video container - Consistent aspect ratio */}
      <div className={`relative bg-black overflow-hidden flex items-center justify-center ${
        template.isVertical ? 'aspect-[9/16]' : 'aspect-video'
      }`}>
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
          aria-label={`Demo video: ${template.title}`}
        >
          <source src={template.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
          {template.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted">
          <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">{template.aeVersion}</span>
          <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">{template.duration}</span>
        </div>
        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent shadow-md hover:shadow-lg"
          aria-label={`Download ${template.title}`}
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          Download
        </button>
      </div>
    </div>
  );
}

export default function DemoSection() {
  // Separate horizontal and vertical templates
  const horizontalTemplates = demoTemplates.filter(t => !t.isVertical);
  const verticalTemplates = demoTemplates.filter(t => t.isVertical);

  return (
    <section id="demo" className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Live Demos
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Preview our templates in action. Download instantly for free!
          </p>
        </div>

        {/* Horizontal Templates */}
        {horizontalTemplates.length > 0 && (
          <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-accent/20 shadow-lg">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <h3 className="text-2xl font-bold text-foreground">
                  Horizontal Templates
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4">
              {horizontalTemplates.map((template, index) => (
                <div 
                  key={template.id} 
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <DemoCard template={template} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vertical Templates */}
        {verticalTemplates.length > 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-accent/20 shadow-lg">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <h3 className="text-2xl font-bold text-foreground">
                  Vertical Templates
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
              {verticalTemplates.map((template, index) => (
                <div 
                  key={template.id} 
                  className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <DemoCard template={template} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
