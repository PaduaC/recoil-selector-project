// Atoms split the state into separate pieces
// The global state is stored here
import { atom } from "recoil";

export const inputState = atom({
  key: "inputState",
  default: "#ffffff",
});
