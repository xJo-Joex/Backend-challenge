import express from "express";
import cors from "cors";
import routes from "././routes/notes.routes.js";
import db from "./db.js";
const app = express();
const PORT = process.env.PORT || 3050;
try {
	await db.authenticate();
} catch (error) {
	console.log(error);
}

//middlesware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
	res.send({
		message: "Welcome to the notes API",
		allNotes: "https://notes-backend-challenge.herokuapp.com/notes",
		oneNote: "https://notes-backend-challenge.herokuapp.com/notes/1",
		create: "https://notes-backend-challenge.herokuapp.com/notes/create",
		update: "https://notes-backend-challenge.herokuapp.com/notes/update/1",
		delete: "https://notes-backend-challenge.herokuapp.com/notes/delete/1",
	});
});
//routes
app.use("/notes", routes);

app.listen(PORT, () => {
	console.log("Server is running on port " + PORT);
});
