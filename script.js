const styling = `<style type="text/css">@import url("//fonts.googleapis.com/css2?family=YouTube+Sans&display=swap");yt-error{font-family:YouTube Sans,sans-serif;color:red}yt-error-logo{font-weight:bold}</style>`
const sections = ["featured", "videos", "playlists", "community", "discussion", "store", "channels", "about"]

window.onload = function() {
    // Some Functions
    function error(content) {
        return `<yt-error><yt-error-logo><bracket>[</bracket>YTlink<bracket>]</bracket></yt-error-logo> ${content}</yt-error>`
    }
    
    // Some Variables
    ytElement = "yt"

    // Inject YTlink CSS
    document.head.insertAdjacentHTML("beforeend", styling)

    // Main CSS
    for (let i = 0; i < document.querySelectorAll(ytElement).length; i++) {
        var yt = document.querySelectorAll(ytElement)[i]

        if (yt.getAttribute("user") !== null) {
            if (yt.getAttribute("section") === null) {
                if (yt.innerHTML === "") {
                    yt.innerHTML = `<a href="//youtube.com/user/${yt.getAttribute("user")}" target="_blank">${yt.getAttribute("user")}</a>`
                } else {
                    yt.innerHTML = `<a href="//youtube.com/user/${yt.getAttribute("user")}" target="_blank">${yt.innerHTML}</a>`
                }
            } else {
                if (yt.innerHTML === "") {
                    yt.innerHTML = `<a href="//youtube.com/user/${yt.getAttribute("user")}/${yt.getAttribute("section")}" target="_blank">${yt.getAttribute("user")}</a>`
                } else {
                    yt.innerHTML = `<a href="//youtube.com/user/${yt.getAttribute("user")}/${yt.getAttribute("section")}" target="_blank">${yt.innerHTML}</a>`
                }
            }
        } else if (yt.getAttribute("channel") !== null) {
            if (yt.getAttribute("section") === null) {
                if (yt.innerHTML === "") {
                    yt.innerHTML = `<a href="//youtube.com/channel/${yt.getAttribute("channel")}" target="_blank">${yt.getAttribute("channel")}</a>`
                } else {
                    yt.innerHTML = `<a href="//youtube.com/channel/${yt.getAttribute("channel")}" target="_blank">${yt.innerHTML}</a>`
                }
            } else {
                if (yt.innerHTML === "") {
                    yt.innerHTML = `<a href="//youtube.com/channel/${yt.getAttribute("channel")}/${yt.getAttribute("section")}" target="_blank">${yt.getAttribute("channel")}</a>`
                } else {
                    yt.innerHTML = `<a href="//youtube.com/channel/${yt.getAttribute("channel")}/${yt.getAttribute("section")}" target="_blank">${yt.innerHTML}</a>`
                }
            }
        } else if (yt.getAttribute("c") !== null) {
            if (yt.getAttribute("section") === null) {
                if (yt.innerHTML === "") {
                    yt.innerHTML = `<a href="//youtube.com/c/${yt.getAttribute("c")}" target="_blank">${yt.getAttribute("c")}</a>`
                } else {
                    yt.innerHTML = `<a href="//youtube.com/c/${yt.getAttribute("c")}" target="_blank">${yt.innerHTML}</a>`
                }
            } else {
                if (yt.innerHTML === "") {
                    yt.innerHTML = `<a href="//youtube.com/c/${yt.getAttribute("c")}/${yt.getAttribute("section")}" target="_blank">${yt.getAttribute("c")}</a>`
                } else {
                    yt.innerHTML = `<a href="//youtube.com/c/${yt.getAttribute("c")}/${yt.getAttribute("section")}" target="_blank">${yt.innerHTML}</a>`
                }
            }
        } else if (yt.getAttribute("video") !== null) {
            if (yt.getAttribute("section") === null) {
                if (yt.innerHTML === "") {
                    yt.innerHTML = `<a href="//youtube.com/watch?v=${yt.getAttribute("video")}" target="_blank">${yt.getAttribute("video")}</a>`
                } else {
                    yt.innerHTML = `<a href="//youtube.com/watch?v=${yt.getAttribute("video")}" target="_blank">${yt.innerHTML}</a>`
                }
            } else {
                yt.innerHTML = error("Videos do not have sections!")
            }
        }
    }
}
