const CameraJoystick = ({ handleJoyStickPress, handleJoyStickRelease }) => {
  return (
    <>
      {window.innerWidth < 1367 && (
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {/* <button
            style={{
              width: 32,
              height: 32,
              backgroundColor: "rgba(0,0,0,0.7)",
              outline: "none",
              border: "none",
            }}
            name="lookUp"
            onPointerDown={handleJoyStickPress}
            onPointerUp={handleJoyStickRelease}
          >
            <img
              style={{ pointerEvents: "none" }}
              src="/assets/keyboard_arrow_up.svg"
              alt="forward"
            />
          </button> */}
          <div style={{ display: "flex" }}>
            <button
              style={{
                width: 32,
                height: 32,
                backgroundColor: "rgba(0,0,0,0.7)",
                outline: "none",
                border: "none",
              }}
              name="lookLeft"
              onPointerDown={handleJoyStickPress}
              onPointerUp={handleJoyStickRelease}
            >
              <img
                style={{ pointerEvents: "none" }}
                src="/assets/keyboard_arrow_left.svg"
                alt="left"
              />
            </button>
            {/* <button
              style={{
                width: 32,
                height: 32,
                backgroundColor: "rgba(0,0,0,0.7)",
                outline: "none",
                border: "none",
              }}
              disabled
              onPointerDown={handleJoyStickPress}
              onPointerUp={handleJoyStickRelease}
            ></button> */}
            <button
              style={{
                width: 32,
                height: 32,
                backgroundColor: "rgba(0,0,0,0.7)",
                outline: "none",
                border: "none",
              }}
              name="lookRight"
              onPointerDown={handleJoyStickPress}
              onPointerUp={handleJoyStickRelease}
            >
              <img
                style={{ pointerEvents: "none" }}
                src="/assets/keyboard_arrow_right.svg"
                alt="right"
              />
            </button>
          </div>
          {/* <button
            style={{
              width: 32,
              height: 32,
              backgroundColor: "rgba(0,0,0,0.7)",
              outline: "none",
              border: "none",
            }}
            name="lookDown"
            onPointerDown={handleJoyStickPress}
            onPointerUp={handleJoyStickRelease}
          >
            <img
              style={{ pointerEvents: "none" }}
              src="/assets/keyboard_arrow_down.svg"
              alt="backward"
            />
          </button> */}
        </div>
      )}
    </>
  );
};

export default CameraJoystick;
