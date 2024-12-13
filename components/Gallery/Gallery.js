const Gallery = () => `
  <section id="gallery" class="gallery">
    <h2>Momentos CUPRA</h2>
    <div class="gallery-carousel">
      <div class="gallery-item">
        <video autoplay loop muted>
          <source src="/gallery-video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="gallery-item">
        <img src="/gallery-image1.jpg" alt="Gallery 1" />
      </div>
      <div class="gallery-item">
        <video autoplay loop muted>
          <source src="/gallery-video2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
`;

export default Gallery;
