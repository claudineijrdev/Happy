import React from 'react';
import './styles/global.css'
import Routes from './routes'
import 'leaflet/dist/leaflet.css'
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
