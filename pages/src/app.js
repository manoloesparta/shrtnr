import "./styles.css"

const API = "https://shrt.manoloesparta.workers.dev"

const urlElement = document.getElementById("url")
const shortenButton = document.getElementById("shorten")
const luckyButton = document.getElementById("lucky")

shortenButton.addEventListener("click", async () => {
  const value = urlElement.value;

  const options = {
    method: "POST",
    body: JSON.stringify({ url: value }),
    headers: {"Content-Type": "application/json"},
  }

  try {
    const res = await fetch(`${API}/short`, options)
    const data = await res.json()

    const htmlContent = `Here is your shortened link (probably not): <br><strong id="link">${API}/${data.hash}</strong>` 

    Swal.fire({ 
      icon: "success", 
      title: "Finally!", 
      html: htmlContent
    })
  } catch {
    const htmlContent = "Did you check that site is up? <br>Don\'t forget to add the <strong>\"http(s):\"</strong> part."

    Swal.fire({ 
      icon: "error", 
      title: "Oops...", 
      html: htmlContent
    })
  }
})

luckyButton.addEventListener("click", async () => {
  const options = {
    method: "GET"
  }

  try {
    const res = await fetch(`${API}/lucky`, options)
    const { url } = await res.json()
    window.location.replace(url)
  } catch {
    Swal.fire({ 
      icon: "error", 
      title: "Oops...", 
      text: "Something went wrong, please try again"
    })
  }
})
