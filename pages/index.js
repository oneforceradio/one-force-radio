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
      section.scrollIntoView({
        behavior: "smooth",
      });
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

          <button onClick={() => scrollToSection("schedule")}>
            SCHEDULE
          </button>

          <button onClick={() => scrollToSection("contact")}>
            CONTACT
          </button>

          <button className="listenBtn" onClick={playRadio}>
            LISTEN LIVE
          </button>
        </div>
      </div>

      {/* HOME */}
      <section
        id="home"
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
            }}
          />
        </div>

        {/* PLAYER */}
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

      {/* DJS */}
      <section id="djs" className="sectionBox">
        <h2>ONEFORCE DJS</h2>

        <p>
          Meet the selectors and DJs bringing vibes from around the world.
        </p>

        <div className="cardGrid">
          <div className="infoCard">DJ Profiles Coming Soon</div>

          <div className="infoCard">Worldwide Guest DJs</div>

          <div className="infoCard">Live Shows & Events</div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="sectionBox">
        <h2>SHOW SCHEDULE</h2>

        <p>Live programming and special broadcasts coming soon.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sectionBox">
        <h2>CONTACT ONEFORCE RADIO</h2>

        <p
          style={{
            marginTop: "15px",
            color: "#ccc",
            fontSize: "18px",
          }}
        >
          WhatsApp: +220 7408888
        </p>

        <p
          style={{
            marginTop: "10px",
            color: "#ccc",
            fontSize: "18px",
          }}
        >
          Email: info@oneforceradio.com
        </p>

        <a
          className="contactBtn"
          href="https://wa.me/2207408888"
          target="_blank"
        >
          CONTACT VIA WHATSAPP
        </a>

        <a
          className="contactBtn"
          href="mailto:info@oneforceradio.com"
          target="_blank"
          style={{
            marginLeft: "12px",
            background: "#f7c600",
          }}
        >
          SEND EMAIL
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
          transition: all 0.3s ease;
          padding: 10px 14px;
          border-radius: 12px;
        }

        .navLinks button:hover {
          color: #f7c600;
          background: rgba(247, 198, 0, 0.12);
          text-shadow:
            0 0 5px #f7c600,
            0 0 10px #f7c600,
            0 0 18px #f7c600;
          box-shadow:
            0 0 12px rgba(247,198,0,0.25);
          transform: translateY(-2px) scale(1.06);
        }

        .listenBtn {
          color: #00ff99 !important;
        }

        .listenBtn:hover {
          color: #00ffcc !important;
          text-shadow:
            0 0 6px #00ff99,
            0 0 12px #00ff99,
            0 0 20px #00ff99 !important;
          box-shadow:
            0 0 15px rgba(0,255,153,0.3);
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
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .contactBtn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 18px #00ff99;
        }

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

      {/* HOME */}
      <section
        id="home"
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
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
              cursor: "pointer",
            }}
          />
        </div>

        {/* PLAYER */}
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

      {/* DJS */}
      <section id="djs" className="sectionBox">
        <h2>ONEFORCE DJS</h2>
        <p>
          Meet the selectors and DJs bringing vibes from around the world.
        </p>

        <div className="cardGrid">
          <div className="infoCard">DJ Profiles Coming Soon</div>
          <div className="infoCard">Worldwide Guest DJs</div>
          <div className="infoCard">Live Shows & Events</div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="sectionBox">
        <h2>SHOW SCHEDULE</h2>
        <p>Live programming and special broadcasts coming soon.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sectionBox">
        <h2>CONTACT ONEFORCE RADIO</h2>

        <a
          className="contactBtn"
          href="https://wa.me/2207408888"
          target="_blank"
        >
          CONTACT VIA WHATSAPP
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
          transition: all 0.3s ease;
          padding: 10px 14px;
          border-radius: 12px;
        }

        .navLinks button:hover {
          color: #f7c600;
          background: rgba(247, 198, 0, 0.12);
          text-shadow:
            0 0 5px #f7c600,
            0 0 10px #f7c600,
            0 0 18px #f7c600;
          box-shadow:
            0 0 12px rgba(247,198,0,0.25);
          transform: translateY(-2px) scale(1.06);
        }

        .listenBtn {
          color: #00ff99 !important;
        }

        .listenBtn:hover {
          color: #00ffcc !important;
          text-shadow:
            0 0 6px #00ff99,
            0 0 12px #00ff99,
            0 0 20px #00ff99 !important;
          box-shadow:
            0 0 15px rgba(0,255,153,0.3);
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
          cursor: pointer;
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
}
