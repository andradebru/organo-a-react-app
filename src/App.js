import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer'

function App() {

  const teams = [
    {
      nome: 'Time 1',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Time 2',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8f8ff',
    },
    {
      nome: 'Time 3',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'Time 4',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },
  ]

  const [pessoas, setPessoas] = useState([]) 
  
  const aNovaPessoaCadastrada = (pessoa) => {
    setPessoas([...pessoas, pessoa])
  }
 
  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.nome )} aPessoaCadastrada={pessoa => aNovaPessoaCadastrada(pessoa)} />
      {
        teams.map(team => <Team 
          key={team.nome} 
          nome={team.nome} 
          corPrimaria={team.corPrimaria}
          corSecundaria={team.corSecundaria}
          pessoas={pessoas.filter(pessoa => pessoa.team === team.nome)}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
