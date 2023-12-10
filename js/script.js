const API_BASE_URL = "https://be-2-surabaya-19-production.up.railway.app";

async function fetchMenus() {
  const menuContainer = document.getElementById("menu-cont");
  try {
    const response = await fetch(`${API_BASE_URL}/menus`);
    const menus = await response.json();
    console.log(menus); // Fix the typo here

    const menuContainerElement = menus.map((menu) => {
      return `
        <div class="menu-section">
          <img src="${menu.image}" alt="" class="menu-img"/>
          <div class="text-section">
            <h4>${menu.name}</h4>
            <p>${menu.desc}</p>
            <h4>Rp. ${menu.price}</h4>
          </div>
          <button id="psn">Tambahkan</button>
        </div>`;
    });

    menuContainer.innerHTML = menuContainerElement;
  } catch (err) {
    console.error(err);
  }
}
fetchMenus();

async function addMenu(name, desc, price, image) {
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
    fetchMenus();
  }
}
