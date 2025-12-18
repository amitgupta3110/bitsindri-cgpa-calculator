import { useState } from "react";
import "./App.css";

function App() {
  const credits = [22, 22, 20, 21, 24, 22, 20, 8];
  const [sgpa, setSgpa] = useState(Array(8).fill(""));
  const [cgpa, setCgpa] = useState(null);

  const handleChange = (index, value) => {
    const updated = [...sgpa];
    updated[index] = value;
    setSgpa(updated);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let weightedSum = 0;

    sgpa.forEach((val, i) => {
      if (val !== "" && !isNaN(val)) {
        weightedSum += parseFloat(val) * credits[i];
        totalCredits += credits[i];
      }
    });

    if (totalCredits > 0) {
      setCgpa((weightedSum / totalCredits).toFixed(2));
    }
  };

  const clearData = () => {
    setSgpa(Array(8).fill(""));
    setCgpa(null);
  };

  return (
    <div className="page">
      <div className="app">
        {/* Header */}
        <header className="header">
          <div className="logo-bar">
            <img src="/ees-logo.png" alt="EES BIT Sindri" />
            <img src="/bit-sindri-logo.png" alt="BIT Sindri" />
          </div>
          <h1 className="title">CGPA TRACKER</h1>
          <p className="subtitle">
            Presented by the Electrical Engineering Society, BIT Sindri
          </p>
        </header>

        {/* Form */}
        <section className="form-section">
          <div className="form-row">
            <label>Registration No.</label>
            <input type="text" />
          </div>

          <div className="form-row">
            <label>Batch</label>
            <select>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>

          <div className="form-row">
            <label>Branch</label>
            <select>
              <option>Electrical Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Civil Engineering</option>
              <option>Electronics & Communication Engineering</option>
              <option>Computer Science & Engineering</option>
              <option>Information Technology</option>
              <option>Chemical Engineering</option>
              <option>Metallurgical Engineering</option>
              <option>Mining Engineering</option>
              <option>Production Engineering</option>
            </select>
          </div>
        </section>

        {/* Table */}
        <section className="table-container">
          <div className="table-header">
            <span>Semester</span>
            <span>SGPA</span>
            <span>Credits</span>
          </div>

          {credits.map((credit, index) => (
            <div className="table-row" key={index}>
              <span className="semester-cell">{index + 1}</span>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={sgpa[index]}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              <input type="text" value={credit} readOnly style={{color:"darkgreen"}}/>
            </div>
          ))}
        </section>

        {/* CGPA */}
        {cgpa && (
          <div className="cgpa-box">
            <span>Calculated CGPA</span>
            <strong>{cgpa}</strong>
          </div>
        )}

        {/* Buttons */}
        <div className="btn-group">
          <button className="primary" onClick={calculateCGPA}>
            Calculate CGPA
          </button>
          <button className="secondary" onClick={clearData}>
            Clear
          </button>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Electrical Engineering Society, BIT Sindri
          </p>
          <p>
            Designed & Developed by <span>Amit Gupta</span>, Electrical Engineering,
            Batch <span>2K23</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
