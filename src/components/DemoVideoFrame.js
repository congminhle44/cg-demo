const DemoVideoFrame = ({ setShowDemoCanvas, videoUrl }) => {
  return (
    <div className="video-frame-container">
      <div className="video-wrapper">
        <div className="close-container">
          <img
            onClick={(e) => {
              e.stopPropagation()
              setShowDemoCanvas(false)
            }}
            className="close-btn"
            src="/assets/close.svg"
            alt="close"
          />
        </div>
        <video crossOrigin="anonymous" src={videoUrl} controls autoPlay muted />
      </div>
    </div>
  )
}

export default DemoVideoFrame
