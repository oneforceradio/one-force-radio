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
          <button onClick={() => { scrollToSection("home"); setMobileMenuOpen(false); }}>HOME</button>
          <button onClick={() => { scrollToSection("djs"); setMobileMenuOpen(false); }}>DJS</button>
          <button onClick={() => { scrollToSection("events"); setMobileMenuOpen(false); }}>EVENTS</button>
          <button onClick={() => { scrollToSection("schedule"); setMobileMenuOpen(false); }}>SCHEDULE</button>
          <button onClick={() => { scrollToSection("request"); setMobileMenuOpen(false); }}>REQUEST</button>
          <button onClick={() => { scrollToSection("contact"); setMobileMenuOpen(false); }}>CONTACT</button>
          <button className="listenBtn" onClick={playRadio}>LISTEN LIVE</button>
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
          <div className="tickerLabel"><span></span>LIVE SHOUTS</div>
          <div className="tickerTrackWrap">
            <div className="tickerTrack">
              {[...shoutouts, ...shoutouts].map((shout, index) => (
                <div className="tickerItem" key={index}>{shout}</div>
              ))}
            </div>
          </div>
          <button className="tickerRequestBtn" onClick={() => scrollToSection("request")}>SEND SHOUTOUT</button>
        </div>

        <div className="liveStatusCard">
          <div className="liveBadge"><span></span>{liveShow.status}</div>
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
              <img src={nextEvent.flyers[0]} alt={`${nextEvent.title} flyer`} className="countdownFlyer" onClick={() => setActiveFlyer(nextEvent.flyers[0])} />
            )}
            <div className="countdownInfoWrap">
              <div className="countdownLabel">NEXT EVENT COUNTDOWN</div>
              <h3>{nextEvent ? nextEvent.title : "More Events Coming Soon"}</h3>
              <div className="countdownLocation">{nextEvent ? `${nextEvent.location} • ${nextEvent.date}` : "Stay locked to OneForce Radio"}</div>
              <div className="countdownGrid">
                <div className="countdownBox"><span>{countdown.days}</span>DAYS</div>
                <div className="countdownBox"><span>{countdown.hours}</span>HOURS</div>
                <div className="countdownBox"><span>{countdown.minutes}</span>MINUTES</div>
                <div className="countdownBox"><span>{countdown.seconds}</span>SECONDS</div>
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
              <div className={`eventCard ${!hasMultipleFlyers ? "singleFlyerCard" : ""}`} key={event.title} onMouseEnter={() => setHoveredEvent(index)} onMouseLeave={() => setHoveredEvent(null)}>
                <div className="eventFlyerWrap">
                  <img src={event.flyers[activeSlide]} alt={`${event.title} flyer`} className="eventFlyer" onClick={() => setActiveFlyer(event.flyers[activeSlide])} />
                  {hasMultipleFlyers && (
                    <>
                      <button className="flyerArrow flyerArrowLeft" onClick={() => changeEventSlide(index, "prev")} aria-label="Previous flyer">‹</button>
                      <button className="flyerArrow flyerArrowRight" onClick={() => changeEventSlide(index, "next")} aria-label="Next flyer">›</button>
                      <div className="flyerCounter">{activeSlide + 1} / {event.flyers.length}</div>
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
                <div className="djImageWrap"><img src={dj.image} alt={dj.name} className="djImage" /></div>
              )}
              <div className="djContent">
                <h3>{dj.name}</h3>
                <div className="djSubName">{dj.brand}</div>
                <div className="djLocation">{dj.location}</div>
                <div className="djGenre">{dj.genres}</div>
                <p className="djBio">{dj.bio}</p>
                {!dj.placeholder && <a href={dj.instagram} target="_blank" rel="noopener noreferrer" className="djSocialBtn">INSTAGRAM</a>}
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
        <p>Music promotion, interviews, radio advertising and opportunities to join the movement.</p>
        <div className="eventsGrid">
          {workWithUsCards.map((card) => (
            <div className="eventCard" key={card.label}>
              <div className="eventContent">
                <div className="eventDate">{card.label}</div>
                <h3>{card.title}</h3>
                <div className="eventLocation">{card.subtitle}</div>
                <p>{card.description}</p>
                <a className="djSocialBtn" href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">{card.button}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="sectionBox">
        <h2>CONTACT ONEFORCE RADIO</h2>
        <p>WhatsApp: +220 7408888</p>
        <p>Email: info@oneforceradio.com</p>
        <a className="contactBtn" href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">CONTACT VIA WHATSAPP</a>
        <a className="contactBtn emailBtn" href="mailto:info@oneforceradio.com" target="_blank" rel="noopener noreferrer">SEND EMAIL</a>
      </section>

      <div className="miniPlayer">
        <div className="miniPlayerTop">
          <div className="miniLiveBadge"><span></span>LIVE</div>
          <button className="miniPlayerBtn" onClick={toggleRadio}>{isPlaying ? "❚❚" : "▶"}</button>
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

      <style>{`/* Existing full CSS from latest pasted version remains the active base. */`}</style>
    </div>
  );
}
