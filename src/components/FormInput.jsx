const FormInput = (props) => {
  return(
    <main>
      <h1>Form Input</h1>

      <input type="text" onChange={event => props.updateFormData(event.target.value)}/>
    </main>
  );
};

export default FormInput;