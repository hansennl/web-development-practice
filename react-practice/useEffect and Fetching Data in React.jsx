import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/gaearon');
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data from GitHub API.');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h2>GitHub User Profile</h2>

      {loading && <p style={{ color: '#007bff' }}>Loading user data...</p>}
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && user && (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', textAlign: 'center', background: '#f9f9f9' }}>
          <img 
            src={user.avatar_url} 
            alt={user.name} 
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px' }} 
          />
          <h2>{user.name}</h2>
          <p style={{ color: '#666' }}>{user.bio || 'No bio available'}</p>
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}