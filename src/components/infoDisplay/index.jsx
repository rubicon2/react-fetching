import useFetch from '../../hooks/useFetch';

export default function InfoDisplay() {
  const { data, loading, error } = useFetch('https://reqres.in/api/users/1');

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
        {data.first_name} {data.last_name}
      </h2>
      <img src={data.avatar} alt="" />
    </div>
  );
}
