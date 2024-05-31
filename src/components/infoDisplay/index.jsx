import useFetch from '../../hooks/useFetch';

export default function InfoDisplay() {
  const { json, loading, error } = useFetch(
    'https://reqres.in/api/users/1',
    10000,
  );


  if (loading) {
    return (
      <div className="info-display container">
        <h2 className="section-title">Info Display</h2>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="info-display container">
        <h2 className="section-title">Info Display</h2>
        <p>An error has occurred: {error}</p>
      </div>
    );
  }

  return (
    <div className="info-display container">
      <h2 className="section-title">
        {json.data.first_name} {json.data.last_name}
      </h2>
      <img src={json.data.avatar} alt="" />
    </div>
  );
}
