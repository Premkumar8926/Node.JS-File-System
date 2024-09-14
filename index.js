import express from "express";
import cors from "cors";
import fs from "fs";
import { format } from "date-fns";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();  // Initialize Express application
app.use(cors());        // Enable CORS for all routes

// Root endpoint to provide information about available endpoints
app.get('/', (req, res) => {
    res.status(200).json({
        "End point to create a text file": "/createfile",
        "End point to retrieve all text files": "/showfiles"
    });
})

// Endpoint to create a text file with current timestamp as filename
app.get('/createfile', (req, res) => {
    try {
        let today = format(new Date(), 'dd-MM-yyyy-HH-mm-ss');
        const filePath = path.join('TimeStamp', `${today}.txt`);
        if (!fs.existsSync('TimeStamp')) {
            fs.mkdirSync('TimeStamp'); // Create TimeStamp folder if it doesn't exist
        }
        fs.writeFileSync(filePath, `${today}`, 'utf8');

        res.status(200).json({
            "msg": "Text file added",
            "fileContent": `${today}`,
            "fileName": `${today}`
        });
    } catch (error) {
        res.status(500).json({
            "error": "Error creating file",
            "message": error.message
        });
    }
});

// Endpoint to retrieve all text file names from the 'TimeStamp' folder
app.get('/showfiles', (req, res) => {
    try {
        const folderPath = 'TimeStamp';
        if (!fs.existsSync(folderPath)) {
            return res.status(404).json({
                "error": "Folder not found"
            });
        }
        const files = fs.readdirSync(folderPath);
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({
            "error": "Error reading files",
            "message": error.message
        });
    }
});

// Start the server, listening on the specified port from environment variables
app.listen(process.env.PORT, () => {
    console.log("App is listening on PORT", process.env.PORT);
});
