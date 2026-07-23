import { useEffect, useState } from 'react';
import { fetchCollection, getApiBaseUrl } from '../utils/api';

function ResourceView({ resource, title }) {
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      try {
        setLoading(true);
        setError('');
        const result = await fetchCollection(resource);

        if (mounted) {
          setItems(result.items);
          setPagination(result.pagination);
        }
      } catch (requestError) {
        if (mounted) {
          setError(requestError.message);
          setItems([]);
          setPagination(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      mounted = false;
    };
  }, [resource]);

  if (loading) {
    return <p className="text-secondary">Loading {title.toLowerCase()}...</p>;
  }

  if (error) {
    return (
      <div className="alert alert-warning" role="alert">
        Failed to load {title.toLowerCase()}: {error}
      </div>
    );
  }

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">{title}</h2>
        <p className="text-secondary small mb-3">
          Endpoint: {`${getApiBaseUrl()}/${resource}/`}
        </p>

        {items.length === 0 ? (
          <p className="mb-0">No records available.</p>
        ) : (
          <ul className="list-group list-group-flush">
            {items.map((item, index) => (
              <li className="list-group-item px-0" key={`${resource}-${index}`}>
                <pre className="mb-0 small">{JSON.stringify(item, null, 2)}</pre>
              </li>
            ))}
          </ul>
        )}

        {pagination && (
          <div className="mt-3 small text-secondary">
            <span className="me-3">Total: {pagination.total ?? items.length}</span>
            {pagination.page && <span className="me-3">Page: {pagination.page}</span>}
            {pagination.totalPages && <span>Total pages: {pagination.totalPages}</span>}
          </div>
        )}
      </div>
    </section>
  );
}

export default ResourceView;
