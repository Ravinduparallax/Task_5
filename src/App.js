import './App.css';
//import Api from './component/Api';
import Body from './component/Body';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/Dashboard';



function App() {  
  return (
    <div>
      <Header/>
      <Dashboard />
      <Body/>
    </div>
  );
}

export default App;
