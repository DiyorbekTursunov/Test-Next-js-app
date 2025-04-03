import { UserCircle } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  website?: string;
  company?: {
    name: string;
  };
}

interface UserListProps {
  users: User[];
  filter: string;
}

const UserList = ({ users, filter }: UserListProps) => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredUsers.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No users found matching &quot;{filter}&quot;</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-2">
        Showing {filteredUsers.length} of {users.length} users
      </p>
      <ul className="divide-y divide-gray-200 rounded-md overflow-hidden">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className="hover:bg-gray-50 transition duration-150"
          >
            <div className="flex items-center p-4">
              <div className="flex-shrink-0">
                <UserCircle className="h-10 w-10 text-blue-500" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-medium text-gray-900">{user.name}</div>
                {user.email && (
                  <div className="text-sm text-gray-500">{user.email}</div>
                )}
              </div>
              {user.company && (
                <div className="text-sm text-gray-500">
                  {user.company.name}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
