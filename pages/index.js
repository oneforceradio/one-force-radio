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
    <div className="pageWrap">
      <div className="glowOrb orb1" />
      <div className="glowOrb orb2" />
      <div className="glowOrb orb3" />

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logoText">ONEFORCE RADIO</div>

        <div className="navLinks">
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("djs")}>DJS</button>
          <button onClick={() => scrollToSection("schedule")}>SCHEDULE</button>
          <button onClick={() => scrollToSection("request")}>REQUEST</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>

          <button className="listenBtn" onClick={playRadio}>
            LISTEN LIVE
          </button>
        </div>
      </div>

      {/* HOME */}
      <section id="home" style={{ width: "100%", textAlign: "center", zIndex: 2 }}>
        <div className="onAir">
          <div className="liveDot" />
          <div className="onAirText">ON AIR NOW</div>

          <div className="equalizer">
            {[1, 2, 3, 4].map((bar) => (
              <div key={bar} style={{ animationDelay: `${bar * 0.15}s` }} />
            ))}
          </div>
        </div>

        <div className="bannerWrap">
          <img src="/banner1.png" alt="OneForce Radio" className="banner" />

          {/* SPEAKER PULSE OVERLAYS */}
          <div className="speakerPulse pulseLeftTop" />
          <div className="speakerPulse pulseLeftBottom" />
          <div className="speakerPulse pulseLogo" />
          <div className="speakerPulse pulseRightTop" />
          <div className="speakerPulse pulseRightBottom" />

          <div onClick={playRadio} className="playClickArea" />

          <a href="https://www.instagram.com/oneforceradio" target="_blank" rel="noopener noreferrer" className="igLink" />
          <a href="https://www.facebook.com/oneforceradio" target="_blank" rel="noopener noreferrer" className="fbLink" />
          <a href="https://www.tiktok.com/@oneforce_radio" target="_blank" rel="noopener noreferrer" className="ttLink" />
          <a href="https://wa.me/2207408888" target="_blank" rel="noopener noreferrer" className="waLink" />
          <a href="https://www.youtube.com/@oneforceradio" target="_blank" rel="noopener noreferrer" className="ytLink" />
          <a href="https://www.twitch.tv/oneforceradio" target="_blank" rel="noopener noreferrer" className="twLink" />
        </div>

        <audio ref={audioRef} controls preload="none" className="audioPlayer">
          <source
            src="https://sky.doscast.com/proxy/oneforce/stream"
            type="audio/mpeg"
          />
        </audio>
      </section>

      <section id="djs" className="sectionBox">
        <h2>ONEFORCE DJS</h2>
        <p>Meet the selectors and DJs bringing vibes from around the world.</p>

        <div className="cardGrid">
          <div className="infoCard">DJ Profiles Coming Soon</div>
          <div className="infoCard">Worldwide Guest DJs</div>
          <div className="infoCard">Live Shows & Events</div>
        </div>
      </section>

      <section id="schedule" className="sectionBox">
        <h2>SHOW SCHEDULE</h2>
        <p>Live programming and special broadcasts coming soon.</p>
      </section>

      <section id="request" className="sectionBox">
        <h2>REQUEST / SHOUTOUT</h2>
        <p>Send a song request, birthday shoutout, big-up, or message to the station.</p>

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

          <button type="submit">SEND REQUEST VIA WHATSAPP</button>
        </form>
      </section>

      <section id="contact" className="sectionBox">
        <h2>CONTACT ONEFORCE RADIO</h2>

        <p>WhatsApp: +220 7408888</p>
        <p>Email: info@oneforceradio.com</p>

        <a className="contactBtn" href="https://wa.me/2207408888" target="_blank">
          CONTACT VIA WHATSAPP
        </a>

        <a className="contactBtn emailBtn" href="mailto:info@oneforceradio.com" target="_blank">
          SEND EMAIL
        </a>
      </section>

      <div className="footer">
        © 2026 OneForce Radio — Live Worldwide 24/7
      </div>

      <style>{`
        .pageWrap {
          position: relative;
          overflow: hidden;
          background: linear-gradient(-45deg, #050505, #111111, #161616, #0d0d0d);
          background-size: 400% 400%;
          animation: gradientMove 18s ease infinite;
          min-height: 100vh;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: Arial, sans-serif;
          color: white;
        }

        .glowOrb {
          position: fixed;
          border-radius: 50%;
          filter: blur(55px);
          opacity: 0.22;
          z-index: 0;
          pointer-events: none;
        }

        .orb1 {
          width: 260px;
          height: 260px;
          background: #f7c600;
          top: 12%;
          left: 6%;
          animation: floatOrb1 16s ease-in-out infinite;
        }

        .orb2 {
          width: 300px;
          height: 300px;
          background: #00ff99;
          bottom: 12%;
          right: 6%;
          animation: floatOrb2 20s ease-in-out infinite;
        }

        .orb3 {
          width: 220px;
          height: 220px;
          background: #ff0033;
          top: 45%;
          right: 20%;
          animation: floatOrb3 24s ease-in-out infinite;
        }

        .navbar, .sectionBox, #home, .footer {
          position: relative;
          z-index: 2;
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
          text-shadow: 0 0 5px #f7c600, 0 0 10px #f7c600, 0 0 18px #f7c600;
          box-shadow: 0 0 12px rgba(247,198,0,0.25);
          transform: translateY(-2px) scale(1.06);
        }

        .listenBtn {
          color: #00ff99 !important;
        }

        .listenBtn:hover {
          color: #00ffcc !important;
          text-shadow: 0 0 6px #00ff99, 0 0 12px #00ff99, 0 0 20px #00ff99 !important;
          box-shadow: 0 0 15px rgba(0,255,153,0.3);
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

        .speakerPulse {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 3;
          background: radial-gradient(circle, rgba(0,255,80,0.38) 0%, rgba(0,255,80,0.15) 35%, rgba(0,255,80,0) 70%);
          box-shadow: 0 0 18px rgba(0,255,80,0.8), 0 0 35px rgba(247,198,0,0.45);
          animation: speakerBass 1.15s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        .pulseLeftTop {
          left: 6.5%;
          top: 15.5%;
          width: 5.2%;
          height: 7.2%;
        }

        .pulseLeftBottom {
          left: 5.4%;
          top: 31%;
          width: 7.3%;
          height: 10%;
          animation-delay: 0.2s;
        }

        .pulseLogo {
          left: 31.5%;
          top: 13.5%;
          width: 7%;
          height: 9.4%;
          animation-delay: 0.1s;
        }

        .pulseRightTop {
          right: 6.7%;
          top: 15.5%;
          width: 5.2%;
          height: 7.2%;
          animation-delay: 0.18s;
        }

        .pulseRightBottom {
          right: 5.5%;
          top: 31%;
          width: 7.3%;
          height: 10%;
          animation-delay: 0.28s;
        }

        .playClickArea {
          position: absolute;
          left: 31%;
          top: 66%;
          width: 39%;
          height: 10%;
          cursor: pointer;
          z-index: 5;
        }

        .igLink { position: absolute; right: 22.5%; top: 62%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .fbLink { position: absolute; right: 17.5%; top: 62%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .ttLink { position: absolute; right: 11.5%; top: 60%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .waLink { position: absolute; right: 6.5%; top: 60%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .ytLink { position: absolute; right: 16.5%; top: 68%; width: 5%; height: 7%; cursor: pointer; z-index: 5; }
        .twLink { position: absolute; right: 10.5%; top: 68%; width: 5%; height: 7%; cursor: pointer; z-index: 5; }

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

        @keyframes speakerBass {
          0% {
            transform: scale(0.82);
            opacity: 0.25;
          }
          40% {
            transform: scale(1.12);
            opacity: 0.85;
          }
          70% {
            transform: scale(0.95);
            opacity: 0.45;
          }
          100% {
            transform: scale(0.82);
            opacity: 0.25;
          }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatOrb1 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(70px, 60px) scale(1.15); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes floatOrb2 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, -50px) scale(1.2); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes floatOrb3 {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 80px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes bounce {
          0% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
          100% { transform: scaleY(0.4); }
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

          .glowOrb {
            opacity: 0.16;
          }

          .speakerPulse {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
