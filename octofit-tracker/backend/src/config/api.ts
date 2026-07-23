/**
 * API Configuration for localhost and Codespaces environments
 */

export const getApiConfig = () => {
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

export default getApiConfig;
