import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Codespaces-aware base URL for API
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

console.log(`API Base URL: ${baseUrl}`);

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' });
});

// API Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/teams', require('./routes/teams'));
app.use('/api/activities', require('./routes/activities'));
app.use('/api/leaderboard', require('./routes/leaderboard'));
app.use('/api/workouts', require('./routes/workouts'));

// Error handling middleware
app.use((err: any, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 OctoFit Tracker Backend running at ${baseUrl}`);
  console.log(`Server listening on port ${PORT}`);
});

export default app;
