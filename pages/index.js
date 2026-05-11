import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);

  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const socialLinks = {
    instagram: "https://www.instagram.com/oneforceradio",
    facebook: "https://www.facebook.com/oneforceradio",
    tiktok: "https://www.tiktok.com/@oneforce_radio",
    whatsapp: "https://wa.me/2207408888",
    youtube: "https://www.youtube.com/@oneforceradio",
    twitch: "https://www.twitch.tv/oneforceradio",
  };

  const shoutouts = [
    "🔥 Welcome to OneForce Radio Worldwide",
    "🎧 Streaming 24/7 Nonstop Music",
    "📢 Promote your events with OneForce Radio",
    "🎤 Artists can submit music & interviews",
    "🌍 OneForce Radio broadcasting worldwide",
  ];

  const liveShow = {
    dj: "ONEFORCE RADIO LIVE",
    show: "24/7 Nonstop Music",
    genre: "Dancehall • Reggae • Afrobeat • Amapiano",
    image: "/banner1.png",
    status: "AUTO DJ ACTIVE",
  };

  const djs = [
    {
      name: "DJ Lashes",
      brand: "OneForce Sound",
      image: "/djlashes.jpg",
      location: "Based In Europe & The Gambia • UK-born • Jamaican roots",
      genres: "Dancehall • Reggae • Afrobeat",
      bio: "International DJ and founder of OneForce Sound.",
      instagram: "https://www.instagram.com/djlashes/",
    },
    {
      name: "The 8th Wonder",
      brand: "Gorilla Mvmts Sound System",
      image: "/djleon.jpg",
      location: "Based In The United Kingdom",
      genres: "Multi Genre",
      bio: "Founder of Gorilla Mvmts Sound System.",
      instagram: "https://www.instagram.com/gorillamovements/",
    },
    {
      name: "DJ Jnr Force",
      brand: "OneForce Sound",
      image: "/JnrForce.jpg",
      location: "Based In The Gambia",
      genres: "Gam-Vibes • Afrobeats • Amapiano",
      bio: "Known nationwide for rocking crowds.",
      instagram: "https://www.instagram.com/juniorforce/",
    },
    {
      name: "DJ Priest",
      brand: "Shashamane Intl Sound",
      image: "/DjPriest.jpg",
      location: "Based in Rome, Italy",
      genres: "Dancehall • Reggae • Bashment",
      bio: "Selector of international sound Shashamane.",
      instagram: "https://www.instagram.com/djpriest_shashamane/",
    },
  ];

  const events = [
    {
      title: "Tobaski Special",
      date: "30 May 2026",
      location: "Vienna, Austria",
      info: "OneForce Sound live in Vienna.",
      flyer: "/events/vienna-30-may.jpeg",
    },
    {
      title: "More Fire Resurrection",
      date: "13 June 2026",
      location: "Hannover, Germany",
      info: "Dancehall & reggae energy live.",
      flyer: "/events/hannover-13-june-1.jpeg",
    },
    {
      title: "Luv In The House",
      date: "4 July 2026",
      location: "Bristol, UK",
      info: "Live event with DJ Lashes.",
      flyer: "/events/bristol-04-july.jpg",
    },
    {
      title: "Feels Like Home",
      date: "1 August 2026",
      location: "Hannover, Germany",
      info: "Outdoor festival vibes.",
      flyer: "/events/hannover-01-august.jpg",
    },
  ];

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

    const text = `OneForce Radio Request:%0A%0AName: ${name}%0ASong: ${song}%0AMessage: ${message}`;

    window.open(
      `https://wa.me/2207408888?text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="pageWrap">

      <div className="navbar">

        <div className="onAir">
          <div className="liveDot"></div>
          <div className="onAirText">ON AIR NOW</div>
        </div>

        <button
          className="mobileMenuBtn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`navLinks ${mobileMenuOpen ? "navLinksOpen" : ""}`}>
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("events")}>EVENTS</button>
          <button onClick={() => scrollToSection("djs")}>DJS</button>
          <button onClick={() => scrollToSection("request")}>REQUEST</button>
          <button onClick={() => scrollToSection("contact")}>CONTACT</button>
          <button className="listenBtn" onClick={playRadio}>
            LISTEN LIVE
          </button>
        </div>

      </div>

      <section id="home">

        <div className="bannerWrap">
          <img
            src="/banner1.png"
            alt="OneForce Radio"
            className="banner"
          />

          <div onClick={playRadio} className="playClickArea"></div>

          <a href={socialLinks.instagram} className="igLink"></a>
          <a href={socialLinks.facebook} className="fbLink"></a>
          <a href={socialLinks.tiktok} className="ttLink"></a>
          <a href={socialLinks.whatsapp} className="waLink"></a>
          <a href={socialLinks.youtube} className="ytLink"></a>
          <a href={socialLinks.twitch} className="twLink"></a>
        </div>

        <audio
          ref={audioRef}
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="https://sky.doscast.com/proxy/oneforce/stream"
            type="audio/mpeg"
          />
        </audio>

      </section>

      <section className="sectionBox">

        <div className="tickerTrack">
          {[...shoutouts, ...shoutouts].map((item, index) => (
            <div key={index} className="tickerItem">
              {item}
            </div>
          ))}
        </div>

      </section>

      <section id="events" className="sectionBox">

        <h2>UPCOMING EVENTS</h2>

        <div className="eventsGrid">

          {events.map((event) => (
            <div className="eventCard" key={event.title}>

              <div className="eventFlyerWrap">
                <img
                  src={event.flyer}
                  alt={event.title}
                  className="eventFlyer"
                />
              </div>

              <div className="eventContent">
                <div className="eventDate">{event.date}</div>
                <h3>{event.title}</h3>
                <div className="eventLocation">{event.location}</div>
                <p>{event.info}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      <section id="djs" className="sectionBox">

        <h2>ONEFORCE RADIO DJS</h2>

        <div className="djGrid">

          {djs.map((dj) => (
            <div className="djCard" key={dj.name}>

              <div className="djImageWrap">
                <img
                  src={dj.image}
                  alt={dj.name}
                  className="djImage"
                />
              </div>

              <div className="djContent">

                <h3>{dj.name}</h3>

                <div className="djSubName">
                  {dj.brand}
                </div>

                <div className="djLocation">
                  {dj.location}
                </div>

                <div className="djGenre">
                  {dj.genres}
                </div>

                <p className="djBio">
                  {dj.bio}
                </p>

                <a
                  href={dj.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="djSocialBtn"
                >
                  INSTAGRAM
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      <section id="request" className="sectionBox">

        <h2>REQUEST / SHOUTOUT</h2>

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
            SEND REQUEST
          </button>

        </form>

      </section>

      <section id="contact" className="sectionBox">

        <h2>CONTACT</h2>

        <p>WhatsApp: +220 7408888</p>

        <a
          href={socialLinks.whatsapp}
          className="contactBtn"
        >
          CONTACT VIA WHATSAPP
        </a>

      </section>

      <div className="miniPlayer">

        <button className="miniPlayerBtn" onClick={toggleRadio}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <div>
          <div className="miniDj">
            {liveShow.dj}
          </div>

          <div className="miniShow">
            {liveShow.show}
          </div>
        </div>

      </div>

      <style>{`

        body {
          margin: 0;
          padding: 0;
        }

        .pageWrap {
          background: #0b0b0b;
          min-height: 100vh;
          color: white;
          font-family: Arial, sans-serif;
          padding: 20px;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #111;
          padding: 15px 20px;
          border-radius: 14px;
          position: sticky;
          top: 10px;
          z-index: 100;
        }

        .navLinks {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .navLinks button {
          background: transparent;
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .listenBtn {
          color: #00ff99 !important;
        }

        .mobileMenuBtn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 28px;
        }

        .onAir {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .liveDot {
          width: 12px;
          height: 12px;
          background: red;
          border-radius: 50%;
        }

        .bannerWrap {
          position: relative;
          max-width: 1100px;
          margin: 30px auto;
        }

        .banner {
          width: 100%;
          border-radius: 20px;
          display: block;
        }

        .playClickArea {
          position: absolute;
          left: 31%;
          top: 64%;
          width: 38%;
          height: 10%;
          cursor: pointer;
        }

        .igLink {
          position: absolute;
          right: 22%;
          top: 62%;
          width: 4%;
          height: 7%;
        }

        .fbLink {
          position: absolute;
          right: 17%;
          top: 62%;
          width: 4%;
          height: 7%;
        }

        .ttLink {
          position: absolute;
          right: 12%;
          top: 62%;
          width: 4%;
          height: 7%;
        }

        .waLink {
          position: absolute;
          right: 7%;
          top: 62%;
          width: 4%;
          height: 7%;
        }

        .ytLink {
          position: absolute;
          right: 17%;
          top: 70%;
          width: 4%;
          height: 7%;
        }

        .twLink {
          position: absolute;
          right: 12%;
          top: 70%;
          width: 4%;
          height: 7%;
        }

        .sectionBox {
          max-width: 1100px;
          margin: 40px auto;
          background: #111;
          padding: 30px;
          border-radius: 20px;
        }

        .eventsGrid,
        .djGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }

        .eventCard,
        .djCard {
          background: #1a1a1a;
          border-radius: 20px;
          overflow: hidden;
        }

        .eventFlyerWrap {
          height: 420px;
          overflow: hidden;
        }

        .eventFlyer {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .eventContent,
        .djContent {
          padding: 20px;
        }

        .eventDate {
          color: #00ff99;
          font-size: 14px;
          font-weight: bold;
        }

        .eventContent h3,
        .djContent h3 {
          color: #f7c600;
          margin-top: 10px;
        }

        .eventLocation,
        .djLocation {
          color: #00ff99;
          margin-top: 10px;
        }

        .djImageWrap {
          height: 350px;
          overflow: hidden;
        }

        .djImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .djSubName {
          color: #00ff99;
          font-weight: bold;
          margin-top: 5px;
        }

        .djGenre {
          margin-top: 10px;
          color: #ccc;
        }

        .djBio {
          margin-top: 15px;
          color: #aaa;
          line-height: 1.5;
        }

        .djSocialBtn,
        .contactBtn,
        .requestForm button {
          display: inline-block;
          margin-top: 20px;
          background: #f7c600;
          color: black;
          padding: 12px 20px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: bold;
          border: none;
          cursor: pointer;
        }

        .requestForm {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 20px;
        }

        .requestForm input,
        .requestForm textarea {
          padding: 15px;
          border-radius: 12px;
          border: none;
          background: #222;
          color: white;
        }

        .requestForm textarea {
          min-height: 120px;
        }

        .miniPlayer {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #111;
          padding: 15px;
          border-radius: 20px;
          display: flex;
          gap: 15px;
          align-items: center;
          z-index: 999;
        }

        .miniPlayerBtn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: #00ff99;
          color: black;
          font-size: 18px;
          cursor: pointer;
        }

        .miniDj {
          color: #f7c600;
          font-weight: bold;
        }

        .miniShow {
          color: #ccc;
          font-size: 14px;
        }

        .tickerTrack {
          display: flex;
          gap: 40px;
          overflow-x: auto;
          white-space: nowrap;
        }

        .tickerItem {
          color: #f7c600;
          font-weight: bold;
        }

        @media (max-width: 700px) {

          .mobileMenuBtn {
            display: block;
          }

          .navLinks {
            display: none;
            flex-direction: column;
            width: 100%;
            margin-top: 15px;
          }

          .navLinksOpen {
            display: flex;
          }

          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .eventFlyerWrap {
            height: 340px;
          }

          .djImageWrap {
            height: 300px;
          }

          .miniPlayer {
            width: 180px;
          }

        }

      `}</style>

    </div>
  );
}
