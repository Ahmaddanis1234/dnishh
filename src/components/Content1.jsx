// src/components/Content1.js
import image from '../assets/R.gif';
import '../styles/content1.css';

function Content1() {
  return (
    <div className="container">
      <img src={image} alt="Background" className="background-image" />
      <h1 className="centered-text">The Lamborghini Aventador</h1>
    </div>
  );
}

export default Content1;
