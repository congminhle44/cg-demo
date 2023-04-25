const IFrame = ({ cursorSelected, setCursorSelected }) => {
  return (
    <div
      style={{
        position: "absolute",
        background: "white",
        top: 0,
        right: 0,
        width: "500px",
        height: "100%",
        overflowY: "hidden",
        zIndex: 3,
        visibility: cursorSelected ? "visible" : "hidden",
      }}
    >
      <iframe
        src={cursorSelected ? cursorSelected : "https://meta-heroes.io"}
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
  );
};

export default IFrame;
