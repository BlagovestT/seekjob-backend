"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("jobs", [
      {
        id: 1,
        user_id: "1",
        title: "Test Job",
        description: "This is test description",
        location: "Varna",
        employment_type: "Full Time",
        min_experience: 2,
        keywords: "HTML, CSS",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("jobs", null, {});
  },
};
