import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if(isLoggedIn !== "true"){
      navigate("/")
    }
  }, [])

  const fetchUsers = async () => {
    setLoading(true); 
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const newUsers = response.data.map((user: User) => ({
        ...user,
        id: user.id + (page - 1) * 10, 
      }));
      setUsers(prevUsers => [...prevUsers, ...newUsers]);
    } catch (error) {
      toast.error("Error fetching the details of users")
      console.error('Error getting users:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate('/'); 
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >= 
      document.documentElement.offsetHeight
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>User List</h3>
        <button className="btn btn-danger " onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div>
        {users.map(user => (
          <div className="border rounded p-3 mb-2" key={user.id}>
            <h5>{user.name}</h5>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center my-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div style={{ height: '20px' }}></div>
    </div>
  );
};

export default Users;
