import { Image } from 'semantic-ui-react';
import { useEffect, useState } from 'react';

interface User {
  id: number,
  username: string,
}

interface UserProps {
  user: User,
}

const Person = ({ user }: UserProps) => (
  <div className="person-hld">
    <Image src="https://picsum.photos/700" circular />
    <span>{user.username}</span>
  </div>
)

export const People = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div className="people-hld">
      <h2>People</h2>
      {users && users.map((user, index) => (
        <Person
          key={user.id}
          user={user} 
        />
      ))}
    </div>
  )
};
