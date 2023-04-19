const Instruction = ({
  instructDevice,
  setInstructDevice,
  setShowInstruct,
}) => {
  return (
    <div className="instruction-container">
      <div className="instruction">
        <div className="close-container">
          <img
            onClick={(e) => {
              e.stopPropagation();
              setShowInstruct(false);
            }}
            className="close-btn"
            src="/assets/close.svg"
            alt="close"
          />
        </div>
        <div className="tab">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setInstructDevice("pc");
            }}
            className={`device ${instructDevice === "pc" && "active"}`}
          >
            PC版
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setInstructDevice("mobile");
            }}
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
    </div>
  );
};

export default Instruction;
