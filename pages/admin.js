import { useEffect, useState } from "react";

export default function AdminPage() {
  const [secret, setSecret] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [shoutouts, setShoutouts] = useState([]);

  const loadShoutouts = async () => {
    const res = await fetch("/api/admin/shoutouts", {
      headers: {
        authorization: secret,
      },
    });

    const data = await res.json();

    if (Array.isArray(data)) {
      setShoutouts(data);
    }
  };

  const approveShoutout = async (id) => {
    await fetch("/api/admin/approve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: secret,
      },
      body: JSON.stringify({ id }),
    });

    loadShoutouts();
  };

  const deleteShoutout = async (id) => {
    await fetch("/api/admin/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: secret,
      },
      body: JSON.stringify({ id }),
    });

    loadShoutouts();
  };

  if (!loggedIn) {
    return (
      <div style={styles.page}>
        <div style={styles.loginBox}>
          <h1>OneForce Admin</h1>

          <input
            type="password"
            placeholder="Enter admin password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            style={styles.input}
          />

          <button
            style={styles.button}
            onClick={() => {
              setLoggedIn(true);
              loadShoutouts();
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Pending Shoutouts</h1>

      {shoutouts.length === 0 ? (
        <p>No pending shoutouts.</p>
      ) : (
        shoutouts.map((shout) => (
          <div key={shout.id} style={styles.card}>
            <h3>{shout.name}</h3>

            <p>
              <strong>Country:</strong> {shout.country}
            </p>

            <p>{shout.message}</p>

            <div style={styles.buttonRow}>
              <button
                style={styles.approveBtn}
                onClick={() => approveShoutout(shout.id)}
              >
                APPROVE
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteShoutout(shout.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "white",
    padding: "40px",
    fontFamily: "Arial",
  },

  loginBox: {
    maxWidth: "400px",
    margin: "120px auto",
    background: "#111",
    padding: "30px",
    borderRadius: "16px",
    border: "1px solid #00ff99",
  },

  title: {
    color: "#ffd000",
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginTop: "20px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#181818",
    color: "white",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    marginTop: "20px",
    background: "#00ff99",
    color: "black",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  card: {
    background: "#111",
    padding: "20px",
    borderRadius: "16px",
    marginBottom: "20px",
    borderLeft: "4px solid #00ff99",
  },

  buttonRow: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  },

  approveBtn: {
    background: "#00ff99",
    color: "black",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  deleteBtn: {
    background: "#ff3333",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
