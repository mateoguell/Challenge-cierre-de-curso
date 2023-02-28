module.exports = (Sequelize, DataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        awards: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre_id: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        createdAt: false,
        updatedAt: false,
    }
    const Movie = Sequelize.define(alias, cols, config);

    Movie.associate = function (models){
        Movie.belongsTo(models.Genre, {
            as: "movieGenre",
            foreignKey: "genre_id",
        });
    }

    return Movie;
}