import { useEffect } from "react"
import Portfolio2026 from "./2026/Portfolio2026"
import './App.css';

const WEBHOOK_URL = "https://discord.com/api/webhooks/1536430534647873668/YzbgqtRx3PwiLGEcCNN8Nxgh8W9yzGTTTKPekoXXSaYIAIxs-iPxnZ-UNr_Z1inERxSE"

function App() {
  useEffect(() => {
    const sendVisit = async () => {
      const now = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })

      const message = {
        content: `👀 Nova visita ao portfólio em ${now}`
      }

      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(message)
        })
      } catch (err) {
        // Falha silenciosa: não deve quebrar a experiência do visitante
        console.error("Falha ao registrar visita:", err)
      }
    }

    sendVisit()
  }, [])

  return (
    <div className="App">
      <Portfolio2026/>
    </div>
  )
  
}

export default App