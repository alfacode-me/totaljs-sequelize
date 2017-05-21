F.DB = require('sequelize');
F.MODEL = new F.DB(null, null, null, {
  dialect: 'sqlite',
  storage: 'database/db.db',
  logging: false
});
