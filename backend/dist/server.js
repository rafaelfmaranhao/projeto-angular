import express from "express";
import cors from 'cors';
import { youtubeDl } from "youtube-dl-exec";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/video-info", async (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).json({ error: "URL obrigatória" });
    }
    try {
        const info = await youtubeDl(url, {
            dumpSingleJson: true,
            noWarnings: true,
            preferFreeFormats: true
        });
        res.json(info);
    }
    catch (error) {
        console.error("Erro: ", error);
        res.status(500).json({ error: error.message });
    }
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map