"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Jeans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Trousers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "T-shirts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shirts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coats",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
