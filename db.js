import sequelize from "sequelize";
//users-password-host-database
//mysql://b2cf318ac48acb:375384d4@us-cdbr-east-05.cleardb.net/heroku_081e1f7d9406a2d?reconnect=true
const configdb = {
	user: "b2cf318ac48acb",
	password: "375384d4",
	host: "us-cdbr-east-05.cleardb.net",
	database: "heroku_081e1f7d9406a2d",
};

//database, user , password {host}
const db = new sequelize(configdb.database, configdb.user, configdb.password, {
	host: configdb.host,
	dialect: "mysql",
});

export default db;
