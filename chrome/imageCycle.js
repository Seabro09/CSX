const images = document.querySelectorAll("img"); // all image DOM elements are now assigned to the "images" constant.

let i = 0; // variable i = to 0
images[i].style.display = 'block'; // display the first image by setting the style.display to block

setInterval(function() {   

if(i == 0) {
    images[i].style.display = 'block';
  } else if (i == images.length) {
    images[i - 1].style.display = 'none';
    images[0].style.display = 'block';
    i = 0;
    //return; 
  } else {
    images[i - 1].style.display = 'none';
    images[i].style.display = 'block';
  }
  
 i++;
}, 2000)

const img1 = document.createElement("img1"); // create new constant img1 of type image using the .createElement method
img1.setAttribute("src", "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
const img2 = document.createElement("img2"); // create new constant img1 of type image using the .createElement method
img2.setAttribute("src", "https://images.unsplash.com/photo-1520371764250-8213f40bc3ed?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb")
const img3 = document.createElement("img3"); // create new constant img1 of type image using the .createElement method
img3.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQybdQBQBwLwwEbUUgpqybg1_HwQ3CPxZhQQ&usqp=CAU");