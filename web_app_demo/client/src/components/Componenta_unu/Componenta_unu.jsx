import { useState } from 'react';
import '../Componenta_unu/Componenta_unu.css'
import './Componenta_unu.css'

function Componenta_unu() {
  
  const [nume, setNume] = useState('');
  const [salariu, setSalariu] = useState('');
  const [varsta, setVarsta] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log({ nume, salariu, varsta });
    const user = {
        nume, salariu, varsta
    }

    try{
      const res = await fetch("http://localhost:8090/users/insertUser",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
          }
          
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json(); // Extrage JSON-ul din răspuns
    console.log("User added:", data);


  }
  catch(error){
    console.error("Error:", error);
  }
  };

  return (
    <div className='componenta1'>
        
        <h1>My first component</h1>
        <form onSubmit={handleSubmit} className='formular'>
        <div>
          <label htmlFor="nume">Nume: </label>
          <input 
            type="text" 
            id="nume" 
            value={nume} 
            onChange={(e) => setNume(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="varsta">Vârstă: </label>
          <input 
            type="number" 
            id="varsta" 
            value={varsta} 
            onChange={(e) => setVarsta(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="salariu">Salariu: </label>
          <input 
            type="number" 
            id="salariu" 
            value={salariu} 
            onChange={(e) => setSalariu(e.target.value)} 
          />
        </div>
        <div>
            <button type="submit">Trimite</button>
        </div>
      </form>

    </div>
  )
}

export default Componenta_unu