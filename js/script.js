const API_BASE_URL = "https://be-2-surabaya-19-production.up.railway.app";

// Function to add item to cart
async function addMenus() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;
  const image = document.getElementById("image").value;

  try {
    const response = await fetch(`${API_BASE_URL}/menus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, desc, price, image }),
    });

    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }

    const result = await response.json(); // Parse response JSON
    console.log("Item added to cart:", result); // Access response data

    // Update UI or perform other actions after adding to cart
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
}

// Function to delete item
async function deleteMenu(menuId) {
  try {
    const response = await fetch(`${API_BASE_URL}/menus/${menuId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete item");
    }

    const result = await response.json(); // Parse response JSON
    console.log("Item deleted:", result); // Access response data

    // Update UI or perform other actions after deletion
  } catch (error) {
    console.error("Error deleting item:", error);
  }
}

async function renderMenus() {
  const menuSection = document.getElementById("menu-cont");

  try {
    const response = await fetch(`${API_BASE_URL}/menus`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const menus = await response.json();

    const htmlContent = menus
      .map(
        (menu) => `
          <div class="menu-section">
              <img src="${menu.image}" alt="" class="menu-img">
              <div class="text-section">
                  <h4>${menu.name}</h4>
                  <p>${menu.desc}</p>
                  <h4>Rp.${menu.price}</h4>
              </div>
              <button onclick="deleteMenu(${menu.id})" type="button">delete</button>
          </div>
      `
      )
      .join("");

    menuSection.innerHTML = htmlContent;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to initiate fetching data after the DOM is loaded
renderMenus();
