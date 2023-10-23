const Form = (props) => {
  const { handleFormSubmit, onChangeValue } = props;

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input placeholder="Enter task ..." onChange={onChangeValue} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
