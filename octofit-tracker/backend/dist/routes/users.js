"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * GET /api/users/
 * Get all users
 */
router.get('/', (req, res) => {
    res.json({
        message: 'Get all users',
        data: []
    });
});
/**
 * GET /api/users/:id
 * Get user by ID
 */
router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'User created',
        data: req.body
    });
});
/**
 * PUT /api/users/:id
 * Update user by ID
 */
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `User ${id} deleted`,
        data: { id }
    });
});
module.exports = router;
//# sourceMappingURL=users.js.map