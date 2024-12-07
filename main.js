/* <a href="#home">home</a>
<a href="#explore">explore</a>
<a href="#about-us">about us</a> */

let nav = document.querySelector(`nav`);

if (screen.width <= 450) {
     nav.innerHTML = `<i class="fa-solid fa-bars" onclick="getNav()" ></i>`;
}

window.addEventListener(`load`, () => {
     document.querySelector(`.container`).style.display = `block`;
     document.querySelector(`footer`).style.display = `flex`;
});

function getNav() {
     nav.innerHTML = `
          <a href="#home" onclick="getBack()" >home</a>
          <a href="#explore" onclick="getBack()" >explore</a>
          <a href="#about-us" onclick="getBack()" >about us</a>
     `;
     nav.classList.toggle(`nav-anime`);
}

function getBack() {
     nav.innerHTML = `<i class="fa-solid fa-bars" onclick="getNav()" ></i>`;
     nav.classList.toggle(`nav-anime`);
}