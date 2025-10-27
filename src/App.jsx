body {
  background-color: #fdfdfd;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.game-container {
  text-align: center;
  max-width: 600px;
}

.title {
  font-size: 2rem;
  margin-bottom: 0.2rem;
}

.subtitle {
  font-size: 1rem;
  font-style: italic;
  color: #666;
  margin-bottom: 2rem;
}

.graph {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto 1.5rem;
  border: 1px solid transparent;
}

.axis {
  position: absolute;
}

.x-axis {
  width: 100%;
  height: 1px;
  background: black;
  top: 50%;
  left: 0;
}

.y-axis {
  height: 100%;
  width: 1px;
  background: red;
  left: 50%;
  top: 0;
}

.axis-label {
  position: absolute;
  font-size: 0.8rem;
  color: #333;
}

.x-label {
  right: 0;
  top: 55%;
}

.y-label {
  top: 0;
  left: 55%;
  color: red;
}

.parabola {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.letter-boxes {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 4px;
}

.letter-box {
  width: 25px;
  height: 30px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: #fafafa;
}

.input-section {
  margin-top: 1rem;
}

input {
  padding: 6px 10px;
  font-size: 1rem;
  border: 1px solid #999;
  border-radius: 6px;
  width: 200px;
}

button {
  padding: 6px 12px;
  margin-left: 8px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

.message {
  margin-top: 0.8rem;
  font-weight: 500;
}
