import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const { data: automoveis, httpConfig } = useFetch('http://localhost:3001/automoveis');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Form')
 }
  const handleDelete = (id) => {
     httpConfig(id, "DELETE")
  }

  return (
    <div>
      <button onClick={()=> handleNavigate()}>Cadastrar</button>
      <table>
        <thead>
          <tr>
            <th>
              Placa
            </th>
            <th>
              Modelo
            </th>
            <th>
              Marca
            </th>
          </tr>
        </thead>
        <tbody>
            
              {automoveis && automoveis.map((automovel)=>
              <tr key={automovel.id}>
                <td>{automovel.Placa}</td>
                <td>{automovel.Modelo}</td>
                <td>{automovel.Marca}</td>
                <td><button onClick={()=>handleDelete(automovel.id)}>Remover</button></td>
              </tr>
               )}
        </tbody>
      </table>
    </div>
  )
}

export default List