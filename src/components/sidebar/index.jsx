import useFetch from '../../hooks/useFetch';
import './index.scss';

export default function Sidebar() {
  const { json, loading, error } = useFetch(
    'https://reqres.in/api/users?page=1',
    5000,
  );

  if (loading)
    return (
      <div className="sidebar container">
        <h2 className="section-title">Users</h2>
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="sidebar container">
        <h2 className="section-title">Users</h2>
        <p>An error has occurred: {error}</p>
      </div>
    );

  const { data } = json;
  return (
    <div className="sidebar container">
      <h2 className="section-title">Users</h2>
      <ul>
        {data.map((user) => (
          <li className="user" key={user.id}>
            <span>{user.first_name + ' '}</span>
            <span>{user.last_name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
