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
      {/* LIVE STATUS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px",
          color: "white",
        }}
      >
        {/* Live Dot */}
        <div
          style={{
            width: "14px",
            height: "14px",
            backgroundColor: "red",
            borderRadius: "50%",
            boxShadow: "0 0 12px red",
          }}
        />

        {/* Text */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          ON AIR NOW
        </div>

        {/* Equalizer */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "4px",
            height: "30px",
          }}
        >
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              style={{
                width: "6px",
                height: "100%",
                background: "#00ff99",
                borderRadius: "3px",
                animation: `bounce 1s infinite ease-in-out`,
                animationDelay: `${bar * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <img
          src="/banner.png"
          alt="OneForce Radio"
          style={{
            width: "100%",
            borderRadius: "12px",
            display: "block",
          }}
        />

        {/* Click Area */}
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
          src="https://sky.doscast.com/proxy/oneforce/stream"
          type="audio/mpeg"
        />
      </audio>

      {/* Equalizer Animation */}
      <style>{`
        @keyframes bounce {
          0% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
          100% { transform: scaleY(0.4); }
        }
      `}</style>
    </div>
  );
}
