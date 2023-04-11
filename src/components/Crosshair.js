const Interface = ({ hoverOn = "" }) => {
  return (
    <>
      {window.innerWidth > 1367 && (
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
            zIndex: 2,
          }}
        >
          {window.innerWidth > 1367 && (
            <>
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
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Interface;
