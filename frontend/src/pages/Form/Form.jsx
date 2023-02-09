import React from 'react'
import { useState } from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const { data: automoveis, httpConfig } = useFetch('http://localhost:3001/automoveis');

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Form')
 }
const handleSubmit = () =>{  
const data = {placa: placa, modelo: modelo, marca:marca}
console.log(data);
httpConfig(data, "POST")
setPlaca('')
setModelo('')
setMarca('')
}

  return (
    <div>
      <button onClick={()=> handleNavigate()}>Voltar</button>
      <form onSubmit={handleSubmit}>
        <label>
          <span>
            Placa
          </span>
          <input type="text" value={placa} onChange={(e)=>setPlaca(e.target.value)}/>
        </label>
        <label>
          <span>
            MODELO
          </span>
          <input type="text" value={modelo} onChange={(e)=>setModelo(e.target.value)}/>
        </label>
        <label>
          <span> MARCA:</span>
        <select name='' value={marca} onChange={(e)=>setMarca(e.target.value)}>
          <option value="Agrale">Agrale</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="BYD">BYD</option>
          <option value="CAOA Chery">CAOA Chery</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Citroën">Citroën</option>
        </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form