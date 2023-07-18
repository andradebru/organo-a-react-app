import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [pessoas, setPessoas] = useState([]) 
  
  const aNovaPessoaCadastrada = (pessoa) => {
    console.log(pessoa)
    setPessoas([...pessoas, pessoa])
  }
 
  return (
    <div className="App">
      <Banner />
      <Form aPessoaCadastrada={pessoa => aNovaPessoaCadastrada(pessoa)} />
    </div>
  );
}

export default App;
