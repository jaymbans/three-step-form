
export default function ButtonGroup({ stage, setStage, formData }) {

  const increaseStage = () => {
    if (stage === 3) return;

    setStage(stage + 1)
    if (stage === 2) {
      alert(formData.email + ' ' + formData.budget + ' ' + formData.question)
    }
    return;
  }

  const decreaseStage = () => {
    if (stage === 0) return;

    return setStage(stage - 1)
  }



  if (stage < 3) {
    return (
      <div className="btn-group navigation">
        {stage !== 0 && <button className="btn active" onClick={decreaseStage}>Prev</button>}
        <button className="btn active" onClick={increaseStage}>Next</button>
      </div>
    )
  }
}