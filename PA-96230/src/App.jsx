import React,{useState, UseState} from 'react';
import "./App.css";

export default function CadastroFilmes() {
  const[titulo,setTitulo]=useState('');
  const[ano,setAno]=useState('');
  const[filmes,setFilmes]=useState([]);


const AdicionarFilme=(e)=>{
  e.preventDefault();
  if(titulo===''||ano===''){
    alert("Preencha todos os campos");
    return;
  }
  const novoFilme={titulo,ano};
  setFilmes([...filmes,novoFilme]);
  setTitulo('');
  setAno('');
  alert("Filme adicionado com sucesso");
};
  return (
    <div className ="container">
      <h1>Cadastro de Filmes</h1>
      <form className="form" 
      onSubmit={AdicionarFilme}>
      <input
      type="text"
      placeholder="Ano de lançamento"
      value={ano}
      onChange={(e)=>setAno(e.target.value)}
      ClassName ="input"
      />
      <input
      type="number"
      placeholder="Ano de lançamento"
      value={ano}
      onChange={(e)=>setAno(e.target.value)}
      ClassName ="input"
      />
      <button type="submit" className="button">
        Adicionar Filme
      </button>
      </form>
      <h2>Filmes Cadastrados</h2>
      <ul className="filme-lista">
        {filmes.map((filme,index)=>(
          <li key={index} className="filme-item">
            {filme.titulo} - {filme.ano}
          </li>
        ))}
      </ul>
    </div>
  );
}   
