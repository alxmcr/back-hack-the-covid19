'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bus', {
      bu_bus: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bu_codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bu_placa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ru_ruta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Ruta",
          key: "ru_ruta"
        }
      },
      bu_estado: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bus');
  }
};