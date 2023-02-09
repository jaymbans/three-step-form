import './style.css'
import { useState } from 'react';

// component import
import LeftContainer from './components/LeftContainer';
import RightImage from './components/RightImage';

function App() {
  const [stage, setStage] = useState(0);



  return (
    <div className="App">
      <main>
        <LeftContainer setStage={setStage} stage={stage} />
        <RightImage />
      </main>
    </div>
  );
}

export default App;
