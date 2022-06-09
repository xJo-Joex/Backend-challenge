import NotesModel from "../models/notes.models.js";

export const getAllNotes = async (req, res) => {
	try {
		const notes = await NotesModel.findAll();
		res.json(notes);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const getNoteById = async (req, res) => {
	try {
		const note = await NotesModel.findAll({ where: { id: req.params.id } });
		res.json(note[0]);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const createNote = async (req, res) => {
	try {
		await NotesModel.create(req.body);
		res.json({ message: "Note created successfully" });
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const updateNote = async (req, res) => {
	try {
		await NotesModel.update(req.body, { where: { id: req.params.id } });
		res.json({ message: "Note updated successfully" });
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const delteNote = async (req, res) => {
	try {
		await NotesModel.destroy({ where: { id: req.params.id } });
		res.json({ message: "Note deleted successfully" });
	} catch (error) {
		res.json({ message: error.message });
	}
};
