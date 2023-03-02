module.exports = (Sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // remember_token: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        rol: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        createdAt: false,
        updatedAt: false,
    }
    const User = Sequelize.define(alias, cols, config);

    return User;
}