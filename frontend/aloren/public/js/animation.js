function createCursorAnimation() {
    const cursor = document.getElementsByClassName("writing-animation-cursor")[0]
    let animated
    let interval

    function start() {
        if (animated) return
        animated = true
        interval = setInterval(animate, 600)
    }

    function stop() {
        if (!animated) return
        animated = true
        clearInterval(interval)
    }

    function animate() {
        cursor.className = "writing-animation-cursor fade-shown"
        setTimeout(function () {
            cursor.className = "writing-animation-cursor fade-shown"
        }, 300)
    }

    return {
        start,
        stop
    }
}

function createWritingAnimation(msg) {
    const suffix = document.getElementsByClassName("writing-animation-suffix")[0]
    const cursorAnimation = createCursorAnimation()
    let interval
    let order = 0
    let position = 0

    function start() {
        cursorAnimation.stop()
        interval = setInterval(erase, 60)
    }

    function stop() {
        clearInterval(interval)
    }

    function notify() {
        position++
        if (position === msg[order].length) {
            stop()
            cursorAnimation.start()
            order++
            if (order === msg.length) {
                order = 0
            }
            setTimeout(start, 5000)
        }
    }

    function notifyWriter() {
        if (position === 0) {
            stop()
            interval = setInterval(write, 100)
        } else {
            position--;
        }
    }

    function erase() {
        suffix.innerHTML = suffix.innerText.substring(0, position)
        notifyWriter()
    }

    function write() {
        suffix.innerHTML += msg[order].trim()[position]
        notify()
    }

    return {
        stop,
        start
    }
}
createWritingAnimation(["Verifique a sua conta!!", "Matenha-se atualizado e Seguro", "aLoren!!", "O lugar perfeito para o seu dia cansativo"]).start()
