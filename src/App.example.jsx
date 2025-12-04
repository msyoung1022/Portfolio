import profileImg from './assets/profile.jpg';
import './devlog.css';

function App() {
  return (
    <div className="devlog-root">
      <div className="Innovator">Maati | CTO</div>
      
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="https://www.gmail.com">Gmail</a></li>
        </ul> 
      </nav>

      <div className="layout">
        <aside className="sidebar">
          {/* Replace with your actual image path */}
          <img src={profileImg} alt="Profile" className="profile-img" />
          <section>
            <h2>About Me</h2>
            <p>
              Hello, Black girl in Tech here! #BlackGirlsCodeToo 
            </p>
          </section>
        </aside>

        <main className="main-content">
          <h2 className="main-title">My DevLog</h2>
          {/* Content for logs */}
          <div className="container">
            <div id="DEV-LOG">
              <h1>Welcome to my development log</h1>
              <p>Date: 2025-09-10</p>
            </div>
          </div>
          <h3>Entry number 1</h3>
        </main>
      </div>
    </div>
  )
}

export default App