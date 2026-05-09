import { useRef } from "react";

export default function Home() {
  const audioRef = useRef(null);

  const playRadio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
        color: "white",
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
          position: "sticky",
          top: "10px",
          zIndex: 50,
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

        <div className="navLinks">
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("djs")}>DJS</button>
          <button onClick={() => scrollToSection("schedule")}>SCHEDULE</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
          <button className="listenBtn" onClick={playRadio}>
            LISTEN LIVE
          </button>
        </div>
      </div>

      {/* HOME SECTION */}
      <section id="home" style={{ width: "100%", textAlign: "center" }}>
        {/* ON AIR */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
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
            margin: "0 auto",
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

          {/* SOCIAL CLICK AREAS */}
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
      </section>

      {/* DJs SECTION */}
      <section id="djs" className="sectionBox">
        <h2>ONEFORCE DJS</h2>
        <p>
          Meet the selectors, DJs and hosts bringing energy from around the
          world.
        </p>
        <div className="cardGrid">
          <div className="infoCard">DJ profiles coming soon</div>
          <div className="infoCard">Guest DJs welcome</div>
          <div className="infoCard">Worldwide sounds</div>
        </div>
      </section>

      {/* SCHEDULE SECTION */}
      <section id="schedule" className="sectionBox">
        <h2>SHOW SCHEDULE</h2>
        <p>Live shows, guest mixes and special events will be listed here.</p>
        <div className="infoCard">Full schedule coming soon</div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="sectionBox">
        <h2>CONTACT ONEFORCE RADIO</h2>
        <p>For bookings, shoutouts, DJs, music submissions and partnerships.</p>
        <a className="contactBtn" href="https://wa.me/2207408888" target="_blank">
          WhatsApp OneForce Radio
        </a>
      </section>

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
        .navLinks {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        .navLinks button {
          background: transparent;
          border: none;
          color: white;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .navLinks button:hover {
          color: #f7c600;
          text-shadow: 0 0 10px #f7c600;
          transform: translateY(-2px);
        }

        .listenBtn {
          color: #00ff99 !important;
        }

        .listenBtn:hover {
          color: #00ffcc !important;
          text-shadow: 0 0 14px #00ff99 !important;
        }

        .sectionBox {
          width: 100%;
          max-width: 1100px;
          margin-top: 70px;
          padding: 40px 20px;
          border-radius: 18px;
          background: #111;
          box-shadow: 0 0 25px rgba(0,0,0,0.45);
          text-align: center;
        }

        .sectionBox h2 {
          color: #f7c600;
          font-size: 32px;
          margin-bottom: 10px;
        }

        .sectionBox p {
          color: #ccc;
          font-size: 18px;
        }

        .cardGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }

        .infoCard {
          padding: 25px;
          background: #181818;
          border-radius: 14px;
          color: white;
          box-shadow: 0 0 15px rgba(0,0,0,0.4);
        }

        .contactBtn {
          display: inline-block;
          margin-top: 20px;
          padding: 14px 24px;
          border-radius: 30px;
          background: #00ff99;
          color: #000;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .contactBtn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 18px #00ff99;
        }

        @keyframes bounce {
          0% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
          100% { transform: scaleY(0.4); }
        }

        @media (max-width: 700px) {
          .navLinks {
            gap: 12px;
            margin-top: 12px;
          }

          .navLinks button {
            font-size: 13px;
          }

          .sectionBox h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
}import { useRef } from "react";

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
