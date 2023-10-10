const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const inputElement = document.getElementById('pizzaId');
  const searchButton = document.getElementById('searchBtn');
  const resultContainer = document.getElementById('resultContainer');

  // Event listener para el botón de búsqueda
  searchButton.addEventListener('click', function () {
      const inputValue = inputElement.value;

      // Validar si el input es un número
      if (!isNaN(inputValue) && inputValue !== '') {
          const pizzaId = parseInt(inputValue, 10);
          const foundPizza = findPizzaById(pizzaId);

          if (foundPizza) {
              // Renderizar la card de la pizza
              renderPizzaCard(foundPizza);
              
              // Guardar la pizza en el localStorage
              localStorage.setItem('lastSearchedPizza', JSON.stringify(foundPizza));
          } else {
              // Renderizar mensaje de error
              renderError('No se encontró ninguna pizza con ese ID.');
          }
      } else {
          // Renderizar mensaje de error por input no válido
          renderError('Ingrese un número válido.');
      }
  });

  // Función para buscar la pizza por ID en el array
  function findPizzaById(id) {
      const foundPizza = pizzas.find(pizza => pizza.id === id);
      return foundPizza;
  }

  // Función para renderizar la card de la pizza
  function renderPizzaCard(pizza) {
      resultContainer.innerHTML = `
          <div class="card">
              <h3>${pizza.nombre}</h3>
              <img src="${pizza.imagen}" alt="${pizza.nombre}">
              <p>Precio: ${pizza.precio}</p>
          </div>
      `;
  }

  // Función para renderizar mensajes de error
  function renderError(message) {
      resultContainer.innerHTML = `<p class="error">${message}</p>`;
  }

  // Verificar si hay una pizza en el localStorage al cargar la página
  const lastSearchedPizza = JSON.parse(localStorage.getItem('lastSearchedPizza'));
  if (lastSearchedPizza) {
      renderPizzaCard(lastSearchedPizza);
  }
});
