import Canvas from "./canvas";
import Costumizer from "./pages/Costumizer";
import Home from "./pages/Home";

function App() {
	return (
		<main className="app transition-all-ease-in">
			<Home />
			<Canvas />
			<Costumizer />
		</main>
	);
}

export default App;
