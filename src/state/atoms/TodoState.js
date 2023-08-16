// Atom within recoil is a single unit of state.
// Different component can use these atoms i.e. subscribing to these atoms.
// When the state updates i.e the atom updates and the components as well updates that is subscribed to the state.
// If component C1 is subscribed to atom A1 and atom A2 updates the compoent C1 doesnt gets rerendered.

// To create a atom we have to give a key and default state.
import { atom } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});
