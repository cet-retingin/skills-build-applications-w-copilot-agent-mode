"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * GET /api/workouts/
 * Get all workouts/suggestions
 */
router.get('/', (req, res) => {
    res.json({
        message: 'Get all workouts',
        data: []
    });
});
/**
 * GET /api/workouts/:userId
 * Get personalized workout suggestions for user
 */
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({
        message: `Get personalized workouts for user: ${userId}`,
        data: { userId }
    });
});
/**
 * POST /api/workouts/
 * Create new workout suggestion
 */
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Workout created',
        data: req.body
    });
});
/**
 * PUT /api/workouts/:id
 * Update workout by ID
 */
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Workout ${id} updated`,
        data: { id, ...req.body }
    });
});
/**
 * DELETE /api/workouts/:id
 * Delete workout by ID
 */
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Workout ${id} deleted`,
        data: { id }
    });
});
module.exports = router;
//# sourceMappingURL=workouts.js.map