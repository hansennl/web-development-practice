import './App.css';

function Greeting(){
  return <h1>Hello World!</h1>;
}

function Card(){
  return (
    <div className="card-box" style={{border: '1px solid #aaa', padding: '15px', marginBottom: '10px', borderRadius: '6px',}}>
      <h2>Card component header</h2>
      <p>This is a reusable card element generated inside React</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Greeting />

      <hr style={{ margin: '20px 0' }} />

      <h3>Rendering 3 Card Components:</h3>

      <Card />
      <Card />
      <Card />
    </div>
  );
}