import './index.scss';

export default function NestedThing({ fetchData }) {
  const { json, loading, error } = fetchData;

  if (loading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p>An error occured while fetching images: {error}</p>;
  }

  return (
    <div className="nested-thing">
      {json.map((entry) => (
        <div key={entry.id} className="nested-thing--item">
          <h3>{entry.name}</h3>
          <p>{entry.body}</p>
        </div>
      ))}
    </div>
  );
}
