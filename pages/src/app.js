import './styles.css'

const API = "https://shrt.manoloesparta.workers.dev"

const urlElement = document.getElementById("url")
const shortenButton = document.getElementById("shorten")
const luckyButton = document.getElementById("lucky")

shortenButton.addEventListener('click', () => {
  const value = urlElement.value;

  const options = {
    method: "POST",
    body: JSON.stringify({ url: value }),
    headers: {"Content-Type": "application/json"},
  }

  fetch(`${API}/short`, options)
    .then(res => res.json())
    .catch(() => Swal.fire({ icon: 'error', title: 'Oops...', text: 'Did you check that site is up?'}))
    .then(data => {
      if(data !== undefined) {
        const htmlContent = `Here is your shortened link (probably not): <br><strong>${API}/${data.hash}</strong>`
        Swal.fire({ icon: 'success', title: 'Finally!', html: htmlContent })
      }
    }
  )
})

luckyButton.addEventListener('click', () => {
  const options = {
    method: "GET"
  }
  
  fetch(`${API}/lucky`, options)
    .then(res => res.json())
    .catch(() => Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong, please try again'}))
    .then(({ url }) => window.location.replace(url))
})