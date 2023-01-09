import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const { searchTerm } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
    console.log(searchTerm);
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label" htmlFor="">
          Search
        </label>
        <input
          value={searchTerm}
          onChange={handleSearchChange}
          type="text"
          placeholder="search"
        />
      </div>
    </div>
  );
}

export default CarSearch;
