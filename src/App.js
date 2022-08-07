import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import styles from './App.module.css';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
}

export default App;