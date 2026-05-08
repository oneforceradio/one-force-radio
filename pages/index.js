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
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Banner Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {/* Main Banner */}
        <img
          src="/banner.png"
          alt="OneForce Radio"
          style={{
            width: "100%",
            borderRadius: "12px",
            display: "block",
          }}
        />

        {/* Invisible Click Area */}
        <div
          onClick={playRadio}
          style={{
            position: "absolute",
left: "29%",
top: "61%",
width: "41%",
height: "11%",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Audio Player */}
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
          src="https://sky.doscast.com/stream/oneforce"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}
