import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SceneYard — Premium After Effects Templates & Motion Graphics Project Files | Download AE Templates",
  description: "Download 400+ professional After Effects templates, motion graphics project files & AE templates. Studio-quality video editing tools, cinematic titles, logo animations, lower thirds. Free & premium templates for motion designers. No plugins required. 4K ready.",
  keywords: [
    // Core After Effects Keywords (High Volume)
    "After Effects",
    "After Effects templates",
    "After Effects project files",
    "AE templates",
    "AE project files",
    "Adobe After Effects templates",
    "After Effects templates free",
    "After Effects templates download",
    "free After Effects templates",
    "premium After Effects templates",
    "After Effects CC templates",
    "After Effects 2024 templates",
    "After Effects 2025 templates",
    "best After Effects templates",
    "professional After Effects templates",
    "After Effects template library",
    "After Effects marketplace",
    "buy After Effects templates",
    "download AE templates",
    "AE project download",
    
    // Motion Graphics Keywords (High Volume)
    "motion graphics",
    "motion graphics templates",
    "motion graphics project files",
    "motion graphics tools",
    "motion design",
    "motion design templates",
    "motion graphics software",
    "motion graphics assets",
    "motion graphics library",
    "motion graphics marketplace",
    "motion graphics resources",
    "motion graphics pack",
    "motion graphics bundle",
    "animated graphics templates",
    "motion graphics presets",
    "motion graphics effects",
    "2D motion graphics",
    "3D motion graphics",
    "motion graphics animation",
    "motion graphics designer tools",
    
    // Video Editing Keywords (High Volume)
    "video editing",
    "video editing tools",
    "video editing templates",
    "professional video editing",
    "video editing software",
    "video editing assets",
    "video editing resources",
    "video production templates",
    "video post production",
    "video editing effects",
    "video transitions",
    "video effects templates",
    "video editing presets",
    "video editing pack",
    "video editing bundle",
    "video editor resources",
    "video production tools",
    "video content creation",
    "video editing workflow",
    "fast video editing",
    
    // Quality & Style Keywords
    "modern project files",
    "premium templates",
    "professional templates",
    "studio-quality templates",
    "cinematic templates",
    "high-quality templates",
    "broadcast quality templates",
    "commercial templates",
    "corporate templates",
    "creative templates",
    "elegant templates",
    "minimal templates",
    "modern motion graphics",
    "trendy templates",
    "stylish templates",
    "clean templates",
    "sleek templates",
    "contemporary templates",
    "cutting-edge templates",
    "industry-standard templates",
    
    // Career & Professional Keywords
    "boost motion graphics career",
    "motion designer tools",
    "video editor resources",
    "freelance motion graphics",
    "motion graphics portfolio",
    "video editing career",
    "motion designer resources",
    "freelance video editor",
    "motion graphics freelancer",
    "video production career",
    "motion design career",
    "creative professional tools",
    "content creator tools",
    "video creator resources",
    "motion graphics business",
    "video editing business",
    "professional motion designer",
    "certified motion designer",
    "motion graphics training",
    "video editing course materials",
    
    // Specific Template Types (High Conversion)
    "title templates",
    "logo animation",
    "lower thirds",
    "social media templates",
    "Instagram templates",
    "YouTube templates",
    "promo templates",
    "intro templates",
    "outro templates",
    "title reveal templates",
    "text animation templates",
    "kinetic typography",
    "logo reveal",
    "logo sting",
    "name tag templates",
    "call-out templates",
    "subscribe button templates",
    "end screen templates",
    "transition templates",
    "slideshow templates",
    "presentation templates",
    "explainer video templates",
    "commercial templates",
    "advertisement templates",
    "product promo templates",
    "event promo templates",
    "wedding templates",
    "birthday templates",
    "holiday templates",
    "Christmas templates",
    "New Year templates",
    "Valentine templates",
    "corporate video templates",
    "business templates",
    "real estate templates",
    "restaurant templates",
    "fitness templates",
    "sports templates",
    "gaming templates",
    "tech templates",
    "fashion templates",
    "travel templates",
    "food templates",
    "music video templates",
    "podcast templates",
    "vlog templates",
    "tutorial templates",
    "educational templates",
    "infographic templates",
    "data visualization templates",
    "chart templates",
    "graph templates",
    
    // Technical Keywords
    "4K templates",
    "no plugins required",
    "editable templates",
    "customizable project files",
    "HD templates",
    "1080p templates",
    "2K templates",
    "8K templates",
    "full HD templates",
    "ultra HD templates",
    "plugin-free templates",
    "vanilla After Effects",
    "easy to customize",
    "drag and drop templates",
    "one-click templates",
    "quick edit templates",
    "fast render templates",
    "optimized templates",
    "lightweight templates",
    "color customizable",
    "text customizable",
    "fully editable",
    "modular templates",
    "layered templates",
    "organized project files",
    "well-documented templates",
    "video tutorial included",
    "help file included",
    "universal expressions",
    "compatible templates",
    "After Effects CS6 compatible",
    "After Effects CC compatible",
    "Mac compatible",
    "Windows compatible",
    "royalty-free templates",
    "commercial license",
    "unlimited usage",
    "instant download",
    "digital download",
    "online templates",
    "cloud templates",
    "template subscription",
    "template membership",
    "template library access",
    "unlimited downloads",
    
    // Platform-Specific Keywords
    "YouTube intro templates",
    "YouTube outro templates",
    "YouTube channel templates",
    "Instagram story templates",
    "Instagram reel templates",
    "Instagram post templates",
    "TikTok templates",
    "Facebook video templates",
    "LinkedIn video templates",
    "Twitter video templates",
    "Snapchat templates",
    "Pinterest video templates",
    "Twitch templates",
    "Discord templates",
    
    // Industry-Specific Keywords
    "real estate video templates",
    "restaurant promo templates",
    "fitness video templates",
    "medical video templates",
    "legal video templates",
    "education video templates",
    "church video templates",
    "nonprofit video templates",
    "ecommerce video templates",
    "startup video templates",
    "agency templates",
    "portfolio templates",
    
    // Effect-Specific Keywords
    "glitch effect templates",
    "parallax templates",
    "3D text templates",
    "particle effects",
    "light leaks templates",
    "bokeh templates",
    "lens flare templates",
    "smoke effects",
    "fire effects",
    "water effects",
    "explosion templates",
    "shatter effects",
    "distortion effects",
    "VHS effect templates",
    "retro templates",
    "vintage templates",
    "neon templates",
    "cyberpunk templates",
    "futuristic templates",
    
    // Long-tail Conversion Keywords
    "where to buy After Effects templates",
    "best site for After Effects templates",
    "cheap After Effects templates",
    "affordable motion graphics templates",
    "After Effects templates for beginners",
    "easy After Effects templates",
    "simple After Effects templates",
    "quick After Effects templates",
    "ready-made templates",
    "pre-made templates",
    "stock templates",
    "template marketplace",
    "template store",
    "template shop",
    "buy templates online",
    "download templates instantly",
  ],
  authors: [{ name: "SceneYard" }],
  creator: "SceneYard",
  publisher: "SceneYard",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sceneyard.com",
    siteName: "SceneYard",
    title: "SceneYard — Premium After Effects Templates & Motion Graphics Project Files",
    description: "Download 400+ professional After Effects templates and motion graphics project files. Studio-quality templates for video editing, modern motion design, and professional projects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SceneYard - Premium After Effects Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SceneYard — Premium After Effects Templates & Motion Graphics",
    description: "Download 400+ professional After Effects templates. Studio-quality motion graphics project files for video editors and motion designers.",
    images: ["/og-image.jpg"],
    creator: "@sceneyard",
  },
  alternates: {
    canonical: "https://sceneyard.com",
  },
  category: "Video Editing",
  applicationName: "SceneYard",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sceneyard.com'),
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  appleWebApp: {
    capable: true,
    title: "SceneYard",
    statusBarStyle: "black-translucent",
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'facebook-domain-verification': 'your-facebook-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebPage">
      <head>
        {/* Canonical & Preconnect */}
        <link rel="canonical" href="https://sceneyard.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme & Viewport */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        
        {/* Additional SEO */}
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "txpmwubj9e");
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
