module.exports = (Sequelize, DataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        createdAt: false,
        updatedAt: false,
    }
    const Genre = Sequelize.define(alias, cols, config);

    Genre.associate = function(models){
        Genre.hasMany(models.Movie,{
            as: "movies",
            foreignKey: "genre_id",
        })
    }

    return Genre;
}