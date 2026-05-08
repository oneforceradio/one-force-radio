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
        fontFamily: "Arial, sans-serif",
        padding: 20,
        textAlign: "center",
      }}
    >
      <img
        src="/banner.png"
        alt="OneForce Radio Banner"
        style={{
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "20px",
          marginBottom: "40px",
          boxShadow: "0 0 25px rgba(0,0,0,0.5)",
        }}
      />

      <h1 style={{ fontSize: "56px", marginBottom: "10px" }}>
        OneForce Radio
      </h1>

      <p style={{ marginBottom: "30px", color: "#aaa", fontSize: "20px" }}>
        Live 24/7 Dancehall • Reggae • Afrobeats • Gam-Vibes • Hip Hop & More
      </p>

      <audio
        controls
        preload="none"
        style={{
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <source
          src="https://sky.doscast.com/proxy/oneforce/stream"
          type="audio/mpeg"
        />
        Your browser does not support the audio player.
      </audio>
    </div>
  );
}
