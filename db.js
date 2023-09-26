const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'LouisRenderGrospecs', // Database name
  'Louis', // User
  'eTKGBjJfYl57GRtNVDX4vCd03SOgaG4e', // Password
  {
    host: 'dpg-ck9div1ehpqs73c8ripg-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
