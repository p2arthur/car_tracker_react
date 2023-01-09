import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  //Destructuring the carsList and searchTerm from the cars state
  const { cars, name } = useSelector(
    ({ cars: { carsList, searchTerm }, form }) => {
      //Filtering the carsList to return only the car.name that contains the search term - Only those will be displayed on the list
      const filteredCars = carsList.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return { cars: filteredCars, name: form.name };
    }
  );
  const dispatch = useDispatch();

  //Function to dispatch the removeCar action
  const handleDeleteCar = (car) => {
    console.log(car);
    dispatch(removeCar(car));
  };

  //Rendered cars map to display the filtered cars from the carsList
  const renderedCars = cars.map((car) => {
    //Logic to decide if the car name should be bold

    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p className="">
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleDeleteCar(car.id)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
export default CarList;
