# OctoFit Tracker Frontend

This React 19 + Vite frontend uses `react-router-dom` for navigation across:

- `/users`
- `/teams`
- `/activities`
- `/leaderboard`
- `/workouts`

## Environment variable setup

Define `VITE_CODESPACE_NAME` for Codespaces API calls.

Example `.env.local`:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

When defined, the frontend calls:

```text
https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

Safe fallback when `VITE_CODESPACE_NAME` is not set:

```text
http://localhost:8000/api/[component]/
```

This avoids broken URLs such as `https://undefined-8000.app.github.dev/...`.
