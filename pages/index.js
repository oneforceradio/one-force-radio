import { useRef } from "react";

export default function Home() {
  const audioRef = useRef(null);

  const playRadio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src="/banner.png"
        alt="OneForce Radio"
        onClick={playRadio}
        style={{
          width: "100%",
          maxWidth: "1100px",
          borderRadius: "20px",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
        }}
      />

      <audio
        ref={audioRef}
        controls
        preload="none"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "20px",
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
