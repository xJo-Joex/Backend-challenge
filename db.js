import sequelize from "sequelize";

//database, user , password {host}
const db = new sequelize(
	process.env.DB_DATABASE || "app_notes",
	process.env.DB_USER || "root",
	process.env.DB_PASSWORD || "",
	{ host: process.env.DB_HOST || "localhost", dialect: "mysql2" }
);

export default db;
