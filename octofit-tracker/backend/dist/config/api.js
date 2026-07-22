"use strict";
/**
 * API Configuration for localhost and Codespaces environments
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiConfig = void 0;
const getApiConfig = () => {
    const codespaceName = process.env.CODESPACE_NAME;
    const baseUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
    const port = 8000;
    return {
        baseUrl,
        port,
        codespaceName: codespaceName || 'localhost',
        isCodespaces: !!codespaceName,
    };
};
exports.getApiConfig = getApiConfig;
exports.default = exports.getApiConfig;
//# sourceMappingURL=api.js.map