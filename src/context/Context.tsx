import React, { useState } from "react";

interface Data {
  numberOfEquation: number;
  setNumberOfEquation: React.Dispatch<React.SetStateAction<number>>;
}

const Context = React.createContext<Data>({} as Data);

export const ContextMatrixProvider = (props: any) => {
  const [numberOfEquation, setNumberOfEquation] = useState(0);

  return (
    <Context.Provider value={{ numberOfEquation, setNumberOfEquation }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextMatrixProvider;

export const useMatrixContext = () => React.useContext(Context);
