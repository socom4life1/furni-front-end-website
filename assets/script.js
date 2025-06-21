 //  image testimonial change
 const items = document.querySelectorAll(".testi");
 let currentIndex = 0;
 function showItem(index) {
   items[currentIndex].classList.remove("active");
   currentIndex = (index + items.length) % items.length;
   items[currentIndex].classList.add("active");
 }
 function nextItem() {
   showItem(currentIndex + 1);
 }
 function prevItem() {
   showItem(currentIndex - 1);
 }
 document.getElementById("next-arrow").addEventListener("click", nextItem);
 document.getElementById("prev-arrow").addEventListener("click", prevItem);
 document.addEventListener("keydown", (e) => {
   if (e.key === "ArrowRight") nextItem();
   if (e.key === "ArrowLeft") prevItem();
 });
 setInterval(nextItem, 10000); // Change text every 10 second

//  nav bar-hide-menu-responsiveness
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
