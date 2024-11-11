import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './app/components/loginPage';
import SignUp from './app/components/signUp';
import view from './app/view';
import Animated from './app/components/animated';
import ParticlesBackground from './app/components/particlesPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define each route with path and element */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/view" element={<view />} />
        {/* <Route path="/" element={<Animated />} /> */}
        {/* <Route path="/" element={<ParticlesBackground />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
