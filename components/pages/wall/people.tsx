import { Image, Container, Input, Icon } from 'semantic-ui-react';
import { useEffect, useState } from 'react';

interface User {
  id: number,
  username: string,
}

export const People = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div className="column people-hld">
      <h2 className="bg-primary text-primary">people</h2>
      <div className="search-hld bg-primary">
        <Input>
          <Icon name="search" size="large" />
          <input className="text-primary" />
        </Input>
      </div>
      <ul className="listing">
        {users && users.map((user, index) => (
          <li>
            <h3 className="bg-primary text-primary">{user.username}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
};
