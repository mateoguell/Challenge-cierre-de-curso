const sequelize = require('sequelize');

const Movie = sequelize.define('movies', {
    id: {type: sequelize.SMALLINT, primaryKey: true},
    title: sequelize.STRING,
    awards: sequelize.INT,
  })