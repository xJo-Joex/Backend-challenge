import express from "express";
import cors from "cors";
import routes from "././routes/notes.routes.js";
import db from "./db.js";
const app = express();
const PORT = process.env.PORT|| 3050;
try {
	await db.authenticate();
} catch (error) {
	console.log(error);
}

//middlesware
app.use(cors());
app.use(express.json());
//routes
app.use("/notes", routes);

app.listen(PORT, () => {
	console.log("Server is running on port 4000");
});
