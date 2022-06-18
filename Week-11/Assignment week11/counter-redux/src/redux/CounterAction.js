import { INC, RES } from "./CounterTypes";
export const Increment = () => {
  return {
    type: INC
  };
};
export const Reset = () => {
  return {
    type: RES
  };
};
