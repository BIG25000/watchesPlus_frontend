import io from "socket.io-client";

const socket = io.connect("https://watchesplus-backend-1.onrender.com", { autoConnect: false });

export default socket;
