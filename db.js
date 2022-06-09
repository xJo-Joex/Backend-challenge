import sequelize from "sequelize";
//users-password-host-database
//mysql://b2cf318ac48acb:375384d4@us-cdbr-east-05.cleardb.net/heroku_081e1f7d9406a2d?reconnect=true
//table = "app_notes"
const configdb = {
	user: "b2cf318ac48acb",
	password: "375384d4",
	host: "us-cdbr-east-05.cleardb.net",
	database: "heroku_081e1f7d9406a2d",
};

//database, user , password {host}
const db = new sequelize(
	process.env.DB_HOST || "app_notes",
	process.env.DB_USER || "root",
	process.env.DB_PASSWORD || "",
	{ host: process.env.DB_HOST || "localhost", dialect: "mysql" }
);

export default db;
