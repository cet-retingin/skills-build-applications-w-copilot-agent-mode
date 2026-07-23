import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

/**
 * GET /api/leaderboard/
 * Get global leaderboard
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Get global leaderboard',
    data: []
  });
});

/**
 * GET /api/leaderboard/teams
 * Get team leaderboard
 */
router.get('/teams', (req: Request, res: Response) => {
  res.json({
    message: 'Get team leaderboard',
    data: []
  });
});

/**
 * GET /api/leaderboard/:userId
 * Get user ranking
 */
router.get('/:userId', (req: Request, res: Response) => {
  const { userId } = req.params;
  res.json({
    message: `Get ranking for user: ${userId}`,
    data: { userId }
  });
});

module.exports = router;
