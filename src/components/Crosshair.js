const Crosshair = ({
  hoverOn = "",
  cursorSelected = "",
  setCursorSelected,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          height: "6px",
          width: "6px",
          backgroundColor: "white",
          borderRadius: "50%",
          border: "solid 1px gray",
        }}
      />
      {hoverOn && (
        <p
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(8px, -50%)",
            fontSize: 18,
            fontWeight: 500,
            color: "white",
          }}
        >
          [Click]
        </p>
      )}
      <div
        style={{
          position: "absolute",
          background: "white",
          top: 0,
          right: 0,
          width: "500px",
          height: "100%",
          overflowY: "hidden",
          opacity: 0.92,
          visibility: cursorSelected ? "visible" : "hidden",
        }}
      >
        <iframe
          src={cursorSelected || "https://meta-heroes.io"}
          title={cursorSelected}
          width="100%"
          height="100%"
        />
        <div
          onClick={(e) => {
            e.stopPropagation();
            setCursorSelected("");
          }}
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
            fontSize: 24,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            textAlign: "center",
            lineHeight: "48px",
            zIndex: 2,
            cursor: "pointer",
            backgroundColor: "rgba(123,121,233,0.8)",
            color: "white",
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default Crosshair;
