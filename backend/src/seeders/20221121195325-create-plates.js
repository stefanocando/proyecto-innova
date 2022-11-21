'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Platos", [
      {
        name: "ENSALADA DE FRUTAS",
        description: "Las frutas varían de acuerdo a la estación.",
        idRestaurant: 2,
        price: 3.900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "GRANOLA",
        description: "Con fruta, yogurt natural y miel. ",
        idRestaurant: 2,
        price: 4.500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TÁRTARO DE BETARRAGA",
        description: "Pepinillo, alcaparras, perejil, cebolla morada y tostadas.",
        idRestaurant: 2,
        price: 6.500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "QUINOA ROJA",
        description: "Quínoa blanca y roja, zanahoria, aceitunas, cilantro, tomates cherry, palta, almendras tostadas, hojas verdes y tofu salteado.",
        idRestaurant: 2,
        price: 9.300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "GNOCCHI DE ZAPALLO",
        description: "Gnocchi de zapallo con pesto, champiñones, espinaca, tomates cherry, mozzarella fresca, almendras tostadas y perejil",
        idRestaurant: 2,
        price: 10.900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BASTONES DE CAMOTE CON VEGANESA (GF)",
        description: "(GF): (Gluten-free) Productos libres de gluten. Pueden contener trazas",
        idRestaurant: 1,
        price: 5.400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BUDDHA TROPICAL (GF)",
        description: "Mix de hojas verdes, kale y menta, quínoa blanca, cebolla morada, palta, mango y dressing de betarragas.",
        idRestaurant: 1,
        price: 7.400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PORTOBELLO",
        description: "Base de masa madre integral, salsa de tomates casera, queso de frutos secos, champiñones portobello, dressing de betarraga y rawmesan.",
        idRestaurant: 1,
        price: 8.900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CHEESECAKE BERRIES (GF)",
        description: "Base de almendras y dátiles, relleno de moussecastañas de cajú, vainilla y berries.",
        idRestaurant: 1,
        price: 4.400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BONIATO",
        description: "Pan integral masa madre, hamburguesa de camote, garbanzo y quínoa, queso crema de castañas de cajú, coleslaw casero (repollo, zanahoria y pepinillos) y palta. Acompañada de bastones de camote horneados y de salsa tártara.",
        idRestaurant: 1,
        price: 8.900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CHORRILLANA VEGANA",
        description: "Cebolla caramelizada, papas rústicas horneadas, seitán grillado, queso (vegano u tradicional), tomate y aceitunas. además puedes elegir 2 salsas a elección.",
        idRestaurant: 3,
        price: 9.500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "KOMBUCHACHA ORIGINAL",
        description: "Sabor natural, fermentado de Te.",
        idRestaurant: 3,
        price: 3.800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MAMMA BOX",
        description: "4 mitades de burger (italiana y azteca), papas rusticas, 8 aros de cebolla, 6 salsas de mammaterra.",
        idRestaurant: 3,
        price: 14.500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "KOMBUCHACHA TE VERDE",
        description: "Fermentado de Te, sabor te verde.",
        idRestaurant: 3,
        price: 3.800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "LIMONADA MENTA JENGIBRE MIEL",
        description: "Vitamina de limonada, menta, jengibre y miel.",
        idRestaurant: 3,
        price: 2.700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Platos', null, {});
  }
};
