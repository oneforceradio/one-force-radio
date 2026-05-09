import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);

  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [message, setMessage] = useState("");

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

  const sendRequest = (e) => {
    e.preventDefault();

    const text = `OneForce Radio Request/Shoutout:%0A%0AName: ${name}%0ASong Request: ${song}%0AMessage/Shoutout: ${message}`;

    window.open(`https://wa.me/2207408888?text=${text}`, "_blank");
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(-45deg, #050505, #111111, #161616, #0d0d0d)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 18s ease infinite",
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
      <div className="navbar">
        <div className="logoText">ONEFORCE RADIO</div>

        <div className="navLinks">
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("djs")}>DJS</button>
          <button onClick={() => scrollToSection("schedule")}>SCHEDULE</button>
          <button onClick={() => scrollToSection("request")}>REQUEST</button>
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
        <div className="onAir">
          <div className="liveDot" />

          <div className="onAirText">ON AIR NOW</div>

          <div className="equalizer">
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                style={{
                  animationDelay: `${bar * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* BANNER */}
        <div className="bannerWrap">
          <img
            src="/banner1.png"
            alt="OneForce Radio"
            className="banner"
          />

          {/* PLAY BUTTON */}
          <div onClick={playRadio} className="playClickArea" />

          {/* SOCIAL LINKS */}
          <a
            href="https://www.instagram.com/oneforceradio"
            target="_blank"
            rel="noopener noreferrer"
            className="igLink"
          />

          <a
            href="https://www.facebook.com/oneforceradio"
            target="_blank"
            rel="noopener noreferrer"
            className="fbLink"
          />

          <a
            href="https://www.tiktok.com/@oneforce_radio"
            target="_blank"
            rel="noopener noreferrer"
            className="ttLink"
          />

          <a
            href="https://wa.me/2207408888"
            target="_blank"
            rel="noopener noreferrer"
            className="waLink"
          />

          <a
            href="https://www.youtube.com/@oneforceradio"
            target="_blank"
            rel="noopener noreferrer"
            className="ytLink"
          />

          <a
            href="https://www.twitch.tv/oneforceradio"
            target="_blank"
            rel="noopener noreferrer"
            className="twLink"
          />
        </div>

        {/* PLAYER */}
        <audio
          ref={audioRef}
          controls
          preload="none"
          className="audioPlayer"
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
          Meet the selectors and DJs bringing vibes from around the
          world.
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

      {/* REQUEST */}
      <section id="request" className="sectionBox">
        <h2>REQUEST / SHOUTOUT</h2>

        <p>
          Send a song request, birthday shoutout, big-up, or message to
          the station.
        </p>

        <form onSubmit={sendRequest} className="requestForm">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Song request"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />

          <textarea
            placeholder="Your shoutout / message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">
            SEND REQUEST VIA WHATSAPP
          </button>
        </form>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sectionBox">
        <h2>CONTACT ONEFORCE RADIO</h2>

        <p>WhatsApp: +220 7408888</p>

        <p>Email: info@oneforceradio.com</p>

        <a
          className="contactBtn"
          href="https://wa.me/2207408888"
          target="_blank"
        >
          CONTACT VIA WHATSAPP
        </a>

        <a
          className="contactBtn emailBtn"
          href="mailto:info@oneforceradio.com"
          target="_blank"
        >
          SEND EMAIL
        </a>
      </section>

      {/* FOOTER */}
      <div className="footer">
        © 2026 OneForce Radio — Live Worldwide 24/7
      </div>

      <style>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .navbar {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          margin-bottom: 20px;
          border-radius: 14px;
          background: rgba(17,17,17,0.92);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
          position: sticky;
          top: 10px;
          z-index: 50;
        }

        .logoText {
          color: #f7c600;
          font-weight: bold;
          font-size: 24px;
          letter-spacing: 1px;
        }

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

        .onAir {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-bottom: 18px;
        }

        .liveDot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: red;
          box-shadow: 0 0 10px red;
        }

        .onAirText {
          font-size: 22px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .equalizer {
          display: flex;
          gap: 4px;
          align-items: flex-end;
          height: 30px;
        }

        .equalizer div {
          width: 6px;
          height: 100%;
          background: #00ff99;
          border-radius: 3px;
          animation: bounce 1s infinite ease-in-out;
        }

        .bannerWrap {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .banner {
          width: 100%;
          border-radius: 14px;
          display: block;
          box-shadow: 0 0 40px rgba(0,0,0,0.5);
        }

        .playClickArea {
          position: absolute;
          left: 31%;
          top: 66%;
          width: 39%;
          height: 10%;
          cursor: pointer;
        }

        .igLink { position: absolute; right: 22.5%; top: 62%; width: 4%; height: 7%; cursor: pointer; }
        .fbLink { position: absolute; right: 17.5%; top: 62%; width: 4%; height: 7%; cursor: pointer; }
        .ttLink { position: absolute; right: 11.5%; top: 60%; width: 4%; height: 7%; cursor: pointer; }
        .waLink { position: absolute; right: 6.5%; top: 60%; width: 4%; height: 7%; cursor: pointer; }
        .ytLink { position: absolute; right: 16.5%; top: 68%; width: 5%; height: 7%; cursor: pointer; }
        .twLink { position: absolute; right: 10.5%; top: 68%; width: 5%; height: 7%; cursor: pointer; }

        .audioPlayer {
          width: 100%;
          max-width: 700px;
          margin-top: 20px;
          border-radius: 12px;
        }

        .sectionBox {
          width: 100%;
          max-width: 1100px;
          margin-top: 70px;
          padding: 40px 20px;
          border-radius: 18px;
          background: rgba(17,17,17,0.92);
          backdrop-filter: blur(10px);
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

        .requestForm {
          margin: 25px auto 0;
          max-width: 650px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .requestForm input,
        .requestForm textarea {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #333;
          background: #181818;
          color: white;
          font-size: 16px;
          outline: none;
        }

        .requestForm textarea {
          min-height: 120px;
          resize: vertical;
        }

        .requestForm input:focus,
        .requestForm textarea:focus {
          border-color: #f7c600;
          box-shadow: 0 0 12px rgba(247,198,0,0.25);
        }

        .requestForm button,
        .contactBtn {
          display: inline-block;
          margin-top: 10px;
          padding: 14px 24px;
          border-radius: 30px;
          background: #00ff99;
          color: #000;
          font-weight: bold;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .requestForm button:hover,
        .contactBtn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 18px #00ff99;
        }

        .emailBtn {
          margin-left: 12px;
          background: #f7c600;
        }

        .footer {
          margin-top: 25px;
          color: #777;
          font-size: 14px;
          text-align: center;
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
          .navbar {
            flex-direction: column;
          }

          .navLinks {
            gap: 8px;
            margin-top: 12px;
          }

          .navLinks button {
            font-size: 12px;
            padding: 8px 9px;
          }

          .sectionBox h2 {
            font-size: 26px;
          }

          .emailBtn {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
