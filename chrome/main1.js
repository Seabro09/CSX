// create a div element with an id, a class, and a bunch of images.  Run the infinate loop code on it that's below 

const img1 = document.createElement("img1"); // create new constant img1 of type image using the .createElement method
img1.setAttribute("src", "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
const img2 = document.createElement("img2"); // create new constant img1 of type image using the .createElement method
img2.setAttribute("src", "https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb")
const img3 = document.createElement("img3"); // create new constant img1 of type image using the .createElement method
img3.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQybdQBQBwLwwEbUUgpqybg1_HwQ3CPxZhQQ&usqp=CAU");

const div1 = document.createElement("div");

div1.appendChild(img1);
div1.appendChild(img2);
div1.appendChild(img3);

div1.classList.add("rotating-t")
$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 5000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.rotating-item').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});

 // add the link to what the image will be using .setAttribute method
const textDiv = document.createElement("div"); // create constant div of type div
const text = document.createTextNode("\"When an action grows unprofitable, gather information; when information grows unprofitable, sleep.\" - Ursula K. Le Guin"); // create constant text with our added quote as the value using the .createTextNode method
textDiv.appendChild(text); // append text as a child to div using the .appendChild method
textDiv.classList.add("beautText"); // add the class that we have stored in our index.css file using the .classList method
textDiv.classList.add("center");
div1.classList.add("center");
div1.classList.add("round");
const ytd = $("ytd-app") // create a constant called ytd and set it equal to the tag name ytd-app.  Here we are using jquery
const contents = $("#content"); 
const ytdParent = ytd.parent();
ytd.remove();
contents.remove();
ytdParent.prepend(div1);
ytdParent.prepend(textDiv);
$("div").animate({ 
       
    paddingLeft: "150px", 
        }, 5000, "linear");


