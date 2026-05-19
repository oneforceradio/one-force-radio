import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);

  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(false);

  useEffect(() => {
    const ageConfirmed = localStorage.getItem("oneforce_age_verified");

    if (!ageConfirmed) {
      setShowAgeGate(true);
    }
  }, []);

  const enterRadio = () => {
    localStorage.setItem("oneforce_age_verified", "true");
    setShowAgeGate(false);

    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const stationInfo = {
    name: "ONEFORCE RADIO",
    tagline: "24/7 Nonstop Music",
    whatsapp: "https://wa.me/393516232824",
    email: "info@oneforceradio.com",
  };

  const socialLinks = {
    instagram: "https://www.instagram.com/oneforceradio",
    facebook: "https://www.facebook.com/oneforceradio",
    tiktok: "https://www.tiktok.com/@oneforce_radio",
    whatsapp: "https://wa.me/393516232824",
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
      bio: "International DJ and founder of OneForce Sound, known for explosive dancehall sessions blazing stages across Europe and Africa.",
      instagram: "https://www.instagram.com/djlashes/",
    },
    {
      name: "The 8th Wonder",
      brand: "Gorilla Mvmts Sound System",
      image: "/djleon.jpg",
      location: "Based In The United Kingdom • British & Jamaican Heritage",
      genres: "Multi Genre",
      bio: "UK-based selector and founder of Gorilla Mvmts Sound System, bringing versatile multi-genre energy and authentic sound system culture to every session.",
      instagram: "https://www.instagram.com/gorillamovements/",
    },
    {
      name: "DJ Jnr Force",
      brand: "OneForce Sound",
      image: "/JnrForce.jpg",
      location: "Based In The Gambia • West Africa",
      genres: "Gam-Vibes • Afrobeats • Amapiano",
      bio: "Born and raised in Tanji, The Gambia, DJ Jnr Force is known nationwide for rocking crowds with nonstop hits and keeping the clubs pumping with energy.",
      instagram: "https://www.instagram.com/juniorforce/",
    },
    {
      name: "DJ Priest",
      brand: "Shashamane Intl Sound",
      image: "/DjPriest.jpg",
      location: "Based in Rome, Italy",
      genres: "Dancehall • Reggae • Bashment",
      bio: "Selector of international sound Shashamane — The African Zulu Warrior from Kenya, Africa.",
      instagram: "https://www.instagram.com/djpriest_shashamane/",
    },
    {
      name: "Di J Gas",
      brand: "Afrovibes Freiburg",
      image: "/djGas.jpg",
      location: "Gambian Based In Germany",
      genres: "Afrobeats • Amapiano",
      bio: "Founder of the monthly event Afrovibes Freiburg, bringing smooth Afro-inspired vibes and club energy from Germany to OneForce Radio.",
      instagram: "https://www.instagram.com/di_j_gas/",
    },
    {
      name: "COMING SOON",
      brand: "New DJ Slot",
      image: "",
      location: "Worldwide",
      genres: "Future Resident DJ",
      bio: "More DJs, selectors and radio personalities will be added soon.",
      instagram: "#",
      placeholder: true,
    },
  ];

  const events = [
    {
      title: "Upper Tuesday",
      date: "19 May 2026",
      dateTime: "2026-05-19T19:00:00",
      location: "Rome, Italy",
      info: "Upper Fridays street dancehall vibes live in Rome featuring DJ Priest, Brooks and Miss B-Ranks.",
      flyers: ["/events/Rome-19-may.jpg"],
      link: "https://wa.me/393516232824",
    },
    {
      title: "Tobaski Special",
      date: "30 May 2026",
      dateTime: "2026-05-30T22:00:00",
      location: "Vienna, Austria",
      info: "OneForce Sound live in Vienna with DJ Lashes.",
      flyers: ["/events/vienna-30-may.jpeg"],
      link: "https://wa.me/393516232824",
    },
    {
      title: "More Fire Resurrection",
      date: "13 June 2026",
      dateTime: "2026-06-13T22:00:00",
      location: "Hannover, Germany",
      info: "Dancehall, reggae and sound system energy live in Hannover.",
      flyers: [
        "/events/hannover-13-june-1.jpeg",
        "/events/hannover-13-june-2.jpeg",
        "/events/hannover-13-june-3.jpeg",
        "/events/hannover-13-june-4.jpeg",
      ],
      link: "https://wa.me/393516232824",
    },
    {
      title: "Luv In The House",
      date: "4 July 2026",
      dateTime: "2026-07-04T22:00:00",
      location: "Bristol, United Kingdom",
      info: "A live event experience with DJ Lashes and special guests.",
      flyers: ["/events/bristol-04-july.jpg", "/events/bristol-04b-july.jpg"],
      link: "https://wa.me/393516232824",
    },
    {
      title: "Feels Like Home",
      date: "1 August 2026",
      dateTime: "2026-08-01T22:00:00",
      location: "Hannover, Germany",
      info: "In and outdoor festival with reggae, dancehall, soca, afrobeat and amapiano vibes.",
      flyers: ["/events/hannover-01-august.jpg"],
      link: "https://wa.me/393516232824",
    },
  ];

  return (
    <div className="pageWrap">

      {showAgeGate && (
        <div className="ageGate">
          <div className="ageGateBox">

            <div className="ageGateLive">
              <span></span>
              LIVE WORLDWIDE 24/7
            </div>

            <h1>ONEFORCE RADIO</h1>

            <p className="ageGateText">
              This station may contain explicit language,
              adult themes and uncensored music.
            </p>

            <p className="ageGateText">
              You must be 18 years or older to enter.
            </p>

            <button className="ageGateBtn" onClick={enterRadio}>
              ENTER RADIO
            </button>

            <div className="ageGateSmall">
              By entering you confirm you are at least 18 years old.
            </div>

          </div>
        </div>
      )}

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

      <div className="footer">
        © 2026 OneForce Radio — Live Worldwide 24/7
        <br />
        Licensed by SIAE for online radio broadcasting and streaming —
        <br />
        Codice Licenza SIAE n. 202600000253
      </div>

      <style>{`
        .pageWrap {
          min-height: 100vh;
          background: #050505;
          color: white;
          font-family: Arial, sans-serif;
        }

        .ageGate {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.94);
          backdrop-filter: blur(10px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .ageGateBox {
          width: 100%;
          max-width: 520px;
          background: rgba(15,15,15,0.96);
          border: 1px solid rgba(0,255,153,0.25);
          border-radius: 24px;
          padding: 45px 35px;
          text-align: center;
          box-shadow:
            0 0 30px rgba(0,255,153,0.15),
            0 0 60px rgba(247,198,0,0.08);
        }

        .ageGateLive {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #00ff99;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.5px;
          margin-bottom: 18px;
        }

        .ageGateLive span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: red;
          box-shadow: 0 0 10px red;
        }

        .ageGateBox h1 {
          margin: 0;
          color: #f7c600;
          font-size: 44px;
          line-height: 1.1;
        }

        .ageGateText {
          margin-top: 22px;
          color: #ddd;
          font-size: 18px;
          line-height: 1.7;
        }

        .ageGateBtn {
          margin-top: 30px;
          padding: 16px 34px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(135deg, #00ff99, #f7c600);
          color: #000;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .ageGateSmall {
          margin-top: 20px;
          color: #888;
          font-size: 13px;
          line-height: 1.6;
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          color: #777;
          font-size: 14px;
          line-height: 1.8;
        }

        @media (max-width: 700px) {
          .ageGateBox {
            padding: 35px 24px;
          }

          .ageGateBox h1 {
            font-size: 34px;
          }

          .ageGateText {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
