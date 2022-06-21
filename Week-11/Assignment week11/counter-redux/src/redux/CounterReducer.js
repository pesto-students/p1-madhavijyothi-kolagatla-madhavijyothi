import { INC, RES } from "./CounterTypes";

const counter = 0;

const CountReducer = (state = counter, action) => {
  switch (action.type) {
    case INC:
      return state + 1;
    case RES:
      return (state = 0);
    default:
      return state;
  }
};
export default CountReducer;
