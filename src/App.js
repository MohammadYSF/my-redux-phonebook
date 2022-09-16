import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { PeopleList } from './state-management/components/people/peopleList';
import { NewPerson } from './state-management/components/people/newPerson';
function App() {
  return (
    <div className="App">
      <div className='container'>
          <h1>My small phone book using React & Redux</h1>
          <PeopleList />
          <NewPerson />
      </div>
    </div>
  );
}

export default App;
