import express from "express";
import cors from "cors";
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'last joke',
            content: 'This is the last joke'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
