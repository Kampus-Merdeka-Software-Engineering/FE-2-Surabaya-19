document.querySelector(".menu-icon").addEventListener("click", function () {
  this.classList.toggle("change");
  document.querySelector(".top-navbar ul").classList.toggle("show");
});

const API_BASE_URL = "https:/be-2-surabaya-19-production.up.railway.app";

async function fetchMenus() {
  const menuContainer = document.getElementById("menu-container");
  try {
    const response = await fetch(`${API_BASE_URL}/menus`);
    const menus = await response.json();
    console.log(menus); // Fix the typo here

    const menuListElement = menus.map((menu) => {
      return `
        <div class="menu-section">
          <img src="${menu.image}" alt="" class="menu-img" />
          <div class="text-section">
            <h4>${menu.name}</h4>
            <p>${menu.desc}</p>
            <h4>${menu.price}</h4>
          </div>
          <button id="psn">Tambahkan</button>
        </div>
      `;
    });

    menuContainer.innerHTML = menuListElement;
  } catch (err) {
    console.error(err);
  }
}
fetchMenus();
