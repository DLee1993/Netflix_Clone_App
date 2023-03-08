import express from "express";
import { getAllMovies } from "../controllers/movieControllers.js";

const router = express.Router();

router.route("/").get(getAllMovies);

export default router;
