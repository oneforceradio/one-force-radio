const [ageVerified, setAgeVerified] = useState(false);

useEffect(() => {
  const verified = localStorage.getItem("oneforce_age_verified");
  if (verified === "true") {
    setAgeVerified(true);
  }
}, []);

const confirmAge = () => {
  localStorage.setItem("oneforce_age_verified", "true");
  setAgeVerified(true);
};

if (!ageVerified) {
  return (
    <div className="ageGate">
      <div className="ageGateBox">
        <div className="ageBadge">18+</div>

        <h1>ONEFORCE RADIO</h1>

        <p>
          This website may contain explicit music, language and adult-themed
          audio content.
        </p>

        <p className="ageSubText">
          You must be 18 years or older to enter.
        </p>

        <button className="enterBtn" onClick={confirmAge}>
          ENTER SITE
        </button>

        <div className="ageFooter">
          Listener discretion is advised.
        </div>
      </div>

      <style jsx>{`
        .ageGate {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          background: radial-gradient(circle at top, #111 0%, #000 70%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          padding: 20px;
          box-sizing: border-box;
        }

        .ageGateBox {
          width: 100%;
          max-width: 520px;
          background: rgba(12,12,12,0.96);
          border: 1px solid rgba(247,198,0,0.25);
          border-radius: 28px;
          padding: 50px 35px;
          text-align: center;
          box-shadow:
            0 0 40px rgba(0,0,0,0.7),
            0 0 25px rgba(247,198,0,0.12),
            0 0 30px rgba(0,255,153,0.08);
          animation: ageGlow 3s ease-in-out infinite;
        }

        .ageBadge {
          width: 90px;
          height: 90px;
          margin: 0 auto 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f7c600, #ffdf4d);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-size: 32px;
          font-weight: 900;
          box-shadow: 0 0 25px rgba(247,198,0,0.45);
        }

        .ageGateBox h1 {
          margin: 0 0 18px;
          color: #f7c600;
          font-size: 42px;
          line-height: 1.1;
        }

        .ageGateBox p {
          color: #ddd;
          font-size: 18px;
          line-height: 1.7;
          margin: 0 auto 14px;
          max-width: 420px;
        }

        .ageSubText {
          color: #00ff99 !important;
          font-weight: bold;
          margin-bottom: 28px !important;
        }

        .enterBtn {
          border: none;
          border-radius: 999px;
          padding: 16px 38px;
          background: linear-gradient(135deg, #00ff99, #f7c600);
          color: #000;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 0 20px rgba(0,255,153,0.22);
        }

        .enterBtn:hover {
          transform: scale(1.06);
          box-shadow: 0 0 28px rgba(247,198,0,0.45);
        }

        .ageFooter {
          margin-top: 28px;
          color: #777;
          font-size: 13px;
        }

        @keyframes ageGlow {
          0% {
            box-shadow:
              0 0 40px rgba(0,0,0,0.7),
              0 0 20px rgba(247,198,0,0.10),
              0 0 20px rgba(0,255,153,0.06);
          }

          50% {
            box-shadow:
              0 0 40px rgba(0,0,0,0.7),
              0 0 35px rgba(247,198,0,0.20),
              0 0 35px rgba(0,255,153,0.12);
          }

          100% {
            box-shadow:
              0 0 40px rgba(0,0,0,0.7),
              0 0 20px rgba(247,198,0,0.10),
              0 0 20px rgba(0,255,153,0.06);
          }
        }

        @media (max-width: 700px) {
          .ageGateBox {
            padding: 40px 24px;
          }

          .ageGateBox h1 {
            font-size: 32px;
          }

          .ageGateBox p {
            font-size: 16px;
          }

          .ageBadge {
            width: 76px;
            height: 76px;
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
