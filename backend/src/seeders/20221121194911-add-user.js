'use strict';
const bcrypt = require('bcrypt');
const stef_password = "stef"
const allan_password = "alla"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const stef_hpassword = await bcrypt.hash(stef_password, 5);
    const allan_hpassword = await bcrypt.hash(allan_password, 5);
    return queryInterface.bulkInsert("Users", [
      {
        username: "Stefano",
        telephone: "+56986753456",
        password: stef_hpassword,
        categories: ["Vegetariano", "Bajo En Azucar", "Sin Gluten"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Allan",
        telephone: "+56987657689",
        password: allan_hpassword,
        categories: ["Vegetariano", "Sin Sodio"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
