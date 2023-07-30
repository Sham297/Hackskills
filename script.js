// script.js

// Check if the JavaScript file is linked
console.log("Congratulations! Your script.js file is linked successfully!");

let prevScrollPos = window.scrollY ;

window.onscroll = function () {
  const currentScrollPos = window.scrollY ;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.getElementById("navbar").style.top = "0px";
  } else {
    // Scrolling down
    document.getElementById("navbar").style.top = "-100px"; // Change this value to hide the navbar completely
  }

  prevScrollPos = currentScrollPos;
};

/* 

In the code, the `prevScrollPos` and `currentScrollPos` are two variables that represent the scroll positions of the web page. When you scroll on a web page, you either move up (scrolling towards the top) or move down (scrolling towards the bottom).

Think of the scroll position as a number that indicates how far down you have scrolled on the web page. For example, when you are at the very top of the page, the scroll position is 0. As you scroll down, the scroll position increases, and when you reach the bottom of the page, the scroll position is at its maximum value.

Now, the code uses these two variables (`prevScrollPos` and `currentScrollPos`) to compare the scroll positions. Here's how it works:

1. When you start scrolling, the `prevScrollPos` is set to the current scroll position. This means the code remembers where you were before you started scrolling.

2. As you continue scrolling, the `currentScrollPos` gets updated to the new scroll position.

3. Now comes the comparison part: The code checks if the `currentScrollPos` is greater than the `prevScrollPos`. If it is, it means you have moved further down the page (scrolling down). If the `currentScrollPos` is smaller than the `prevScrollPos`, it means you have moved up the page (scrolling up).

To summarize:
- If `currentScrollPos` is greater than `prevScrollPos`, you are scrolling down.
- If `currentScrollPos` is smaller than `prevScrollPos`, you are scrolling up.

By comparing the two scroll positions, the code figures out which direction you are scrolling on the web page and adjusts the visibility of the navbar accordingly.
*/


