import express from "express";
import { getAllNotes, getNoteById, createNote, delteNote, updateNote} from "../controllers/notes.controllers.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post('/create', createNote);
router.delete('/delete/:id', delteNote);
router.put('/update/:id', updateNote);

export default router;
