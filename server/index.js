import { fileURLToPath } from "url";
import path, { dirname } from "path";
import express from "express";
import movieRoutes from './routes/movieRoutes.js'
import cors from "cors";
// import corsOptions from "./config/corsOptions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3500;

// app.use(cors(corsOptions));

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", movieRoutes);

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({ message: "404 Not Found" });
    } else {
        res.type("txt").send("404 Not Found");
    }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
