import "./styles.css";
import StepCounter from "./components/StepCounter";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <StepCounter />
      </div>
    </Provider>
  );
}
