import { HeaderContainer } from './components/header-container/header-container'
import { RegistrationForm } from './components/forms/registration-form';
import { SignInForm } from './components/forms/sign-in-form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductCard } from './components/card/product-card';
import { Container } from './components/container/content-container'
import { Search } from './components/search/search'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="register" element={<RegistrationForm />} />
        <Route path="sign-in" element={<SignInForm />} />
      </Routes>
    </div>
  );
}

export default App;
