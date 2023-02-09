export default function TextInput({ inputType, inputPlaceholder }) {
  if (inputType === 'text') {
    return (
      <>
        <input type={inputType} placeholder={inputPlaceholder && inputPlaceholder} />
      </>
    )
  } else if (inputType === 'button') {
    return (
      <div className="btn-group select">
        <button className="btn">$2k</button>
        <button className="btn">$5k</button>
        <button className="btn active">No Limit</button>
      </div>
    )
  }

}