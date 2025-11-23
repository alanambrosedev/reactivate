import { useContext } from "react";
import CountContext from "../contexts/countContext";

export default function useCount() {
  return useContext(CountContext);
}
