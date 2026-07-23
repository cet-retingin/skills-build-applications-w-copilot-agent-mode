import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

/**
 * GET /api/users/
 * Get all users
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Get all users',
    data: []
  });
});

/**
 * GET /api/users/:id
 * Get user by ID
 */
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `Get user with ID: ${id}`,
    data: { id }
  });
});

/**
 * POST /api/users/
 * Create new user
 */
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'User created',
    data: req.body
  });
});

/**
 * PUT /api/users/:id
 * Update user by ID
 */
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `User ${id} updated`,
    data: { id, ...req.body }
  });
});

/**
 * DELETE /api/users/:id
 * Delete user by ID
 */
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: `User ${id} deleted`,
    data: { id }
  });
});

module.exports = router;
