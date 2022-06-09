import sequelize from "sequelize";

const db = new sequelize("app_notes", "root", "", { host: "localhost", dialect: "mysql" });

export default db;