import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React State & useState Practice</h1>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px', padding: '6px 12px', cursor: 'pointer' }}>
          Increment(+1)
        </button>
        <button onClick={() => setCount(count - 1)} style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Decrement(-1)
        </button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
        <button onClick={() => setIsVisible(!isVisible)} style={{ padding: '6px 12px', marginBottom: '10px', cursor: 'pointer' }}>
          {isVisible ? 'Hide Paragraph' : 'Show Paragraph'}
        </button>
        {isVisible && <p>This paragraph can be toggled on and off using boolean state!</p>}
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px' }}>
        <h2>Live Text Preview</h2>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Type something here..."
          style={{ padding: '8px', width: '100%', maxWidth: '300px', marginBottom: '10px', textAlign: 'center', }}
        />
        <p><strong>Current Value:</strong> {text}</p>
      </div>
    </div>
  );
}