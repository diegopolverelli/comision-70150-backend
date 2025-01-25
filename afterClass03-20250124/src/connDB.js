import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('pruebaDB', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    // logging: false
});

try {
    await sequelize.authenticate();
    console.log('DB online!');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}