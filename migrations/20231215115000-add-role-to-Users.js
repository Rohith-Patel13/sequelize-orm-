'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Add a new column 'role' to the 'Users' table
    await queryInterface.addColumn('Users','role',{
      type: DataTypes.STRING,
      allowNull:false,
    })
  },

  async down (queryInterface, DataTypes) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    
    //Remove the 'role' column from the 'Users' table if needed
    await queryInterface.removeColumn('Users','role');
  }
};
