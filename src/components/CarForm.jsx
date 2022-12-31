import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost } from "../store";

function CarForm() {
  const nameInput = useSelector((state) => state.form.name);
  const costInput = useSelector((state) => state.form.cost);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    console.log(nameInput);

    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    console.log(costInput);
    dispatch(changeCost(+event.target.value));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Burron</h4>
      <form className="" action="">
        <div className="field-group">
          <div className="field">
            <label htmlFor="nameInput" className="label">
              Name
            </label>
            <input
              value={nameInput}
              onChange={handleNameChange}
              id="nameInput"
              className="input is-expanded"
              type="text"
            />
          </div>
          <div className="field">
            <label htmlFor="costInput" className="label">
              Cost
            </label>
            <input
              value={costInput}
              onChange={handleCostChange}
              id="costInput"
              className="input is-expanded"
              type="number"
            />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CarForm;
