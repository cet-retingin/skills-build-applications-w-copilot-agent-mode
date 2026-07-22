"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * GET /api/activities/
 * Get all activities
 */
router.get('/', (req, res) => {
    res.json({
        message: 'Get all activities',
        data: []
    });
});
/**
 * GET /api/activities/:id
 * Get activity by ID
 */
router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Activity logged',
        data: req.body
    });
});
/**
 * PUT /api/activities/:id
 * Update activity by ID
 */
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Activity ${id} deleted`,
        data: { id }
    });
});
module.exports = router;
//# sourceMappingURL=activities.js.map