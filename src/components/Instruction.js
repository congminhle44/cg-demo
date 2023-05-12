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
            <>
              <img src="/assets/mobile1.png" alt="Mobile 1" />
              <img src="/assets/mobile2.png" alt="Mobile 2" />
              <img src="/assets/mobile3.png" alt="Mobile 3" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Instruction;
