import "./styles.css";
import { connect } from "react-redux";
import { Increment, Reset } from "../redux/CounterAction";

function StepCounter(props) {
  return (
    <div>
      <h1>You've walked {props.counter} steps today!</h1>
      <div class="handler">
        <button id="Add" onClick={props.Inc}>
          Add a Step
        </button>
        <button id="Reset" onClick={props.Res}>
          Reset Steps
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state
  };
};
// console.log({ Increment });

const mapDispatchToProps = (dispatch) => {
  console.log({ Increment });
  return {
    Inc: () => dispatch(Increment()),
    Res: () => dispatch(Reset())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StepCounter);
