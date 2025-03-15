import { useState } from 'react';
import './Componenta_doi.css';

const Componenta_doi = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:8090/users/getAllUsers", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });
            const data = await response.json()
            setUsers(data) //pune data in users // Salvează utilizatorii în state

        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
  
    return (
        <div className='div2'>
            <h2>This is a button</h2>
            <button id='butonul' onClick={fetchUsers}>click me</button>
            
            {/* Container flex pentru utilizatori */}
            <div className="users-container">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        <h3>{user.nume}</h3>
                        <p><strong>Vârstă:</strong> {user.varsta}</p>
                        <p><strong>Salariu:</strong> {user.salariu}</p>
                    </div>
                ))}
            </div>
        </div>
    );
  
}

export default Componenta_doi;