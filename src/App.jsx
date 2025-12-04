import profileImg from './assets/getsitelogo.png';
import './App.css';
import LogCard from './components/LogCard';

function App() {
  return (
   <>
<div className="Innovator">Maati | CTO</div>
<nav className="navbar">
    <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="https://www.gmail.com">Gmail</a></li>
</ul> 
</nav>
  

<aside className="sidebar">
<img src={profileImg} alt="Profile" />
<section>
    <h2>About Me</h2>
<p>
    Hello, Black girl in Tech here! #BlackGirlsCodeToo 
</p>
</section>
</aside>
<main className="main-content">
<h2 className="main-title">My DevLog</h2>
{/* to populate the logs */}
<LogCard date="2025-09-10" entryNumber={1}>
    <h1>Welcome to my development log</h1>
    <p>This is the first entry in my devlog where I will document my journey as a developer.</p>
</LogCard>
<LogCard date="2025-11-03" entryNumber={2}>
    <h1>This is my second log</h1>
    <p>This is the second entry in my devlog where I will document my journey as a developer.</p>
</LogCard>
</main>

    </>
  )
}

export default App
