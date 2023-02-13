export default function TextInput({ inputType, inputPlaceholder, formData, title, setFormData }) {
  const updateFormEmail = (e) => {
    setFormData({ ...formData, email: e.target.value })
  }

  const updateFormBudget = (e) => {
    const buttons = document.querySelectorAll('.btn-group.select .btn');
    buttons.forEach(button => button.classList.remove('active'));


    e.target.classList.add('active')

    setFormData({ ...formData, budget: e.target.innerHTML })
  }


  const updateFormQuestion = (e) => {
    setFormData({ ...formData, question: e.target.value })
  }



  if (title === `Apply to work with our agency`) {
    return (
      <>
        <input type={inputType} placeholder={inputPlaceholder && inputPlaceholder} onChange={updateFormEmail} />
      </>
    )
  } else if (title === 'Anything else we should know?') {
    return (
      <>
        <input onChange={updateFormQuestion} type={inputType} />
      </>
    )
  } else if (title === `What's your budget?`) {
    return (
      <div className="btn-group select">
        <button onClick={updateFormBudget} className="btn">$2k</button>
        <button onClick={updateFormBudget} className="btn">$5k</button>
        <button onClick={updateFormBudget} className="btn">No Limit</button>
      </div>
    )
  }

}