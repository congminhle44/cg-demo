const Crosshair = ({ hoverOn = "", cursorSelected = "" }) => {
  const link = {
    guildboard: "https://meta-heroes.io/#surveice",
    PC001: "https://meta-heroes.io/#company",
    平面: "https://meta-heroes.io/#work",
    平面001: "https://meta-heroes.io/#work",
    bar001: "https://meta-heroes.io/#work",
    "counter-table001": "https://meta-heroes.io/#news",
  };

  const selectedLink = link[cursorSelected];

  const isHover = link[hoverOn];

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
      {isHover && (
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
          [Click to Interact]
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
          visibility: selectedLink ? "visible" : "hidden",
        }}
      >
        <iframe
          src={selectedLink || "https://meta-heroes.io"}
          title={cursorSelected}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Crosshair;
