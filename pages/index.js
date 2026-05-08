export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        padding: 20,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        One Force Radio
      </h1>

      <p style={{ marginBottom: "30px", color: "#aaa" }}>
        Live 24/7 Dancehall • Reggae • Afrobeats
      </p>

      <audio controls autoPlay style={{ width: "100%", maxWidth: "500px" }}>
        <source
          src="http://sky.doscast.com:8207/live"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
