const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

send.addEventListener("click", () => {
    const message = document.querySelector("#message").value;

    socket.emit("message",message);
});

socket.on("message", ({user, message}) => {

    const msg = document.createRange().createContextualFragment(`
    
        <div class="messages">

            <div class="image-container">
                <img src="/images/michi.jpeg">
            </div>

            <div class="message-body">

                <div class="user-info">
                    <span class="username">${user}</span>
                    <span class="time">Hace un segundo</span>
                </div>

                <p>${message}</p>
            </div>

        </div>
    
    `);

    allMessages.append(msg);
});