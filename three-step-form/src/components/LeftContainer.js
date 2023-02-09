import TextInput from './TextInput';
import ButtonGroup from './ButtonGroup';
import { useState } from 'react'

export default function LeftContainer({ stage, setStage }) {

  const [stageContent, setStageContent] = useState([
    {
      title: 'Apply to work with our agency',
      inputType: 'text'
    },
    {
      title: `What's your budget?`,
      inputType: 'radio'
    },
    {
      title: 'Anything else we should know?',
      inputType: 'text'
    },
  ])

  return (
    <div className="container">
      <div>
        <h1>Stage #{stage}</h1>
        <TextInput />
        <ButtonGroup stage={stage} setStage={setStage} />
      </div>
    </div>
  )
}