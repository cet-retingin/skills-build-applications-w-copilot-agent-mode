export function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }

  return 'http://localhost:8000/api';
}

function normalizeArrayPayload(payload) {
  if (Array.isArray(payload)) {
    return { items: payload, pagination: null };
  }

  if (payload && typeof payload === 'object') {
    if (Array.isArray(payload.data)) {
      return { items: payload.data, pagination: payload.pagination ?? null };
    }

    if (Array.isArray(payload.results)) {
      return {
        items: payload.results,
        pagination: {
          total: typeof payload.count === 'number' ? payload.count : payload.results.length,
          next: payload.next ?? null,
          previous: payload.previous ?? null,
          page: payload.page ?? payload.currentPage ?? null,
          totalPages: payload.totalPages ?? null,
        },
      };
    }

    if (Array.isArray(payload.items)) {
      return {
        items: payload.items,
        pagination: {
          total: payload.total ?? payload.items.length,
          next: payload.next ?? null,
          previous: payload.previous ?? null,
          page: payload.page ?? payload.currentPage ?? null,
          totalPages: payload.totalPages ?? null,
        },
      };
    }
  }

  return { items: [], pagination: null };
}

export async function fetchCollection(resource) {
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/${resource}/`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return normalizeArrayPayload(payload);
}
