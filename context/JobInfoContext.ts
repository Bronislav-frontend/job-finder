import { createContext } from "react";
import { IContext } from "../interfaces/interfaces";

const JobInfoContext = createContext<IContext | null>(null);

export default JobInfoContext;
