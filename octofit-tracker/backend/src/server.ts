import express, { Express, Request, Response, NextFunction } from 'express';
import { getApiConfig } from './config/api';

export function createServer(): Express {
  const app: Express = express();
  const { baseUrl, port: PORT } = getApiConfig();

  // Middleware
  app.use(express.json());

  console.log(`\n📍 API Base URL: ${baseUrl}\n`);

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

  // Error handling middleware (must have 4 parameters for Express to recognize it)
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
  });

  return app;
}

export function startServer(): void {
  const app = createServer();
  const { baseUrl, port: PORT } = getApiConfig();
  const codespaceUrl = process.env.CODESPACE_NAME
    ? `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
    : null;

  app.listen(PORT, () => {
    console.log(`🚀 OctoFit Tracker Backend running at ${baseUrl}`);
    console.log(`Server listening on port ${PORT}`);
    console.log(`CODESPACE_NAME: ${process.env.CODESPACE_NAME || 'localhost'}`);
    if (codespaceUrl) {
      console.log(`Codespaces URL: ${codespaceUrl}`);
    }
  });
}

export default createServer;
