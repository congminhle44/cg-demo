const DemoVideoFrame = ({ setShowDemoCanvas }) => {
  return (
    <div className="video-frame-container">
      <div className="video-wrapper">
        <div className="close-container">
          <img
            onClick={(e) => {
              e.stopPropagation();
              setShowDemoCanvas(false);
            }}
            className="close-btn"
            src="/assets/close.svg"
            alt="close"
          />
        </div>
        <video
          crossOrigin="anonymous"
          src="https://static.techwiz.tech/cg-static/assets/media-output/metahero-720hd-demo.mp4"
          controls
          autoPlay
          muted
        />
      </div>
    </div>
  );
};

export default DemoVideoFrame;
