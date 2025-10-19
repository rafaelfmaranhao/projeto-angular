import express from "express";
import cors from 'cors';
import { youtubeDl } from "youtube-dl-exec";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/video-info", async (req, res) => {
    const url = req.query.url as string;

    if (!url) {
        return res.status(400).json({ error: "URL obrigatória" });
    }

    try {
        const promise = await youtubeDl(url, {
            dumpSingleJson: true,
            noWarnings: true,
            preferFreeFormats: true
        });
        res.json(promise);

        console.log('\nConsulta do vídeo: \n', promise)
    } catch (error: any) {
        console.error("Erro: ", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend rodando em http://localhost:${PORT}`));