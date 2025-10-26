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
    aeVersion: 'AE 2020+',
    duration: 'Horizontal',
    tags: ['No plugins'],
  },
  {
    id: '2',
    title: 'Chess Animation',
    videoUrl: 'https://media.senu.studio/scenes/Chess.mp4',
    downloadUrl: 'https://media.senu.studio/scenes/Chess.zip',
    aeVersion: 'AE 2025+',
    duration: 'Vertical',
    tags: ['No plugins'],
  },
  {
    id: '3',
    title: 'Board Paper-style',
    videoUrl: 'https://media.senu.studio/scenes/Board.mp4',
    downloadUrl: 'https://media.senu.studio/scenes/board%20scene%20folderr.zip',
    aeVersion: 'AE 2025+',
    duration: 'Horizontal',
    tags: ['Instagram', 'TikTok'],
    isVertical: true,
  },
  {
    id: '4',
    title: 'Instagram UI',
    videoUrl: 'https://media.senu.studio/scenes/apps.mp4',
    downloadUrl: 'https://media.senu.studio/scenes/apps%20scene%20folder.zip',
    aeVersion: 'AE 2015+',
    duration: 'Vertical',
    tags: ['8 variations'],
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
      className="group relative bg-white rounded-3xl overflow-hidden border border-[var(--border)] hover:border-accent/50 transition-all duration-500 hover:shadow-2xl"
    >
      {/* Video container - Fixed height with proper aspect ratio */}
      <div className="relative bg-black overflow-hidden h-80 flex items-center justify-center">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className={`${
            template.isVertical 
              ? 'h-full w-auto' // Vertical: full height, auto width
              : 'w-full h-full object-cover' // Horizontal: fill container
          }`}
          aria-label={`Demo video: ${template.title}`}
        >
          <source src={template.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play overlay for mobile */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none">
          <Play className="w-12 h-12 text-white" aria-hidden="true" />
        </div>
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
  return (
    <section id="demo" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Live Demos
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Preview our templates in action. Download instantly for free!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {demoTemplates.map((template) => (
            <DemoCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
