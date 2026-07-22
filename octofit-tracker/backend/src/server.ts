import express from 'express';

const app = express();
const port = 8000;

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.get('/api/users', (_req, res) => {
  res.json([]);
});

app.get('/api/activities', (_req, res) => {
  res.json([]);
});

app.listen(port, () => {
  console.log(`API server running at ${baseUrl}`);
});
