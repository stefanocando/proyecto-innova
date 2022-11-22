'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Restaurants", [
      {
        name: "Sapiens",
        description: "Buscamos brindar una alternativa de comida real, sabrosa y contundente con la que no sólo puedas vivir una experiencia placentera en el momento, sino que también te sigas sintiendo bien después.",
        categories: ["Vegano", "Vegetariano", "Bajo en Azucar", "Bajo en Sodio", "Sin Gluten"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Quinoa",
        description: "Quínoa es un restaurante vegetariano que destaca por su cocina sana y sabrosa elaborada con productos de temporada y por su ambiente natural.",
        categories: ["Vegetariano", "Vegano", "Bajo en Sodio"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mammaterra",
        description: "Las más deliciosas y saludables hamburguesas que podrás encontrar, si buscas vegano y saludable encontrarás Mammaterra.",
        categories: ["Vegetariano", "Vegano", "Sin Gluten", "Bajo en Sodio", "Bajo en Azucar"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Restaurants', null, {});
  }
};
