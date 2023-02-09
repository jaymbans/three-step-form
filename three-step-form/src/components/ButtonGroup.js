
export default function ButtonGroup({ stage, setStage }) {

  const increaseStage = () => {
    if (stage === 2) return;

    return setStage(stage + 1)
  }

  const decreaseStage = () => {
    if (stage === 0) return;

    return setStage(stage - 1)
  }



  return (
    <div className="btn-group">
      <button className="btn active" onClick={decreaseStage}>Prev</button>
      <button className="btn active" onClick={increaseStage}>Next</button>
    </div>
  )
}