import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Jenkins + Node.js CI/CD 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

