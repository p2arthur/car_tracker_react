import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
function App() {
  return (
    <div>
      <div>
        <CarForm />
      </div>
      <div>
        <CarList />
      </div>
      <div>
        <CarSearch />
      </div>
      <div>
        <CarValue />
      </div>
    </div>
  );
}

export default App;
