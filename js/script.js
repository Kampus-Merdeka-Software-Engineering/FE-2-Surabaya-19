const API_BASE_URL = "https:/be-2-surabaya-19-production.up.railway.app";

async function fetchMenus() {
  const menuContainer = document.getElementById("menus-container");
  try {
    const response = await fetch(`${API_BASE_URL}/menus`);
    const menus = await response.json();
    console.log(menu);

    const menuListElement = menus.map((menu) => {
      return `
      <div class="menu-section">
      <img src="./asset/1.png" alt="" class="menu-img" />
      <div class="text-section">
        <h4>Nasi Goreng Babi</h4>
        <p>Nasi goreng dengan mentega</p>
        <h4>Rp.30000</h4>
      </div>
      <button id="psn">Tambahkan</button>
    </div>
      `;
    });

    bookContainer.innerHTML = menuListElement;
  } catch (err) {
    console.error(err);
  }
}

fetchBooks();

async function addBook() {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;

  try {
    await fetch(`${API_BASE_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    });
  } catch (err) {
    console.error(err);
  } finally {
    fetchBooks();
  }
}
