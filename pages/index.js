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
        backgroundColor: "#0b0b0b",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          marginBottom: "20px",
          borderRadius: "14px",
          background: "#111",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            color: "#f7c600",
            fontWeight: "bold",
            fontSize: "24px",
            letterSpacing: "1px",
          }}
        >
          ONEFORCE RADIO
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            color: "white",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          <div style={{ cursor: "pointer" }}>HOME</div>
          <div style={{ cursor: "pointer" }}>DJS</div>
          <div style={{ cursor: "pointer" }}>SCHEDULE</div>
          <div style={{ cursor: "pointer" }}>CONTACT</div>
          <div
            onClick={playRadio}
            style={{
              cursor: "pointer",
              color: "#00ff99",
            }}
          >
            LISTEN LIVE
          </div>
        </div>
      </div>

      {/* ON AIR */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "18px",
          color: "white",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "red",
            boxShadow: "0 0 10px red",
          }}
        />

        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          ON AIR NOW
        </div>

        <div
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "flex-end",
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
                animation: "bounce 1s infinite ease-in-out",
                animationDelay: `${bar * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* BANNER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <img
          src="/banner1.png"
          alt="OneForce Radio"
          style={{
            width: "100%",
            borderRadius: "14px",
            display: "block",
          }}
        />

        {/* PLAY BUTTON */}
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

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/oneforceradio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "22.5%",
            top: "62%",
            width: "4%",
            height: "7%",
          }}
        />

        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/oneforceradio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "17.5%",
            top: "62%",
            width: "4%",
            height: "7%",
          }}
        />

        {/* TIKTOK */}
        <a
          href="https://www.tiktok.com/@oneforce_radio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "11.5%",
            top: "60%",
            width: "4%",
            height: "7%",
          }}
        />

        {/* WHATSAPP */}
        <a
          href="https://wa.me/2207408888"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "6.5%",
            top: "60%",
            width: "4%",
            height: "7%",
          }}
        />

        {/* YOUTUBE */}
        <a
          href="https://www.youtube.com/@oneforceradio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "16.5%",
            top: "68%",
            width: "5%",
            height: "7%",
          }}
        />

        {/* TWITCH */}
        <a
          href="https://www.twitch.tv/oneforceradio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            right: "10.5%",
            top: "68%",
            width: "5%",
            height: "7%",
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

      <style>{`
        @keyframes bounce {
          0% {
            transform: scaleY(0.4);
          }
          50% {
            transform: scaleY(1);
          }
          100% {
            transform: scaleY(0.4);
          }
        }
      `}</style>
    </div>
  );
}
