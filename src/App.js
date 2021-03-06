import './styles/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import { PokemonScreen } from './components/screens/PokemonScreen';
import { PokemonAllScreen } from './components/screens/PokemonAllScreen';
import { MovimientosAllScreen } from './components/screens/MovimientosAllScreen';
import MovimientosScreen from './components/screens/MovimientoScreen';
import { Error504 } from './components/screens/Error504';
import { LoginScreen } from './components/screens/LoginScreen';
import { NewUserScreen } from './components/screens/NewUserScreen';
import {UsuariosAllScreen} from './components/screens/UsuariosAllScreen';
import {UsuarioScreen} from './components/screens/UsuarioScreen';
import { Footer } from './components/footer/Footer';
/* import Audio from "./components/audio/audio"; */



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/newUser" element={<NewUserScreen />} />
          <Route path="/users" element={<UsuariosAllScreen />} />
          <Route path="/users/:id" element={<UsuarioScreen />} />
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<PokemonAllScreen />} />
          <Route path='/pokemon/:id' element={<PokemonScreen />} />
          <Route path="/moves" element={<MovimientosAllScreen />} />
          <Route path="/moves/:id" element={<MovimientosScreen />} />
          <Route path="*" element={<Error504 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
