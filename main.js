/* <a href="#home">home</a>
<a href="#explore">explore</a>
<a href="#about-us">about us</a> */

let nav = document.querySelector(`nav`);
window.addEventListener(`load`, () => {
     if (screen.width <= 450) {
          console.log(nav.innerHTML);
          nav.innerHTML = `<i class="fa-solid fa-bars" onclick="getNav()" ></i>`;
     }
});

function getNav() {
     nav.innerHTML = `
          <a href="#home" onclick="getBack()" >home</a>
          <a href="#explore" onclick="getBack()" >explore</a>
          <a href="#about-us" onclick="getBack()" >about us</a>
     `;
     nav.classList.toggle(`nav-anime`);
}
console.log(screen.height);
function getBack() {
     nav.innerHTML = `<i class="fa-solid fa-bars" onclick="getNav()" ></i>`;
     nav.classList.toggle(`nav-anime`);
}