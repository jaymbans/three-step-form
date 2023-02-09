
export default function ButtonGroup({ stage, setStage }) {

  const increaseStage = () => {
    if (stage === 3) return;

    return setStage(stage + 1)
  }

  const decreaseStage = () => {
    if (stage === 0) return;

    return setStage(stage - 1)
  }


  if (stage < 3) {
    return (
      <div className="btn-group navigation">
        <button className="btn active" onClick={decreaseStage}>Prev</button>
        <button className="btn active" onClick={increaseStage}>Next</button>
      </div>
    )
  }
}