const API_BASE_URL = "https://be-2-surabaya-19-production.up.railway.app";

async function addMenu(name, desc, price, image) {
  try {
    const response = await fetch(`${API_BASE_URL}/menus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, desc, price, image }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add menu: ${response.statusText}`);
    }
  } catch (err) {
    console.error(err);
  } finally {
    fetchMenus();
  }
}

async function fetchMenus() {
  const menuContainer = document.getElementById("menu-cont");
  try {
    const response = await fetch(`${API_BASE_URL}/menus`);
    if (!response.ok) {
      throw new Error(`Failed to fetch menus: ${response.statusText}`);
    }

    const menus = await response.json();

    const menuContainerElement = menus.map((menu) => {
      return `
        <div class="menu-section">
          <img src="${menu.image}" alt="" class="menu-img"/>
          <div class="text-section">
            <h4>${menu.name}</h4>
            <p>${menu.desc}</p>
            <h4>Rp. ${menu.price}</h4>
          </div>
          <button class="psn-btn">Tambahkan</button>
        </div>`;
    });

    menuContainer.innerHTML = menuContainerElement.join("");
  } catch (err) {
    console.error(err);
  }
}

// Example usage:
// addMenu("New Item", "Description", 10.99, "image-url");
