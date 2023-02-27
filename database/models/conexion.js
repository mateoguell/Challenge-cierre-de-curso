const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.json')[env];

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

  // Definición del modelo Sequelize para la tabla "movies"
const Movie = sequelize.define('movies', {
  id: {type: Sequelize.SMALLINT, primaryKey: true},
  title: Sequelize.STRING,
  awards: Sequelize.INTEGER,
},
{
  underscore: true,
  timestamps: false,
}
);

// Consulta SELECT a la tabla "movies" y impresión de los datos resultantes
// Movie.findAll()
//   .then(movies => {
//     movies.forEach(movie => {
//       console.log(movie.id, movie.title, movie.awards);
//     });
//   })
//   .catch(err => {
//     console.error('Error al obtener las películas:', err);
//   });
  module.exports.Movie = Movie;