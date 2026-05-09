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
        backgroundColor: "#0d0d0d",
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

      {/* Banner Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {/* Banner Image */}
        <img
          src="/banner.png"
          alt="OneForce Radio"
          style={{
            width: "100%",
            borderRadius: "14px",
            display: "block",
          }}
        />

        {/* CLICK TO PLAY AREA */}
        <div
          onClick={playRadio}
          style={{
            position: "absolute",
            left: "31%",
            top: "66%",
            width: "39%",
            height: "10%",
            cursor: "pointer",
          }}
        />

        {/* INVISIBLE SOCIAL CLICK AREAS */}

        {/* Instagram */}
        <a
          href="https://www.instagram.com/oneforceradio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "28%",
            top: "60%",
            width: "4%",
            height: "8%",
          }}
        />

        {/* Facebook */}
        <a
          href="https://www.facebook.com/oneforceradio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "22%",
            top: "60%",
            width: "4%",
            height: "8%",
          }}
        />

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@oneforce_radio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "16%",
            top: "60%",
            width: "4%",
            height: "8%",
          }}
        />

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@oneforceradio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "10%",
            top: "60%",
            width: "4%",
            height: "8%",
          }}
        />

        {/* Twitch */}
        <a
          href="https://www.twitch.tv/oneforceradio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "4%",
            top: "60%",
            width: "4%",
            height: "8%",
          }}
        />

        {/* WhatsApp */}
        <a
          href="https://wa.me/2207408888"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "0%",
            top: "60%",
            width: "4%",
            height: "8%",
          }}
        />
      </div>

      {/* AUDIO PLAYER */}
      <audio
        ref={audioRef}
        controls
        preload="none"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "20px",
          borderRadius: "12px",
        }}
      >
        <source
          src="https://sky.doscast.com/proxy/oneforce/stream"
          type="audio/mpeg"
        />
      </audio>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "25px",
          color: "#777",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        © 2026 OneForce Radio — Live Worldwide 24/7
      </div>

      {/* ANIMATION */}
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
