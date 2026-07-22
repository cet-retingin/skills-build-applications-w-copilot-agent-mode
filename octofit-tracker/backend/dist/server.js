"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = createServer;
exports.startServer = startServer;
const express_1 = __importDefault(require("express"));
const api_1 = require("./config/api");
function createServer() {
    const app = (0, express_1.default)();
    const { baseUrl, port: PORT } = (0, api_1.getApiConfig)();
    // Middleware
    app.use(express_1.default.json());
    console.log(`\n📍 API Base URL: ${baseUrl}\n`);
    // Health check
    app.get('/health', (req, res) => {
        res.json({ status: 'OK', message: 'OctoFit Tracker API is running' });
    });
    // API Routes
    app.use('/api/users', require('./routes/users'));
    app.use('/api/teams', require('./routes/teams'));
    app.use('/api/activities', require('./routes/activities'));
    app.use('/api/leaderboard', require('./routes/leaderboard'));
    app.use('/api/workouts', require('./routes/workouts'));
    // Error handling middleware (must have 4 parameters for Express to recognize it)
    app.use((err, req, res, next) => {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error', message: err.message });
    });
    return app;
}
function startServer() {
    const app = createServer();
    const { baseUrl, port: PORT } = (0, api_1.getApiConfig)();
    app.listen(PORT, () => {
        console.log(`🚀 OctoFit Tracker Backend running at ${baseUrl}`);
        console.log(`Server listening on port ${PORT}`);
        console.log(`CODESPACE_NAME: ${process.env.CODESPACE_NAME || 'localhost'}`);
    });
}
exports.default = createServer;
//# sourceMappingURL=server.js.map