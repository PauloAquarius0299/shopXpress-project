import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/utils/theme";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage";
import SignPage from "./pages/SigninPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage /> } />
          <Route path='/register' element={<RegisterPage /> } />
          <Route path='/signin' element={<SignPage /> } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
