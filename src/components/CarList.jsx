import { useSelector } from "react-redux";

function CarList() {
  const { carsList } = useSelector((state) => state.cars);

  const renderedCars = carsList.map((car) => (
    <div key={car.id}>
      {car.name} - {car.cost}
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
