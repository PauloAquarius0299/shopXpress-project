import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/utils/theme";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage";
import SignPage from "./pages/SigninPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./features/auth/components/PrivateRoute";

import { store} from './store';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute page={<HomePage />} /> } />
          <Route path='/register' element={<RegisterPage /> } />
          <Route path='/signin' element={<SignPage /> } />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

type CypressWindow = Window & typeof globalThis & { Cypress: any, store: any};

const thisWindow = window as CypressWindow;
const w = window;

if (thisWindow.Cypress) {
  console.log('CYPRESS WINDOW');

  thisWindow.store = store;
}

export default App;
