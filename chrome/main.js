const img1 = document.createElement("img"); // create new constant img1 of type image using the .createElement method
img1.setAttribute("src", "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"); // add the link to what the image will be using .setAttribute method
const textDiv = document.createElement("div"); // create constant div of type div
const text = document.createTextNode("\"When an action grows unprofitable, gather information; when information grows unprofitable, sleep.\" - Ursula K. Le Guin"); // create constant text with our added quote as the value using the .createTextNode method
textDiv.appendChild(text); // append text as a child to div using the .appendChild method
textDiv.classList.add("beautText"); // add the class that we have stored in our index.css file using the .classList method
textDiv.classList.add("center");
img1.classList.add("center");
img1.classList.add("round");
const ytd = $("ytd-app") // create a constant called ytd and set it equal to the tag name ytd-app.  Here we are using jquery
const contents = $("#content"); 
const ytdParent = ytd.parent();
ytd.remove();
contents.remove();
ytdParent.prepend(img1);
ytdParent.prepend(textDiv);
$("div").animate({ 
            paddingLeft: "75px", 
        }, 5000, "linear");



