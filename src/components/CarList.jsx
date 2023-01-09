import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  //Destructuring the carsList and searchTerm from the cars state
  const cars = useSelector(({ cars: { carsList, searchTerm } }) =>
    //Filtering the carsList to return only the car.name that contains the search term - Only those will be displayed on the list
    carsList.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const dispatch = useDispatch();

  //Function to dispatch the removeCar action
  const handleDeleteCar = (car) => {
    console.log(car);
    dispatch(removeCar(car));
  };

  //Rendered cars map to display the filtered cars from the carsList
  const renderedCars = cars.map((car) => (
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
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
export default CarList;
