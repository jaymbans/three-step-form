import TextInput from './TextInput';
import ButtonGroup from './ButtonGroup';

export default function LeftContainer({ stage, setStage, title, inputType, inputPlaceholder, formData, setFormData }) {

  return (
    <div className="container">
      <div>
        <h1>{title}</h1>
        <TextInput formData={formData} inputType={inputType} inputPlaceholder={inputPlaceholder} stage={stage} title={title}
          setFormData={setFormData} />
        <ButtonGroup stage={stage} setStage={setStage} formData={formData} />
      </div>
    </div>
  )
}