import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const { carsList } = useSelector((state) => state.cars);

  const dispatch = useDispatch();

  const handleDeleteCar = (car) => {
    console.log(car);
    dispatch(removeCar(car));
  };

  const renderedCars = carsList.map((car) => (
    <div key={car.id} className="panel">
      <p>
        {car.name} - ${car.cost}
      </p>
      <button
        onClick={() => handleDeleteCar(car.id)}
        className="button is-danger"
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div>
      <div>CarList</div>
      {renderedCars}
    </div>
  );
}
export default CarList;
