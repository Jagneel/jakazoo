import { createContext } from "react";

export const countContext = createContext<number | React.SetStateAction<number>>(0);

export const cartContext = createContext([])