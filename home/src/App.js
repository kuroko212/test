import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterView from './router/RouterView';
import routes from './router/routes'
import './css/index.scss'
import './mock/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterView routes={routes}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
