import { useEffect } from "react"

const WEBHOOK_URL = "https://discord.com/api/webhooks/1536430534647873668/YzbgqtRx3PwiLGEcCNN8Nxgh8W9yzGTTTKPekoXXSaYIAIxs-iPxnZ-UNr_Z1inERxSE"

function App() {
  useEffect(() => {
    const sendVisit = async () => {
      const message = {
        content: [
          "👀 Nova visita ao portfólio!",
          "",
          `🌐 Página: ${window.location.href}`,
          `🌍 Idioma: ${navigator.language}`,
          `💻 Plataforma: ${navigator.platform}`,
          `🕐 Horário: ${new Date().toLocaleString("pt-BR")}`
        ].join("\n")
      }

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
      })
    }

    sendVisit()
  }, [])

  return <h1>Olá mundo</h1>
}

export default App