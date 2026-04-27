import { useState } from "react";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    // Dégradé de fond plus moderne
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    width: "350px",
    // Ombre douce pour décoller la carte du fond
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    margin: 0,
    textAlign: "center",
    color: "#2d3436",
    lineHeight: "1.2",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: 600,
    border: "none",
    borderRadius: "12px",
    // Bouton avec dégradé
    background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
    color: "white",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 15px rgba(37, 117, 252, 0.3)",
  },
  messageBox: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
    border: "1px dashed #dfe6e9",
    textAlign: "center",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: "14px",
    fontWeight: 500,
    margin: 0,
  }
};

function App() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const callAPI = async () => {
    try {
      // Note: Change en https:// si tu as configuré ton certificat SSL
      const res = await fetch("https://testapi-m6va.onrender.com/api");
      const data = await res.json();
      setMessage(data.message);
      setIsError(false);
    } catch (err) {
      console.error(err);
      setMessage("Impossible de joindre l'API");
      setIsError(true);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div>
          <h1 style={styles.title}>Bienvenue sur le test de l'API REST</h1>
        </div>

        <button 
          style={styles.button} 
          onClick={callAPI}
          onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          Lancer l'appel API
        </button>

        <div style={styles.messageBox}>
          <p style={{
            ...styles.message, 
            color: isError ? "#e74c3c" : "#2ecc71" 
          }}>
            {message || "En attente de réponse..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;