const API_BASE_URL = "https:/be-2-surabaya-19-production.up.railway.app";

async function fetchMenus() {
  const menuContainer = document.getElementById("menu-container");
  try {
    const response = await fetch(`${API_BASE_URL}/menus`);
    const menus = await response.json();
    console.log(menu);

    const menuListElement = menus.map((item) => {
      return `
      <div class="menu-section">
      <img src="${item.image}" alt="" class="menu-img" />
      <div class="text-section">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <h4>${item.price}</h4>
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
