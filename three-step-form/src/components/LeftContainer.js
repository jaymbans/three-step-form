import TextInput from './TextInput';
import ButtonGroup from './ButtonGroup';

export default function LeftContainer({ stage, setStage, title, inputType, inputPlaceholder }) {



  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
        <TextInput inputType={inputType} inputPlaceholder={inputPlaceholder} stage={stage} />
        <ButtonGroup stage={stage} setStage={setStage} />
      </div>
    </div>
  )
}