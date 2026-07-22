import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

/**
 * GET /api/activities/
 * Get all activities
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Get all activities',
    data: []
  });
});

/**
 * GET /api/activities/:id
 * Get activity by ID
 */
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Get activity with ID: ${id}`,
    data: { id }
  });
});

/**
 * POST /api/activities/
 * Log new activity
 */
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Activity logged',
    data: req.body
  });
});

/**
 * PUT /api/activities/:id
 * Update activity by ID
 */
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Activity ${id} updated`,
    data: { id, ...req.body }
  });
});

/**
 * DELETE /api/activities/:id
 * Delete activity by ID
 */
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Activity ${id} deleted`,
    data: { id }
  });
});

module.exports = router;
