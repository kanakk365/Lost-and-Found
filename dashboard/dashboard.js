let reportBtn = document.querySelector(".report");
let formBox = document.querySelector(".lostForm");
let closeBtn = document.querySelector(".closeForm");
let lostItemBox=document.querySelector('.lost-item');
let foundItemBox=document.querySelector(".found-item");
let nav=document.querySelector(".nav");
let main=document.querySelector(".main");

reportBtn.addEventListener("click", (event) => {
  event.preventDefault();
  formBox.style.display = "flex";
  lostItemBox.style.opacity='.3';
  lostItemBox.style.filter = "brightness(30%)";
  lostItemBox.style.backgroundColor='black';
  foundItemBox.style.opacity='.3';
  foundItemBox.style.filter = "brightness(30%)";
  foundItemBox.style.backgroundColor='black';
  nav.style.opacity='.3';
  nav.style.filter = "brightness(30%)";
  nav.style.backgroundColor='black';

 
 
  setTimeout(() => {
    formBox.style.transform = "translateY(0%)";
  }, 0);
});

closeBtn.addEventListener("click", (event) => {
  formBox.style.transform = "translateY(-100%)";
  lostItemBox.style.opacity='1';
  lostItemBox.style.filter = "brightness(100%)";
  lostItemBox.style.backgroundColor='#eeeeee';
  foundItemBox.style.opacity='1';
  foundItemBox.style.filter = "brightness(100%)";
  foundItemBox.style.backgroundColor='#eeeeee';
  nav.style.opacity='1';
  nav.style.filter = "brightness(100%)";
  nav.style.backgroundColor='rgb(169, 29, 58)';
  setTimeout(() => {
    formBox.style.display = "none";
  }, 500);
});
