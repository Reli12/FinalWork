import React, { useState } from "react";

interface Data {
  numberOfEquation: number;
  setNumberOfEquation: React.Dispatch<React.SetStateAction<number>>;
}
const Fun = () => {
  console.log("gggg");
};

const Context = React.createContext<Data>({} as Data);

export const ContextMatrixProvider = (props: any) => {
  const [numberOfEquation, setNumberOfEquation] = useState(0);
  if (numberOfEquation > 1) {
    Fun();
  }
  return (
    <Context.Provider value={{ numberOfEquation, setNumberOfEquation }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextMatrixProvider;

export const useMatrixContext = () => React.useContext(Context);
