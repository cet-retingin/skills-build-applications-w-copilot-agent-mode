import { useEffect, useState } from 'react';

const CODESPACE_NAME = import.meta.env.VITE_CODESPACE_NAME?.trim();
const API_URL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev/api/users`
  : 'http://localhost:8000/api/users';

function Users() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then(data => {
        setItems(Array.isArray(data) ? data : (data.results ?? data.items ?? data.data ?? []));
        setLoading(false);
      })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p className="text-secondary">Loading users...</p>;
  if (error) return <div className="alert alert-warning" role="alert">Failed to load users: {error}</div>;

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Users</h2>
        <p className="text-secondary small mb-3">Endpoint: {API_URL}</p>
        {items.length === 0 ? (
          <p className="mb-0">No records available.</p>
        ) : (
          <ul className="list-group list-group-flush">
            {items.map((item, index) => (
              <li className="list-group-item px-0" key={`user-${index}`}>
                <pre className="mb-0 small">{JSON.stringify(item, null, 2)}</pre>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Users;
