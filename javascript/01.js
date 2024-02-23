document.addEventListener("DOMContentLoaded", function () {
  // Menü öğeleri
  const menuItems = [
    { id: 1, title: "KoreaEat1", category: "korea", price: getRandomPrice(), img: "kimchi.jpg", desc: "Spicy fermented cabbage." },
    { id: 2, title: "KoreaEat2", category: "korea", price: getRandomPrice(), img: "bibimbap.jpg", desc: "Traditional Korean mixed rice with vegetables." },
    { id: 3, title: "KoreaEat3", category: "korea", price: getRandomPrice(), img: "bulgogi.jpg", desc: "Marinated and grilled beef slices." },
    { id: 4, title: "Sushi", category: "japan", price: getRandomPrice(), img: "sushi.jpg", desc: "Delicious sushi with fresh ingredients." },
    { id: 5, title: "Sushi2", category: "japan", price: getRandomPrice(), img: "ramen.jpg", desc: "Japanese noodle soup dish." },
    { id: 6, title: "Sushi3", category: "japan", price: getRandomPrice(), img: "tempura.jpg", desc: "Lightly battered and fried seafood or vegetables." },
    { id: 7, title: "ChinaEat1", category: "china", price: getRandomPrice(), img: "mapo-tofu.jpg", desc: "Spicy and flavorful Chinese tofu dish." },
    { id: 8, title: "ChinaEat2", category: "china", price: getRandomPrice(), img: "peking-duck.jpg", desc: "Crispy duck with hoisin sauce and pancakes." },
    { id: 9, title: "ChinaEat3", category: "china", price: getRandomPrice(), img: "dim-sum.jpg", desc: "Assortment of Chinese bite-sized dishes." },
  ];

  const menuContainer = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  const sideDishesContainer = document.querySelector(".side-dishes-container");


  window.onload = function () {
    displayMenuItems(menuItems);
    displayButtons(menuItems);
    displaySideDishes(menuItems);
  };

  // Menü öğeleri fonksiyonu
  function displayMenuItems(menu) {
    const menuHTML = menu.map(item => {
      return `
        <div class="col-md-6 col-lg-6 col-xl-6 menu-items">
          <img src="${item.img}" alt="${item.title}" class="photo">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4>${item.price}</h4>
            </div>
            <p class="menu-text">${item.desc}</p>
          </div>
        </div>
      `;
    }).join("");

    menuContainer.innerHTML = menuHTML;
  }

  // Kategori butonları fonksiyonu
  function displayButtons(menu) {
    const categories = ['All', 'Korea', 'Japan', 'China'];
    const buttonsHTML = categories.map(category => {
      return `<button class="btn btn-item" data-id="${category.toLowerCase()}">${category}</button>`;
    }).join("");

    btnContainer.innerHTML = buttonsHTML;

    // Butonlara click event
    const btns = document.querySelectorAll('.btn-item');
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const category = this.dataset.id;
        const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);
        displayMenuItems(filteredMenu);
      });

      // Butonların üzerine gelindiğinde ve çıkıldığında rengi değiştir
      btn.addEventListener('mouseenter', function () {
        this.style.color = "#333"; 
        this.style.backgroundColor = "#ddd";
      });

      btn.addEventListener('mouseleave', function () {
        this.style.color = ""; 
        this.style.backgroundColor = ""; 
      });
    });
  }

  // Yan yemekler
  function displaySideDishes(menu) {
    const sideDishesHTML = `
      <div class="col-md-6 col-lg-6 col-xl-6 side-dish">
        <img src="${menu[0].img}" alt="${menu[0].title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${menu[0].title}</h4>
            <h4>${menu[0].price}</h4>
          </div>
          <p class="menu-text">${menu[0].desc}</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-6 side-dish">
        <img src="${menu[menu.length - 1].img}" alt="${menu[menu.length - 1].title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${menu[menu.length - 1].title}</h4>
            <h4>${menu[menu.length - 1].price}</h4>
          </div>
          <p class="menu-text">${menu[menu.length - 1].desc}</p>
        </div>
      </div>
    `;

    sideDishesContainer.innerHTML = sideDishesHTML;
  }

  // Rastgele fiyat fonksiyonu
  function getRandomPrice() {
    return "$" + (Math.floor(Math.random() * 10) + 10).toFixed(2);
  }
});