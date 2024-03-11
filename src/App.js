import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}> COUNTER : {count}</div>
      <div style={{ display: 'flex', justifyContent: 'center', columnGap: '10px' }}>
        <button type="button" onClick={() => setCount(count + 1)} > +1 </button>
        <button type="button" onClick={() => setCount(count - 1)}> -1 </button>
      </div>
    </div>
  );
}

export default App;
