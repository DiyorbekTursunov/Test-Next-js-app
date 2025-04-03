"use client";

import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFilterStore } from '../store/useFilterStore';
import UserList from '../components/UserList';
import { SearchIcon } from 'lucide-react';

const queryClient = new QueryClient();

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeContent />
    </QueryClientProvider>
  );
}

function HomeContent() {
  const { data: users, isLoading } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
  const { filter, setFilter } = useFilterStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Directory</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Filter by name"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 w-full py-2 px-4 border border-gray placeholder:text-[#000] text-[#000] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <UserList users={users} filter={filter} />
          )}
        </div>
      </div>
    </div>
  );
}
