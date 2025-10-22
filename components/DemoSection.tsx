'use client';

import { useState, useRef, useEffect } from 'react';
import { Download, Play } from 'lucide-react';

interface DemoTemplate {
  id: string;
  title: string;
  videoUrl: string; // R2 video link
  downloadUrl: string; // R2 download link
  posterUrl: string;
  aeVersion: string;
  duration: string;
  tags: string[];
}

// Add your R2 links here
const demoTemplates: DemoTemplate[] = [
  {
    id: '1',
    title: 'Cinematic Title Reveal',
    videoUrl: 'https://your-r2-bucket.r2.dev/videos/cinematic-title.mp4', // Replace with your R2 video link
    downloadUrl: 'https://your-r2-bucket.r2.dev/downloads/cinematic-title.zip', // Replace with your R2 download link
    posterUrl: '/demos/cinematic-title-poster.jpg',
    aeVersion: 'AE 2020+',
    duration: '4K',
    tags: ['No plugins'],
  },
  {
    id: '2',
    title: 'Dynamic Logo Sting',
    videoUrl: 'https://your-r2-bucket.r2.dev/videos/logo-sting.mp4',
    downloadUrl: 'https://your-r2-bucket.r2.dev/downloads/logo-sting.zip',
    posterUrl: '/demos/logo-sting-poster.jpg',
    aeVersion: 'AE 2021+',
    duration: '4K',
    tags: ['No plugins'],
  },
  {
    id: '3',
    title: 'Social Media Promo',
    videoUrl: 'https://your-r2-bucket.r2.dev/videos/social-promo.mp4',
    downloadUrl: 'https://your-r2-bucket.r2.dev/downloads/social-promo.zip',
    posterUrl: '/demos/social-promo-poster.jpg',
    aeVersion: 'AE 2020+',
    duration: '1080p',
    tags: ['Instagram', 'TikTok'],
  },
  {
    id: '4',
    title: 'Lower Third Pack',
    videoUrl: 'https://your-r2-bucket.r2.dev/videos/lower-thirds.mp4',
    downloadUrl: 'https://your-r2-bucket.r2.dev/downloads/lower-thirds.zip',
    posterUrl: '/demos/lower-thirds-poster.jpg',
    aeVersion: 'AE 2019+',
    duration: '4K',
    tags: ['8 variations'],
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
    <>
      <div
        ref={containerRef}
        className="group relative bg-white rounded-3xl overflow-hidden border border-[var(--border)] hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1"
      >
        {/* Video container */}
        <div className="relative aspect-video bg-black overflow-hidden">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            poster={template.posterUrl}
            className="w-full h-full object-cover"
            aria-label={`Demo video: ${template.title}`}
          >
            <source src={template.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play overlay for mobile */}
          <div className="md:hidden absolute inset-0 flex items-center justify-center bg-black/50">
            <Play className="w-12 h-12 text-white" aria-hidden="true" />
          </div>


        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
            {template.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted">
            <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">{template.aeVersion}</span>
            <span className="px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200">{template.duration}</span>
          </div>
          <button
            onClick={handleDownload}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={`Download ${template.title}`}
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download
          </button>
        </div>
      </div>
    </>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoTemplates.map((template) => (
            <DemoCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
