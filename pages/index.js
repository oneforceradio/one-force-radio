import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);

  const [name, setName] = useState("");
  const [song, setSong] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stationInfo = {
    name: "ONEFORCE RADIO",
    tagline: "24/7 Nonstop Music",
    whatsapp: "https://wa.me/2207408888",
    email: "info@oneforceradio.com",
  };

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

  const workWithUsCards = [
    {
      label: "MUSIC SUBMISSION",
      title: "Feature Your Music",
      subtitle: "Artists • Producers • Labels",
      description:
        "Send your latest music, exclusives, mixtapes and projects for possible rotation and feature on OneForce Radio.",
      button: "SUBMIT MUSIC",
    },
    {
      label: "INTERVIEWS",
      title: "Book An Interview",
      subtitle: "Artists • Brands • Businesses",
      description:
        "Want to promote your brand, business, event or music? Request a live interview or featured segment.",
      button: "REQUEST INTERVIEW",
    },
    {
      label: "RADIO ADS",
      title: "Promote Your Event",
      subtitle: "Flyers • Voice Ads • Promotion",
      description:
        "Promote your upcoming event, business or campaign with flyer placement, voice ads and radio exposure.",
      button: "PROMOTE NOW",
    },
    {
      label: "JOIN THE TEAM",
      title: "Become Part Of OneForce",
      subtitle: "DJs • Hosts • Selectors",
      description:
        "Interested in joining OneForce Radio? Apply to become a resident DJ, host or radio personality.",
      button: "APPLY NOW",
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);

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
      bio: "International DJ and founder of OneForce Sound, known for high-energy dancehall sets blazing the stage across Europe and Africa.",
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
      title: "Tobaski Special",
      date: "30 May 2026",
      dateTime: "2026-05-30T22:00:00",
      location: "Vienna, Austria",
      info: "OneForce Sound live in Vienna with DJ Lashes.",
      flyers: ["/events/vienna-30-may.jpeg"],
      link: "https://wa.me/2207408888",
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
      link: "https://wa.me/2207408888",
    },
    {
      title: "Luv In The House",
      date: "4 July 2026",
      dateTime: "2026-07-04T22:00:00",
      location: "Bristol, United Kingdom",
      info: "A live event experience with DJ Lashes and special guests.",
      flyers: ["/events/bristol-04-july.jpg"],
      link: "https://wa.me/2207408888",
    },
    {
      title: "Feels Like Home",
      date: "1 August 2026",
      dateTime: "2026-08-01T22:00:00",
      location: "Hannover, Germany",
      info: "In and outdoor festival with reggae, dancehall, soca, afrobeat and amapiano vibes.",
      flyers: ["/events/hannover-01-august.jpg"],
      link: "https://wa.me/2207408888",
    },
  ];

  const [eventSlide, setEventSlide] = useState({});
  const [activeFlyer, setActiveFlyer] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const nextEvent = events
    .filter((event) => new Date(event.dateTime).getTime() > Date.now())
    .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))[0];

  const nextEventDate = nextEvent ? new Date(nextEvent.dateTime) : null;
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


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

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      if (!nextEventDate) return;
      const distance = nextEventDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(countdownTimer);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  useEffect(() => {
    const slider = setInterval(() => {
      setEventSlide((currentSlides) => {
        const updatedSlides = { ...currentSlides };

        events.forEach((event, index) => {
          if (event.flyers.length > 1 && hoveredEvent !== index && !activeFlyer) {
            const currentSlide = currentSlides[index] || 0;
            updatedSlides[index] = (currentSlide + 1) % event.flyers.length;
          }
        });

        return updatedSlides;
      });
    }, 4000);

    return () => clearInterval(slider);
  }, [hoveredEvent, activeFlyer]);

  return (
    <div className="pageWrap">
      <div className="glowOrb orb1" />
      <div className="glowOrb orb2" />
      <div className="glowOrb orb3" />
      <div className="radioWave wave1" />
      <div className="radioWave wave2" />
      <div className="radioWave wave3" />
      <div className="particleField">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className={`particle particle${index + 1}`} />
        ))}
      </div>

      <div className="navbar">
        <div className="onAir navbarOnAir">
          <div className="liveDot" />
          <div className="onAirText">ON AIR NOW</div>

          <div className="equalizer">
            {[1, 2, 3, 4].map((bar) => (
              <div key={bar} style={{ animationDelay: `${bar * 0.15}s` }} />
            ))}
          </div>
        </div>

        <button
          className="mobileMenuBtn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`navLinks ${mobileMenuOpen ? "navLinksOpen" : ""}`}>
          <button onClick={() => {
            scrollToSection("home");
            setMobileMenuOpen(false);
          }}>
            HOME
          </button>
          <button onClick={() => {
            scrollToSection("djs");
            setMobileMenuOpen(false);
          }}>
            DJS
          </button>
          <button onClick={() => {
            scrollToSection("events");
            setMobileMenuOpen(false);
          }}>
            EVENTS
          </button>
          <button onClick={() => {
            scrollToSection("schedule");
            setMobileMenuOpen(false);
          }}>
            SCHEDULE
          </button>
          <button onClick={() => {
            scrollToSection("request");
            setMobileMenuOpen(false);
          }}>
            REQUEST
          </button>
          <button onClick={() => {
            scrollToSection("contact");
            setMobileMenuOpen(false);
          }}>
            CONTACT
          </button>
          <button className="listenBtn" onClick={playRadio}>
            LISTEN LIVE
          </button>
        </div>
      </div>

      <section id="home" style={{ width: "100%", textAlign: "center", zIndex: 2 }}>

        <div className="bannerWrap">
          <img src="/banner1.png" alt="OneForce Radio" className="banner" />

          <div className="speakerPulse pulseLogo" />
          <div onClick={playRadio} className="playClickArea" />

          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="igLink" />
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="fbLink" />
          <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="ttLink" />
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="waLink" />
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="ytLink" />
          <a href={socialLinks.twitch} target="_blank" rel="noopener noreferrer" className="twLink" />
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

        <div className="shoutTicker">
          <div className="tickerLabel">
            <span></span>
            LIVE SHOUTS
          </div>

          <div className="tickerTrackWrap">
            <div className="tickerTrack">
              {[...shoutouts, ...shoutouts].map((shout, index) => (
                <div className="tickerItem" key={index}>
                  {shout}
                </div>
              ))}
            </div>
          </div>

          <button className="tickerRequestBtn" onClick={() => scrollToSection("request")}>
            SEND SHOUTOUT
          </button>
        </div>

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

      <section id="events" className="sectionBox">
        <div className="countdownCard">
          <div className="countdownInner">
            {nextEvent && (
              <img
                src={nextEvent.flyers[0]}
                alt={`${nextEvent.title} flyer`}
                className="countdownFlyer"
                onClick={() => setActiveFlyer(nextEvent.flyers[0])}
              />
            )}

            <div className="countdownInfoWrap">
              <div className="countdownLabel">NEXT EVENT COUNTDOWN</div>

              <h3>{nextEvent ? nextEvent.title : "More Events Coming Soon"}</h3>

              <div className="countdownLocation">
                {nextEvent ? `${nextEvent.location} • ${nextEvent.date}` : "Stay locked to OneForce Radio"}
              </div>

              <div className="countdownGrid">
                <div className="countdownBox">
                  <span>{countdown.days}</span>
                  DAYS
                </div>

                <div className="countdownBox">
                  <span>{countdown.hours}</span>
                  HOURS
                </div>

                <div className="countdownBox">
                  <span>{countdown.minutes}</span>
                  MINUTES
                </div>

                <div className="countdownBox">
                  <span>{countdown.seconds}</span>
                  SECONDS
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>UPCOMING EVENTS</h2>
        <p>Catch OneForce Sound and OneForce Radio energy live at upcoming events.</p>

        <div className="eventsGrid">

          {events.map((event, index) => {
            const activeSlide = eventSlide[index] || 0;
            const hasMultipleFlyers = event.flyers.length > 1;

            return (
              <div
                className={`eventCard ${!hasMultipleFlyers ? "singleFlyerCard" : ""}`}
                key={event.title}
                onMouseEnter={() => setHoveredEvent(index)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className="eventFlyerWrap">
                  <img
                    src={event.flyers[activeSlide]}
                    alt={`${event.title} flyer`}
                    className="eventFlyer"
                    onClick={() => setActiveFlyer(event.flyers[activeSlide])}
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
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="djs" className="sectionBox">
        <h2>ONEFORCE RADIO DJS</h2>
        <p>Meet the selectors and DJs bringing vibes from around the world.</p>

        <div className="djGrid">
          {djs.map((dj) => (
            <div className={`djCard ${dj.placeholder ? "placeholderCard" : ""}`} key={dj.name}>
              {dj.placeholder ? (
                <div className="djPlaceholder">COMING SOON</div>
              ) : (
                <div className="djImageWrap">
                  <img src={dj.image} alt={dj.name} className="djImage" />
                </div>
              )}

              <div className="djContent">
                <h3>{dj.name}</h3>
                <div className="djSubName">{dj.brand}</div>
                <div className="djLocation">{dj.location}</div>
                <div className="djGenre">{dj.genres}</div>
                <p className="djBio">{dj.bio}</p>

                {!dj.placeholder && (
                  <a
                    href={dj.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="djSocialBtn"
                  >
                    INSTAGRAM
                  </a>
                )}
              </div>
            </div>
          ))}
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

      <section id="workwithus" className="sectionBox">
        <h2>WORK WITH ONEFORCE RADIO</h2>
        <p>
          Music promotion, interviews, radio advertising and opportunities to join the movement.
        </p>

        <div className="eventsGrid">
          <div className="eventCard">
            <div className="eventContent">
              <div className="eventDate">MUSIC SUBMISSION</div>
              <h3>Feature Your Music</h3>
              <div className="eventLocation">Artists • Producers • Labels</div>
              <p>
                Send your latest music, exclusives, mixtapes and projects for possible rotation and feature on OneForce Radio.
              </p>

              <a
                className="djSocialBtn"
                href={`${stationInfo.whatsapp}?text=${encodeURIComponent("Hi OneForce Radio, I would like to submit music for possible feature or rotation.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                SUBMIT MUSIC
              </a>
            </div>
          </div>

          <div className="eventCard">
            <div className="eventContent">
              <div className="eventDate">INTERVIEWS</div>
              <h3>Book An Interview</h3>
              <div className="eventLocation">Artists • Brands • Businesses</div>
              <p>
                Want to promote your brand, business, event or music? Request a live interview or featured segment.
              </p>

              <a
                className="djSocialBtn"
                href={`${stationInfo.whatsapp}?text=${encodeURIComponent("Hi OneForce Radio, I would like to request an interview or featured segment.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                REQUEST INTERVIEW
              </a>
            </div>
          </div>

          <div className="eventCard">
            <div className="eventContent">
              <div className="eventDate">RADIO ADS</div>
              <h3>Promote Your Event</h3>
              <div className="eventLocation">Flyers • Voice Ads • Promotion</div>
              <p>
                Promote your upcoming event, business or campaign with flyer placement, voice ads and radio exposure.
              </p>

              <a
                className="djSocialBtn"
                href={`${stationInfo.whatsapp}?text=${encodeURIComponent("Hi OneForce Radio, I would like information about promoting my event, flyer, business or radio advert.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                PROMOTE NOW
              </a>
            </div>
          </div>

          <div className="eventCard">
            <div className="eventContent">
              <div className="eventDate">JOIN THE TEAM</div>
              <h3>Become Part Of OneForce</h3>
              <div className="eventLocation">DJs • Hosts • Selectors</div>
              <p>
                Interested in joining OneForce Radio? Apply to become a resident DJ, host or radio personality.
              </p>

              <a
                className="djSocialBtn"
                href={`${stationInfo.whatsapp}?text=${encodeURIComponent("Hi OneForce Radio, I am interested in joining the team as a DJ, host or selector.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="sectionBox">
        <h2>CONTACT ONEFORCE RADIO</h2>
        <p>WhatsApp: +220 7408888</p>
        <p>Email: info@oneforceradio.com</p>

        <a className="contactBtn" href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          CONTACT VIA WHATSAPP
        </a>

        <a className="contactBtn emailBtn" href="mailto:info@oneforceradio.com" target="_blank" rel="noopener noreferrer">
          SEND EMAIL
        </a>
      </section>

      <div className="miniPlayer">
        <div className="miniPlayerTop">
          <div className="miniLiveBadge">
            <span></span>
            LIVE
          </div>

          <button className="miniPlayerBtn" onClick={toggleRadio}>
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>

        <div className="miniPlayerInfo">
          <div className="miniDj">{liveShow.dj}</div>
          <div className="miniShow">{liveShow.show}</div>
        </div>
      </div>

      {activeFlyer && (
        <div className="flyerModal" onClick={() => setActiveFlyer(null)}>
          <img src={activeFlyer} alt="Expanded flyer" className="flyerModalImage" />
        </div>
      )}

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

        .radioWave {
          position: fixed;
          border-radius: 50%;
          border: 1px solid rgba(0,255,153,0.12);
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          animation: radioWavePulse 7s ease-out infinite;
        }

        .wave1 {
          width: 260px;
          height: 260px;
          top: 22%;
          left: 8%;
        }

        .wave2 {
          width: 420px;
          height: 420px;
          top: 14%;
          right: 5%;
          animation-delay: 1.7s;
        }

        .wave3 {
          width: 520px;
          height: 520px;
          bottom: 8%;
          left: 35%;
          animation-delay: 3.2s;
        }

        .particleField {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(247,198,0,0.55);
          box-shadow: 0 0 10px rgba(247,198,0,0.6);
          animation: floatParticle 12s linear infinite;
        }

        .particle:nth-child(even) {
          background: rgba(0,255,153,0.5);
          box-shadow: 0 0 10px rgba(0,255,153,0.55);
        }

        .particle1 { left: 8%; top: 92%; animation-delay: 0s; }
        .particle2 { left: 15%; top: 88%; animation-delay: 2s; }
        .particle3 { left: 22%; top: 95%; animation-delay: 5s; }
        .particle4 { left: 31%; top: 89%; animation-delay: 1s; }
        .particle5 { left: 39%; top: 94%; animation-delay: 7s; }
        .particle6 { left: 47%; top: 91%; animation-delay: 3s; }
        .particle7 { left: 55%; top: 96%; animation-delay: 6s; }
        .particle8 { left: 63%; top: 90%; animation-delay: 4s; }
        .particle9 { left: 71%; top: 94%; animation-delay: 8s; }
        .particle10 { left: 79%; top: 89%; animation-delay: 2.5s; }
        .particle11 { left: 86%; top: 95%; animation-delay: 6.5s; }
        .particle12 { left: 92%; top: 90%; animation-delay: 9s; }
        .particle13 { left: 12%; top: 98%; animation-delay: 10s; }
        .particle14 { left: 28%; top: 97%; animation-delay: 11s; }
        .particle15 { left: 44%; top: 99%; animation-delay: 1.5s; }
        .particle16 { left: 60%; top: 98%; animation-delay: 4.5s; }
        .particle17 { left: 76%; top: 97%; animation-delay: 7.5s; }
        .particle18 { left: 90%; top: 99%; animation-delay: 12s; }

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

        .navbarOnAir {
          margin-bottom: 0;
        }

        .mobileMenuBtn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          font-size: 28px;
          cursor: pointer;
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

        .playClickArea { position: absolute; left: 30.5%; top: 64%; width: 39%; height: 10%; cursor: pointer; z-index: 5; }

        .igLink { position: absolute; right: 22.5%; top: 62%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .fbLink { position: absolute; right: 17.5%; top: 62%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .ttLink { position: absolute; right: 11.5%; top: 60%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .waLink { position: absolute; right: 6.5%; top: 60%; width: 4%; height: 7%; cursor: pointer; z-index: 5; }
        .ytLink { position: absolute; right: 16.5%; top: 68%; width: 5%; height: 7%; cursor: pointer; z-index: 5; }
        .twLink { position: absolute; right: 10.5%; top: 68%; width: 5%; height: 7%; cursor: pointer; z-index: 5; }

        .hiddenAudioPlayer {
          display: none;
        }

        .shoutTicker {
          width: 100%;
          max-width: 900px;
          margin: 25px auto 0;
          padding: 12px 16px;
          border-radius: 18px;
          background: rgba(17,17,17,0.92);
          border: 1px solid rgba(247,198,0,0.22);
          box-shadow: 0 0 22px rgba(0,0,0,0.35), 0 0 20px rgba(247,198,0,0.08);
          display: flex;
          align-items: center;
          gap: 16px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .tickerLabel {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f7c600;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .tickerLabel span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: red;
          box-shadow: 0 0 10px red;
          animation: liveBlink 1s infinite;
        }

        .tickerTrackWrap {
          flex: 1;
          overflow: hidden;
          min-width: 0;
        }

        .tickerTrack {
          display: flex;
          width: max-content;
          animation: tickerScroll 30s linear infinite;
        }

        .tickerTrack:hover {
          animation-play-state: paused;
        }

        .tickerItem {
          flex: 0 0 auto;
          padding-right: 42px;
          color: #ddd;
          font-size: 15px;
          font-weight: bold;
          white-space: nowrap;
        }

        .tickerRequestBtn {
          flex: 0 0 auto;
          border: none;
          border-radius: 999px;
          padding: 9px 15px;
          background: #00ff99;
          color: #000;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.8px;
          cursor: pointer;
          box-shadow: 0 0 14px rgba(0,255,153,0.35);
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .tickerRequestBtn:hover {
          transform: scale(1.06);
          box-shadow: 0 0 18px rgba(0,255,153,0.65);
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

        .countdownInner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 34px;
          text-align: left;
        }

        .countdownInfoWrap {
          flex: 1;
          max-width: 680px;
          min-width: 0;
        }

        .countdownCard {
          margin: 0 auto 40px;
          max-width: 850px;
          padding: 28px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(0,255,153,0.08), rgba(247,198,0,0.08));
          border: 1px solid rgba(0,255,153,0.22);
          box-shadow: 0 0 30px rgba(0,255,153,0.08);
          text-align: center;
          animation: liveCardGlow 3s ease-in-out infinite;
        }

        .countdownLabel {
          color: #00ff99;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .countdownCard h3 {
          margin: 0;
          color: #f7c600;
          font-size: 38px;
        }

        .countdownLocation {
          margin-top: 10px;
          color: #ccc;
          font-size: 16px;
        }

        .countdownFlyer {
          flex: 0 0 auto;
          width: 155px;
          height: 195px;
          object-fit: cover;
          object-position: center top;
          border-radius: 16px;
          margin: 0;
          display: block;
          cursor: pointer;
          border: 2px solid rgba(247,198,0,0.45);
          box-shadow: 0 0 20px rgba(247,198,0,0.18);
          transition: all 0.25s ease;
        }

        .countdownFlyer:hover {
          transform: scale(1.05);
          box-shadow: 0 0 26px rgba(0,255,153,0.28);
          border-color: rgba(0,255,153,0.65);
        }

        .countdownGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 24px;
        }

        .countdownBox {
          padding: 18px 12px;
          border-radius: 18px;
          background: rgba(0,0,0,0.32);
          border: 1px solid rgba(247,198,0,0.12);
          color: #ccc;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .countdownBox span {
          display: block;
          color: #00ff99;
          font-size: 34px;
          font-weight: 900;
          margin-bottom: 8px;
        }

        .eventsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          margin-top: 35px;
        }

        .eventCard {
          position: relative;
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
          cursor: pointer;
          transition: transform 0.45s ease;
        }

        .eventCard:hover .eventFlyer {
          transform: scale(1.03);
        }

        .singleFlyerCard .eventFlyer {
          animation: slowFlyerZoom 7s ease-in-out infinite;
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

        .flyerModal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 18px;
          cursor: pointer;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.25s ease;
          box-sizing: border-box;
          overflow: auto;
        }

        .flyerModalImage {
          display: block;
          max-width: min(94vw, 900px);
          max-height: 92vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 18px;
          box-shadow: 0 0 40px rgba(0,0,0,0.7);
          margin: auto;
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

        .miniPlayer {
          position: fixed;
          right: 18px;
          bottom: 18px;
          width: 220px;
          padding: 14px;
          border-radius: 20px;
          background: rgba(12,12,12,0.92);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,255,153,0.22);
          box-shadow: 0 0 25px rgba(0,0,0,0.45), 0 0 20px rgba(0,255,153,0.12);
          z-index: 999;
        }

        .miniPlayerTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .miniLiveBadge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #00ff99;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .miniLiveBadge span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: red;
          box-shadow: 0 0 10px red;
          animation: liveBlink 1s infinite;
        }

        .miniPlayerBtn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #00ff99, #f7c600);
          color: #000;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 0 16px rgba(0,255,153,0.24);
        }

        .miniPlayerBtn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(0,255,153,0.45);
        }

        .miniPlayerInfo {
          text-align: left;
        }

        .miniDj {
          color: #f7c600;
          font-size: 16px;
          font-weight: bold;
        }

        .miniShow {
          margin-top: 3px;
          color: #ccc;
          font-size: 13px;
        }

        .footer {
          margin-top: 25px;
          color: #777;
          font-size: 14px;
          text-align: center;
        }

        @keyframes radioWavePulse {
          0% { transform: scale(0.55); opacity: 0; }
          25% { opacity: 0.35; }
          100% { transform: scale(1.45); opacity: 0; }
        }

        @keyframes floatParticle {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          12% { opacity: 0.8; }
          100% { transform: translateY(-120vh) scale(1.4); opacity: 0; }
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

        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slowFlyerZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.045); }
          100% { transform: scale(1); }
        }

        @keyframes flyerGlow {
          0% { box-shadow: 0 0 18px rgba(0,255,153,0.12); }
          50% { box-shadow: 0 0 28px rgba(247,198,0,0.22); }
          100% { box-shadow: 0 0 18px rgba(0,255,153,0.12); }
        }

        .singleFlyerCard {
          animation: flyerGlow 4s ease-in-out infinite;
        }

        @keyframes bounce {
          0% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
          100% { transform: scaleY(0.4); }
        }

        @media (max-width: 700px) {
          .mobileMenuBtn {
            display: block;
          }

          .navLinks {
            display: none;
            width: 100%;
            flex-direction: column;
            align-items: center;
            margin-top: 14px;
            gap: 10px;
            padding-top: 10px;
          }

          .navLinksOpen {
            display: flex;
          }
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

          .shoutTicker {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }

          .tickerLabel {
            justify-content: center;
          }

          .tickerItem {
            font-size: 14px;
            padding-right: 34px;
          }

          .tickerRequestBtn {
            align-self: center;
          }

          .miniPlayer {
            right: 12px;
            bottom: 12px;
            width: 185px;
            padding: 12px;
          }

          .miniDj {
            font-size: 14px;
          }

          .miniShow {
            font-size: 12px;
          }

          .emailBtn {
            margin-left: 0;
          }

          .glowOrb {
            opacity: 0.16;
          }

          .particle {
            opacity: 0.6;
          }

          .radioWave {
            opacity: 0.08;
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

          .countdownGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .countdownInner {
            flex-direction: column;
            text-align: center;
          }

          .countdownInfoWrap {
            max-width: none;
            width: 100%;
          }

          .countdownCard h3 {
            font-size: 30px;
          }

          .countdownFlyer {
            width: 130px;
            height: 165px;
          }

          .countdownBox span {
            font-size: 28px;
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
