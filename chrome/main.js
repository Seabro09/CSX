const img1 = document.createElement("img");
img1.setAttribute("src", "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
const newPara = document.createElement("p");
const text = document.createTextNode("\"When an action grows unprofitable, gather information; when information grows unprofitable, sleep.\" - Ursula K. Le Guin");

newPara.appendChild(text);
const ytd = $("ytd-app")
const contents = $("#content");
const ytdParent = ytd.parent();
ytd.remove();
contents.remove();
ytdParent.prepend(newPara);
ytdParent.prepend(img1);

