const Crosshair = ({ showRaycast = false }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      {showRaycast ? (
        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            textAlign: "center",
            color: "white",
          }}
        >
          Click here to interact!
        </p>
      ) : (
        <div
          style={{
            height: "6px",
            width: "6px",
            backgroundColor: "white",
            borderRadius: "50%",
            border: "solid 1px gray",
          }}
        ></div>
      )}
    </div>
  );
};

export default Crosshair;
