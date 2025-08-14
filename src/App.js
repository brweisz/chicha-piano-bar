import './App.css';

function App() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Chicha Piano Bar</h1>
          <p>Cenas Show · Experiencia Musical Participativa</p>
          <a href="mailto:reservas@chichapianobar.com.ar" className="btn">
            Reservá tu Mesa
          </a>
        </div>
      </section>

      {/* SECCIÓN DESCRIPCIÓN */}
      <section>
        <h2>Una Noche Diferente</h2>
        <p>
          Chicha Piano Bar es un espacio donde la música, la gastronomía y el público se fusionan.
          Disfrutá de una cena show íntima, con un piano en el centro de la escena, y participá
          de la experiencia musical: podés cantar, elegir canciones o simplemente dejarte llevar.
        </p>
      </section>

      {/* SECCIÓN CÓMO FUNCIONA */}
      <section>
        <h2>Cómo Funciona</h2>
        <ul>
          <li>🎹 Reservás tu mesa.</li>
          <li>🍷 Elegís de nuestro menú gourmet.</li>
          <li>🎤 Vivís un show interactivo con músicos en vivo.</li>
          <li>✨ Vos decidís si ser espectador o protagonista.</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer>
        © 2025 Chicha Piano Bar ·{" "}
        <a href="https://instagram.com/chichapianobar" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </footer>
    </div>
  );
}

export default App;
