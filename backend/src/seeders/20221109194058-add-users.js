'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "Stefano",
        telephone: "+56986753456",
        password: "stefano",
        categories: ["Vegetariano", "Bajo En Azucar", "Sin Gluten"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Allan",
        telephone: "+56987657689",
        password: "allan",
        categories: ["Vegetariano", "Sin Sodio"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};