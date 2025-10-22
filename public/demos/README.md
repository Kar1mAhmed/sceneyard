# Demo Assets

This directory should contain demo videos and poster images for the template previews.

## Required Files

### Videos (MP4 format, H.264 codec)
- `cinematic-title.mp4` - Cinematic title reveal demo
- `logo-sting.mp4` - Dynamic logo sting demo
- `social-promo.mp4` - Social media promo demo
- `lower-thirds.mp4` - Lower third pack demo

### Poster Images (JPG format, 1920x1080)
- `cinematic-title-poster.jpg`
- `logo-sting-poster.jpg`
- `social-promo-poster.jpg`
- `lower-thirds-poster.jpg`

## Video Specifications

- **Resolution:** 1920x1080 (1080p) or 3840x2160 (4K)
- **Format:** MP4 (H.264)
- **Duration:** 5-15 seconds
- **File size:** < 5MB per video (optimized for web)
- **Frame rate:** 30fps or 60fps
- **Audio:** None (muted)

## Optimization Tips

1. Use a tool like HandBrake or FFmpeg to compress videos
2. Target bitrate: 2-4 Mbps for 1080p
3. Use poster images to reduce initial load
4. Consider hosting on a CDN for better performance

## FFmpeg Compression Example

```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -vf scale=1920:1080 -b:v 3M -movflags +faststart output.mp4
```

## Placeholder Note

Until real demo videos are available, you can:
1. Use placeholder videos from services like Pexels or Unsplash
2. Create simple animated mockups in After Effects
3. Use static images with the poster attribute
