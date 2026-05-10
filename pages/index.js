import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);

  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [message, setMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const liveShow = {
    dj: "DJ Lashes",
    show: "Dancehall Showcase",
    genre: "Dancehall • Reggae • Afrobeat",
    image: "/djlashes.jpg",
    status: "LIVE NOW",
  };

  const events = [
    {
      title: "Tobaski Special",
      date: "30 May 2026",
      location: "Vienna, Austria",
      info: "OneForce Sound live in Vienna with DJ Lashes.",
      flyers: ["/events/vienna-30-may.jpeg"],
      link: "https://wa.me/2207408888",
    },
    {
      title: "More Fire Resurrection",
      date: "13 June 2026",
      location: "Hannover, Germany",
      info: "Dancehall, reggae and sound system energy live in Hannover.",
      flyers: [
        "/events/hannover-13-june-1.jpeg",
        "/events/hannover-13-june-2.jpeg",
        "/events/hannover-13-june-3.jpeg",
        "/events/hannover-13-june-4.jpeg",
      ],
      link: "https://wa.me/2207408888",
    },
    {
      title: "Luv In The House",
      date: "4 July 2026",
      location: "Bristol, United Kingdom",
      info: "A live event experience with DJ Lashes and special guests.",
      flyers: ["/events/bristol-04-july.jpg"],
      link: "https://wa.me/2207408888",
    },
    {
      title: "Feels Like Home",
      date: "1 August 2026",
      location: "Hannover, Germany",
      info: "In and outdoor festival with reggae, dancehall, soca, afrobeat and amapiano vibes.",
      flyers: ["/events/hannover-01-august.jpg"],
      link: "https://wa.me/2207408888",
    },
  ];

  const [eventSlide, setEventSlide] = useState({});

  const playRadio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleRadio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const sendRequest = (e) => {
    e.preventDefault();
    const text = `OneForce Radio Request/Shoutout:%0A%0AName: ${name}%0ASong Request: ${song}%0AMessage/Shoutout: ${message}`;
    window.open(`https://wa.me/2207408888?text=${text}`, "_blank");
  };

  const changeEventSlide = (eventIndex, direction) => {
    const totalFlyers = events[eventIndex].flyers.length;
    const currentSlide = eventSlide[eventIndex] || 0;
    const nextSlide =
      direction === "next"
        ? (currentSlide + 1) % totalFlyers
        : (currentSlide - 1 + totalFlyers) % totalFlyers;

    setEventSlide({ ...eventSlide, [eventIndex]: nextSlide });
  };

  return (
    <div className="pageWrap">
      <div className="glowOrb orb1" />
      <div className="glowOrb orb2" />
      <div className="glowOrb orb3" />

      <div className="navbar">
        <div className="logoText">ONEFORCE RADIO</div>

        <div className="navLinks">
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("djs")}>DJS</button>
          <button onClick={() => scrollToSection("events")}>EVENTS</button>
          <button onClick={() => scrollToSection("schedule")}>SCHEDULE</button>
          <button onClick={() => scrollToSection("request")}>REQUEST</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
          <button className="listenBtn" onClick={playRadio}>
            LISTEN LIVE
          </button>
        </div>
      </div>

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

          <div className="speakerPulse pulseLogo" />
          <div onClick={playRadio} className="playClickArea" />

          <a href="https://www.instagram.com/oneforceradio" target="_blank" rel="noopener noreferrer" className="igLink" />
          <a href="https://www.facebook.com/oneforceradio" target="_blank" rel="noopener noreferrer" className="fbLink" />
          <a href="https://www.tiktok.com/@oneforce_radio" target="_blank" rel="noopener noreferrer" className="ttLink" />
          <a href="https://wa.me/2207408888" target="_blank" rel="noopener noreferrer" className="waLink" />
          <a href="https://www.youtube.com/@oneforceradio" target="_blank" rel="noopener noreferrer" className="ytLink" />
          <a href="https://www.twitch.tv/oneforceradio" target="_blank" rel="noopener noreferrer" className="twLink" />
        </div>

        <div className="customPlayer">
          <button className="mainPlayButton" onClick={toggleRadio}>
            <span className="playIcon">{isPlaying ? "❚❚" : "▶"}</span>
            <span>{isPlaying ? "PAUSE STREAM" : "LISTEN LIVE"}</span>
          </button>

          <div className="playerStatus">
            <span className={isPlaying ? "statusDot active" : "statusDot"}></span>
            {isPlaying ? "STREAM PLAYING" : "READY TO PLAY"}
          </div>
        </div>

        <audio
          ref={audioRef}
          preload="none"
          className="hiddenAudioPlayer"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="https://sky.doscast.com/proxy/oneforce/stream" type="audio/mpeg" />
        </audio>

        <div className="liveStatusCard">
          <div className="liveBadge">
            <span></span>
            {liveShow.status}
          </div>

          <div className="liveStatusContent">
            <img src={liveShow.image} alt={liveShow.dj} className="liveDjImage" />

            <div>
              <h2>{liveShow.dj}</h2>
              <h3>{liveShow.show}</h3>
              <p>{liveShow.genre}</p>
              <div className="broadcastText">Broadcasting Worldwide 24/7</div>
            </div>
          </div>
        </div>
      </section>

      <section id="djs" className="sectionBox">
        <h2>ONEFORCE RADIO DJS</h2>
        <p>Meet the selectors and DJs bringing vibes from around the world.</p>

        <div className="djGrid">
          <div className="djCard">
            <div className="djImageWrap">
              <img src="/djlashes.jpg" alt="DJ Lashes" className="djImage" />
            </div>

            <div className="djContent">
              <h3>DJ Lashes</h3>
              <div className="djSubName">OneForce Sound</div>

              <div className="djLocation">
                Based In Europe & The Gambia • UK-born • Jamaican roots
              </div>

              <div className="djGenre">
                Dancehall • Reggae • Afrobeat
              </div>

              <p className="djBio">
                International DJ and founder of OneForce Sound, known for high-energy
                dancehall sets blazing the stage across Europe and Africa.
              </p>

              <a
                href="https://www.instagram.com/djlashes/"
                target="_blank"
                rel="noopener noreferrer"
                className="djSocialBtn"
              >
                INSTAGRAM
              </a>
            </div>
          </div>

          <div className="djCard">
            <div className="djImageWrap">
              <img src="/djleon.jpg" alt="The 8th Wonder" className="djImage" />
            </div>

            <div className="djContent">
              <h3>The 8th Wonder</h3>
              <div className="djSubName">Gorilla Mvmts Sound System</div>

              <div className="djLocation">
                Based In The United Kingdom • British & Jamaican Heritage
              </div>

              <div className="djGenre">
                Multi Genre
              </div>

              <p className="djBio">
                UK-based selector and founder of Gorilla Mvmts Sound System,
                bringing versatile multi-genre energy and authentic sound system
                culture to every session.
              </p>

              <a
                href="https://www.instagram.com/gorillamovements/"
                target="_blank"
                rel="noopener noreferrer"
                className="djSocialBtn"
              >
                INSTAGRAM
              </a>
            </div>
          </div>

          <div className="djCard placeholderCard">
            <div className="djPlaceholder">COMING SOON</div>

            <div className="djContent">
              <h3>New DJ Slot</h3>
              <div className="djLocation">Worldwide</div>
              <div className="djGenre">Future Resident DJ</div>

              <p className="djBio">
                More live DJs, selectors and radio personalities will be added soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="sectionBox">
        <h2>UPCOMING EVENTS</h2>
        <p>Catch OneForce Sound and OneForce Radio energy live at upcoming events.</p>

        <div className="eventsGrid">
          {events.map((event, index) => {
            const activeSlide = eventSlide[index] || 0;
            const hasMultipleFlyers = event.flyers.length > 1;

            return (
              <div className="eventCard" key={event.title}>
                <div className="eventFlyerWrap">
                  <img
                    src={event.flyers[activeSlide]}
                    alt={`${event.title} flyer`}
                    className="eventFlyer"
                  />

                  {hasMultipleFlyers && (
                    <>
                      <button
                        className="flyerArrow flyerArrowLeft"
                        onClick={() => changeEventSlide(index, "prev")}
                        aria-label="Previous flyer"
                      >
                        ‹
                      </button>

                      <button
                        className="flyerArrow flyerArrowRight"
                        onClick={() => changeEventSlide(index, "next")}
                        aria-label="Next flyer"
                      >
                        ›
                      </button>

                      <div className="flyerCounter">
                        {activeSlide + 1} / {event.flyers.length}
                      </div>
                    </>
                  )}
                </div>

                <div className="eventContent">
                  <div className="eventDate">{event.date}</div>
                  <h3>{event.title}</h3>
                  <div className="eventLocation">{event.location}</div>
                  <p>{event.info}</p>

                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eventBtn"
                  >
                    EVENT INFO
                  </a>
                </div>
              </div>
            );
          })}
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
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Song request" value={song} onChange={(e) => setSong(e.target.value)} />
          <textarea placeholder="Your shoutout / message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">SEND REQUEST VIA WHATSAPP</button>
        </form>
      </section>

      <section id="contact" className="sectionBox">
        <h2>CONTACT ONEFORCE RADIO</h2>
        <p>WhatsApp: +220 7408888</p>
        <p>Email: info@oneforceradio.com</p>

        <a className="contactBtn" href="https://wa.me/2207408888" target="_blank" rel="noopener noreferrer">
          CONTACT VIA WHATSAPP
        </a>

        <a className="contactBtn emailBtn" href="mailto:info@oneforceradio.com" target="_blank" rel="noopener noreferrer">
          SEND EMAIL
        </a>
      </section>

      <div className="footer">© 2026 OneForce Radio — Live Worldwide 24/7</div>

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

        .orb1 { width: 260px; height: 260px; background: #f7c600; top: 12%; left: 6%; animation: floatOrb1 16s ease-in-out infinite; }
        .orb2 { width: 300px; height: 300px; background: #00ff99; bottom: 12%; right: 6%; animation: floatOrb2 20s ease-in-out infinite; }
        .orb3 { width: 220px; height: 220px; background: #ff0033; top: 45%; right: 20%; animation: floatOrb3 24s ease-in-out infinite; }

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

        .listenBtn { color: #00ff99 !important; }

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
          background: radial-gradient(circle, rgba(0,255,80,0.40) 0%, rgba(0,255,80,0.14) 35%, rgba(0,255,80,0) 72%);
          box-shadow: 0 0 16px rgba(0,255,80,0.7), 0 0 28px rgba(247,198,0,0.32);
          animation: speakerBass 1.15s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        .pulseLogo {
          left: 28.3%;
          top: 15.5%;
          width: 5.4%;
          height: 7.5%;
          animation-delay: 0.1s;
        }

        .playClickArea { position: absolute; left: 31%; top: 66%; width: 39%; height: 10%; cursor: pointer; z-index: 5; }

        .igLink { position: absolute; right: 22.5%; top: 62%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .fbLink { position: absolute; right: 17.5%; top: 62%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .ttLink { position: absolute; right: 11.5%; top: 60%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .waLink { position: absolute; right: 6.5%; top: 60%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .ytLink { position: absolute; right: 16.5%; top: 68%; width: 5%; height: 7%; cursor: pointer; z-index: 5; }
        .twLink { position: absolute; right: 10.5%; top: 68%; width: 5%; height: 7%; cursor: pointer; z-index: 5; }

        .customPlayer {
          width: 100%;
          max-width: 700px;
          margin: 22px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .mainPlayButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 34px;
          border-radius: 999px;
          border: 1px solid rgba(0,255,153,0.45);
          background: linear-gradient(135deg, #00ff99, #f7c600);
          color: #000;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(0,255,153,0.28), 0 0 35px rgba(247,198,0,0.16);
          transition: all 0.25s ease;
        }

        .mainPlayButton:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 0 28px rgba(0,255,153,0.42), 0 0 45px rgba(247,198,0,0.28);
        }

        .playIcon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.18);
          font-size: 14px;
        }

        .playerStatus {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ccc;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .statusDot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #777;
        }

        .statusDot.active {
          background: red;
          box-shadow: 0 0 10px red;
          animation: liveBlink 1s infinite;
        }

        .hiddenAudioPlayer {
          display: none;
        }

        .liveStatusCard {
          width: 100%;
          max-width: 760px;
          margin: 25px auto 0;
          padding: 22px;
          border-radius: 20px;
          background: rgba(17,17,17,0.95);
          border: 1px solid rgba(0,255,153,0.3);
          box-shadow: 0 0 25px rgba(0,255,153,0.18), inset 0 0 18px rgba(247,198,0,0.05);
          box-sizing: border-box;
          animation: liveCardGlow 2.2s ease-in-out infinite;
        }

        .liveBadge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #00ff99;
          font-weight: bold;
          margin-bottom: 18px;
          letter-spacing: 1px;
        }

        .liveBadge span {
          width: 10px;
          height: 10px;
          background: red;
          border-radius: 50%;
          box-shadow: 0 0 10px red;
          animation: liveBlink 1s infinite;
        }

        .liveStatusContent {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
        }

        .liveDjImage {
          width: 95px;
          height: 95px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 3px solid #f7c600;
          box-shadow: 0 0 18px rgba(247,198,0,0.4);
        }

        .liveStatusContent h2 {
          margin: 0;
          color: #f7c600;
          font-size: 30px;
        }

        .liveStatusContent h3 {
          margin: 6px 0;
          color: white;
          font-size: 20px;
        }

        .liveStatusContent p {
          margin: 0;
          color: #ccc;
          font-size: 16px;
        }

        .broadcastText {
          margin-top: 10px;
          color: #00ff99;
          font-weight: bold;
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
          box-sizing: border-box;
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

        .djGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          margin-top: 35px;
        }

        .djCard {
          background: rgba(24,24,24,0.96);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
        }

        .djCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 20px rgba(247,198,0,0.25), 0 0 40px rgba(0,255,153,0.15);
        }

        .djImageWrap {
          width: 100%;
          height: 350px;
          overflow: hidden;
          background: #111;
        }

        .djImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .djContent {
          padding: 22px 24px 30px;
        }

        .djCard h3 {
          margin: 0;
          font-size: 28px;
          color: #f7c600;
        }

        .djSubName {
          margin-top: 4px;
          color: #00ff99;
          font-size: 18px;
          font-weight: bold;
        }

        .djLocation {
          margin-top: 12px;
          color: #00ff99;
          font-size: 15px;
          line-height: 1.5;
        }

        .djGenre {
          margin-top: 12px;
          color: #ccc;
          font-size: 15px;
          font-weight: bold;
          line-height: 1.5;
        }

        .djBio {
          margin-top: 15px;
          color: #bbb;
          line-height: 1.6;
          font-size: 15px;
        }

        .djSocialBtn {
          display: inline-block;
          margin-top: 18px;
          padding: 11px 20px;
          border-radius: 24px;
          background: #f7c600;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.25s ease;
        }

        .djSocialBtn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 16px rgba(247,198,0,0.6);
        }

        .djPlaceholder {
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #181818, #222, #111);
          color: #f7c600;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .eventsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          margin-top: 35px;
        }

        .eventCard {
          background: rgba(24,24,24,0.96);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0,0,0,0.42);
          border: 1px solid rgba(247,198,0,0.12);
          transition: all 0.3s ease;
        }

        .eventCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 22px rgba(247,198,0,0.24), 0 0 42px rgba(0,255,153,0.14);
          border-color: rgba(0,255,153,0.28);
        }

        .eventFlyerWrap {
          position: relative;
          width: 100%;
          height: 430px;
          background: #090909;
          overflow: hidden;
        }

        .eventFlyer {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .flyerArrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(0,0,0,0.62);
          color: white;
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
          z-index: 4;
          transition: all 0.25s ease;
        }

        .flyerArrow:hover {
          background: #f7c600;
          color: #000;
          box-shadow: 0 0 16px rgba(247,198,0,0.65);
        }

        .flyerArrowLeft {
          left: 12px;
        }

        .flyerArrowRight {
          right: 12px;
        }

        .flyerCounter {
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 6px 11px;
          border-radius: 999px;
          background: rgba(0,0,0,0.68);
          color: #00ff99;
          font-size: 13px;
          font-weight: bold;
          z-index: 4;
        }

        .eventContent {
          padding: 22px 24px 28px;
        }

        .eventDate {
          display: inline-block;
          margin-bottom: 10px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(0,255,153,0.12);
          color: #00ff99;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .eventContent h3 {
          margin: 0;
          color: #f7c600;
          font-size: 26px;
        }

        .eventLocation {
          margin-top: 9px;
          color: #00ff99;
          font-size: 15px;
          font-weight: bold;
        }

        .eventContent p {
          margin-top: 14px;
          color: #bbb;
          font-size: 15px;
          line-height: 1.6;
        }

        .eventBtn {
          display: inline-block;
          margin-top: 15px;
          padding: 11px 20px;
          border-radius: 24px;
          background: #f7c600;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.25s ease;
        }

        .eventBtn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 16px rgba(247,198,0,0.6);
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
          box-sizing: border-box;
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
          0% { transform: scale(0.82); opacity: 0.25; }
          40% { transform: scale(1.12); opacity: 0.85; }
          70% { transform: scale(0.95); opacity: 0.45; }
          100% { transform: scale(0.82); opacity: 0.25; }
        }

        @keyframes liveBlink {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.25); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes liveCardGlow {
          0% { box-shadow: 0 0 20px rgba(0,255,153,0.14), inset 0 0 18px rgba(247,198,0,0.05); }
          50% { box-shadow: 0 0 32px rgba(0,255,153,0.26), inset 0 0 22px rgba(247,198,0,0.08); }
          100% { box-shadow: 0 0 20px rgba(0,255,153,0.14), inset 0 0 18px rgba(247,198,0,0.05); }
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

          .liveStatusContent {
            flex-direction: column;
            text-align: center;
          }

          .liveStatusContent h2 {
            font-size: 26px;
          }

          .liveStatusContent h3 {
            font-size: 18px;
          }

          .emailBtn {
            margin-left: 0;
          }

          .glowOrb {
            opacity: 0.16;
          }

          .speakerPulse {
            opacity: 0.7;
          }

          .djImageWrap,
          .djPlaceholder {
            height: 300px;
          }

          .eventFlyerWrap {
            height: 380px;
          }

          .eventContent h3 {
            font-size: 23px;
          }

          .flyerArrow {
            width: 36px;
            height: 36px;
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
