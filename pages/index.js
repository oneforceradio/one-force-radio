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

      {/* LIVE STATUS */}
      <div
        style={{
          marginTop: "25px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "red",
              boxShadow: "0 0 15px red",
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: "28px",
              letterSpacing: "1px",
            }}
          >
            ON AIR NOW
          </h2>
        </div>

        {/* Equalizer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "5px",
            height: "30px",
            marginBottom: "15px",
          }}
        >
          {[12, 20, 16, 28, 18].map((h, i) => (
            <div
              key={i}
              style={{
                width: "6px",
                height: `${h}px`,
                backgroundColor: "#1DB954",
                borderRadius: "4px",
              }}
            />
          ))}
        </div>

        <p
          style={{
            color: "#aaa",
            marginTop: "5px",
            fontSize: "16px",
          }}
        >
          Worldwide 24/7 Dancehall • Reggae • Afrobeats • Gam-Vibes • Hip Hop
        </p>
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
    </div>
  );
}
