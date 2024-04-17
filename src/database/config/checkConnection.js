const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'bsa47nm8moqs0votrvdr-mysql.services.clever-cloud.com',
    username: 'uf4scgq4bzmhb3oy',
    password: 'OEXP10LrAVLvrpgIp244',
    database: 'bsa47nm8moqs0votrvdr'
});

async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

module.exports = checkConnection;