import './style.css'


import Header from './components/Header/Header/Header.js';
import HeroSection from './components/HeroSection/HeroSection.js';
import Novedades from './components/Novedades/Novedades.js';
import Slider from './components/Slider/Slider.js';
import Gallery from './components/Gallery/Gallery.js';
import KingsLeague from './components/KingsLeague/KingsLeague.js';
import Footer from './components/Footer/Footer.js';

// Función para renderizar los componentes en el DOM
const renderApp = () => {
  const app = document.getElementById('app'); // Contenedor principal

  // Renderizar cada componente en orden
  app.innerHTML = `
    ${Header()}
    ${HeroSection()}
    ${Novedades()}
    ${Slider()}
    ${Gallery()}
    ${KingsLeague()}
    ${Footer()}
  `;
};

// Llamar a la función de renderizado al cargar la página
document.addEventListener('DOMContentLoaded', renderApp);
