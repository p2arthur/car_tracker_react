import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  //Selector functions to get access to the state of carName and carCost
  const { name, cost } = useSelector((state) => state.form);
  const { carsList } = useSelector((state) => state.cars);

  //Setting the dispatch func
  const dispatch = useDispatch();
  //Handle the name input change
  const handleNameChange = (event) => {
    console.log(name);
    dispatch(changeName(event.target.value));
  };

  //Handle the cost input change
  const handleCostChange = (event) => {
    console.log(cost);
    dispatch(changeCost(+event.target.value || 0));
  };

  //Handle the submission of the form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
    console.log(carsList);
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Burron</h4>
      <form onSubmit={handleFormSubmit} className="" action="">
        <div className="field-group">
          <div className="field">
            <label htmlFor="nameInput" className="label">
              Name
            </label>
            <input
              value={name}
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
              value={cost || ""}
              onChange={handleCostChange}
              id="costInput"
              className="input is-expanded"
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
