const Loading = ({ instructDevice, setInstructDevice }) => {
  return (
    <div className="loading">
      <div>
        <div className="instruction">
          <div className="tab">
            <div
              onClick={() => setInstructDevice("pc")}
              className={`device ${instructDevice === "pc" && "active"}`}
            >
              PC版
            </div>
            <div
              onClick={() => setInstructDevice("mobile")}
              className={`device ${instructDevice === "mobile" && "active"}`}
            >
              モバイル版
            </div>
          </div>
          <div className="detail">
            {instructDevice === "pc" ? (
              <>
                <img src="/assets/command.png" alt="command" />
                <img src="/assets/space.png" alt="space" />
                <img src="/assets/perspective.png" alt="perspective" />
              </>
            ) : (
              <p className="soon-text">Coming Soon</p>
            )}
          </div>
        </div>
        <div className="ring"></div>
      </div>
    </div>
  );
};

export default Loading;
