console.log("JavaScript is running!");
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});


// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Get a reference to the button element
const scrollToTopButton = document.getElementById("scrollToTopBtn");

// Add a click event listener to the button
scrollToTopButton.addEventListener("click", function() {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});