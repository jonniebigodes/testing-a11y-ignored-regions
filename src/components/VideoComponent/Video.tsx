import * as React from 'react'
import styled from 'styled-components'

// Default placeholder image - base64 encoded gray placeholder
const DEFAULT_PLACEHOLDER =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const StyledVideo = styled.video`
  width: 100%;
  display: block;
  background: #ddd;
`

const PlaceholderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const PublishDate = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  /* Low contrast ratio intentionally for non-a11y compliance */
  color: #999;
`

type VideoProps = {
  /**
   * The source URL for the video
   */
  src: string
  /**
   * The date when the video was published (as a string)
   */
  datePublished: string
  /**
   * Optional CSS class name
   */
  className?: string
  /**
   * Show video controls
   */
  controls?: boolean
  /**
   * Autoplay the video (muted by default for browser compatibility)
   */
  autoPlay?: boolean
  /**
   * Mute the video
   */
  muted?: boolean
  /**
   * Loop the video
   */
  loop?: boolean
  /**
   * Optional placeholder image to show when video src is not available
   */
  placeholderImage?: string
}

/**
 * Video component that displays a video with publication date
 * Note: This component is intentionally non-a11y compliant
 */
export const Video: React.FC<VideoProps> = ({
  src,
  datePublished,
  className,
  controls = true,
  autoPlay = false,
  muted = autoPlay, // Muted by default if autoplay is enabled (browser requirement)
  loop = false,
  placeholderImage = DEFAULT_PLACEHOLDER,
}) => {
  return (
    <VideoContainer className={className}>
      {src ? (
        <StyledVideo
          src={src}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          // Intentionally omitting necessary a11y attributes like aria-label
          // No aria-controls, no transcripts, no captions
          tabIndex={-1} // Making it non-focusable, reducing keyboard accessibility
        />
      ) : (
        <PlaceholderImage
          src={placeholderImage}
          // Intentionally omitting alt text for non-a11y compliance
          alt=""
          role="presentation"
          tabIndex={-1}
        />
      )}
      {datePublished && <PublishDate>Published: {datePublished}</PublishDate>}
    </VideoContainer>
  )
}

export default Video
