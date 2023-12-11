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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      },
      body: JSON.stringify({ name, desc, price, image }),
    });
    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
    console.log("Item added to cart:", response.json());
    // Update UI or perform other actions after adding to cart
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
}

async function renderMenus() {
  const menusection = document.getElementById("menu-cont"); // Update to menu-container
  try {
    const response = await fetch(`${API_BASE_URL}/menus`); // Assuming /api/food is the correct endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const menus = await response.json();

    // Generating HTML content using map
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
              <button id = "psn" class="psn">Tambahkan</button>
              
          </div>
      `
      )
      .join("");

    menusection.innerHTML = htmlContent; // Set the generated HTML content to menu-container
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to initiate fetching data after the DOM is loaded
renderMenus();
