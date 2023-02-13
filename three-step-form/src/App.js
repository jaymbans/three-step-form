import './style.css'
import { useState } from 'react';

// component import
import LeftContainer from './components/LeftContainer';
import RightImage from './components/RightImage';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    budget: null,
    question: ''
  })

  const [stage, setStage] = useState(0);

  const STAGE_CONTENT = [
    {
      title: 'Apply to work with our agency',
      inputType: 'text',
      inputPlaceholder: `What's your email?`,
      imgUrl: 'https://assets.codepen.io/6060109/form-stage-1.png'
    },
    {
      title: `What's your budget?`,
      inputType: 'button',
      imgUrl: 'https://assets.codepen.io/6060109/form-stage-2.png'
    },
    {
      title: 'Anything else we should know?',
      inputType: 'text',
      imgUrl: 'https://assets.codepen.io/6060109/form-stage-3.png'
    },
    {
      title: 'Thank you!',
      inputType: null,
      imgUrl: 'https://assets.codepen.io/6060109/form-stage-4.png'
    },
  ]

  return (
    <div className="App">
      <main>
        <LeftContainer
          setStage={setStage}
          stage={stage}
          title={STAGE_CONTENT[stage].title}
          inputType={STAGE_CONTENT[stage].inputType}
          inputPlaceholder={STAGE_CONTENT[stage].inputPlaceholder}
          formData={formData}
          setFormData={setFormData} />
        <RightImage imgUrl={STAGE_CONTENT[stage].imgUrl} />
      </main>
    </div>
  );
}

export default App;
