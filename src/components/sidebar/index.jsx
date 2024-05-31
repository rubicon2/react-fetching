import useUserList from '../../hooks/useUserList';
import './index.scss';

export default function Sidebar() {
  const { data, loading, error } = useUserList();

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
