import { useSelector } from "react-redux";

function CarValue() {
  //Filtering the cars that have the cars that includes the search term - Derived State
  const totalCost = useSelector(({ cars: { carsList, searchTerm } }) =>
    carsList
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      //Using a reduce method to add the cost of them
      .reduce((accumulator, car) => accumulator + car.cost, 0)
  );

  return <div className="car-value">Total cost: ${totalCost}</div>;
}

export default CarValue;
