"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/**
 * GET /api/teams/
 * Get all teams
 */
router.get('/', (req, res) => {
    res.json({
        message: 'Get all teams',
        data: []
    });
});
/**
 * GET /api/teams/:id
 * Get team by ID
 */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Get team with ID: ${id}`,
        data: { id }
    });
});
/**
 * POST /api/teams/
 * Create new team
 */
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Team created',
        data: req.body
    });
});
/**
 * PUT /api/teams/:id
 * Update team by ID
 */
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Team ${id} updated`,
        data: { id, ...req.body }
    });
});
/**
 * DELETE /api/teams/:id
 * Delete team by ID
 */
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Team ${id} deleted`,
        data: { id }
    });
});
module.exports = router;
//# sourceMappingURL=teams.js.map