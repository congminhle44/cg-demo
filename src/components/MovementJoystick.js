const MovementJoystick = ({ handleJoyStickPress, handleJoyStickRelease }) => {
  return (
    <>
      {window.innerWidth < 1024 && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <button
            style={{
              width: 48,
              height: 48,
              backgroundColor: "rgba(0,0,0,0.7)",
              outline: "none",
              border: "none",
            }}
            name="forward"
            onPointerDown={handleJoyStickPress}
            onPointerUp={handleJoyStickRelease}
          >
            <img
              style={{ pointerEvents: "none" }}
              src="/assets/keyboard_arrow_up.svg"
              alt="forward"
            />
          </button>
          <div style={{ display: "flex" }}>
            <button
              style={{
                width: 48,
                height: 48,
                backgroundColor: "rgba(0,0,0,0.7)",
                outline: "none",
                border: "none",
              }}
              name="left"
              onPointerDown={handleJoyStickPress}
              onPointerUp={handleJoyStickRelease}
            >
              <img
                style={{ pointerEvents: "none" }}
                src="/assets/keyboard_arrow_left.svg"
                alt="left"
              />
            </button>
            <button
              style={{
                width: 48,
                height: 48,
                backgroundColor: "rgba(0,0,0,0.7)",
                outline: "none",
                border: "none",
              }}
              name="jump"
              onPointerDown={handleJoyStickPress}
              onPointerUp={handleJoyStickRelease}
            ></button>
            <button
              style={{
                width: 48,
                height: 48,
                backgroundColor: "rgba(0,0,0,0.7)",
                outline: "none",
                border: "none",
              }}
              name="right"
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
          <button
            style={{
              width: 48,
              height: 48,
              backgroundColor: "rgba(0,0,0,0.7)",
              outline: "none",
              border: "none",
            }}
            name="backward"
            onPointerDown={handleJoyStickPress}
            onPointerUp={handleJoyStickRelease}
          >
            <img
              style={{ pointerEvents: "none" }}
              src="/assets/keyboard_arrow_down.svg"
              alt="backward"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default MovementJoystick;
