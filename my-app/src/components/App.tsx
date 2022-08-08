import React from 'react';
import logo from './logo.svg';
// import './App.css';
// import UserSearch from './UserSearch';
import { store} from '../state/index';
import { Provider } from 'react-redux';
import RepositoriesList from './RepositoriesList';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Search For a Package</h1>
        <RepositoriesList/>
      </div>
    </Provider>
  );
}

export default App;
