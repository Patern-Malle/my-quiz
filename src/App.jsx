import "./App.css";
import Quiz from "./Quiz";
import { jsQuizz } from "./constants.js";

function App() {
	return <Quiz questions={jsQuizz.questions} />;
}

export default App;
