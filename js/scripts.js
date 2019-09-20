const sleep = (ms) => new Promise(re => setTimeout(re,ms))
const randomX = (iw) => Math.floor(Math.random() * (window.innerWidth - iw))
const randomY = () => Math.floor(Math.random() * window.innerHeight)
const sleepRandomSeconds = async (s) => { await sleep(Math.floor(s * 1000))}
window.onload = async function () {
    const divs = document.querySelectorAll("div")
    for(var div of divs){
      div.style.left = randomX(500) + "px"
      div.style.top = randomY() + "px"
    }
}