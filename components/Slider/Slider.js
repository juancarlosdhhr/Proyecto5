import "./Slider.css";

const Slider = () => `
  <section id="slider" class="slider">
    <h2>Modelos Destacados</h2>
    <div class="slider-container">
      <div class="slider-item" onclick="location.href='/modelo-a.html'">
        <img src="/modelo-a.jpg" alt="Modelo A" />
        <p>Modelo A</p>
      </div>
      <div class="slider-item" onclick="location.href='/modelo-b.html'">
        <img src="/modelo-b.jpg" alt="Modelo B" />
        <p>Modelo B</p>
      </div>
      <div class="slider-item" onclick="location.href='/modelo-c.html'">
        <img src="/modelo-c.jpg" alt="Modelo C" />
        <p>Modelo C</p>
      </div>
    </div>
  </section>
`;

export default Slider;