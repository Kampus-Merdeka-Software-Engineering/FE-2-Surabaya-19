document.querySelector(".menu-icon").addEventListener("click", function () {
  this.classList.toggle("change");
  document.querySelector(".top-navbar ul").classList.toggle("show");
});

<<<<<<< HEAD
const API_BASE_URL = "https://be-2-surabaya-19-production.up.railway.app";
=======
const API_BASE_URL = 'https://be-2-surabaya-19-production.up.railway.app';
>>>>>>> 47319392d29864555b898fcc4cc4c3885ac54e36

async function fetchMenus() {
  const menuContainer = document.getElementById("menu-cont");
  try {
    const response = await fetch(`${API_BASE_URL}/menus`);
    const menus = await response.json();
    console.log(menus); // Fix the typo here

    const menuContainerElement = menus.map((menu) => {
      return `
        <div class="menu-section">
          <img src="${menu.image}" alt="" class="menu-img" id="menu-image"/>
          <div class="text-section">
            <h4 id="menu-name">${menu.name}</h4>
            <p id="menu-desc">${menu.desc}</p>
            <h4 id="menu-price">${menu.price}</h4>
          </div>
          <button id="psn">Tambahkan</button>
        </div>
      `;
    });

    menuContainer.innerHTML = menuContainerElement;
  } catch (err) {
    console.error(err);
  }
}
fetchMenus();

async function addMenu() {
  const name = document.getElementById("menu-name").value;
  const desc = document.getElementById("menu-desc").value;
  const price = document.getElementById("menu-price").value;
  const image = document.getElementById("menu-image").value;

  try {
    await fetch(`${API_BASE_URL}/menus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, desc, price, image }),
    });
  } catch (err) {
    console.error(err);
  } finally {
    fetchBooks();
  }
}
