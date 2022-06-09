import { DataTypes } from "sequelize";
import db from "../db.js";
const NotesModel = db.define("tbl_notes", {
	title: { type: DataTypes.STRING },
	content: { type: DataTypes.STRING },
	archived: { type: DataTypes.BOOLEAN },
	tags: { type: DataTypes.STRING },
});

export default NotesModel;