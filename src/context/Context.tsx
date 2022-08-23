import { inv, multiply } from "mathjs";
import React, { useState } from "react";
import det from "../functions/matrixDeterminant";
import inverse from "../functions/MatrixInverse";
import MultyplayMatrix from "../functions/MatrixMultiplay";

interface Data {
  numberOfEquation: number;
  setNumberOfEquation: React.Dispatch<React.SetStateAction<number>>;
  resault: number[];
  matrix: number[][];
  Calculate: VoidFunction;
  FinalResault: number[];
  flag: number;
}

const Context = React.createContext<Data>({} as Data);

export const ContextMatrixProvider = (props: any) => {
  const [numberOfEquation, setNumberOfEquation] = useState(0);
  const [flag, setflag] = useState(0);
  let resault: number[] = [];
  let matrix: number[][] = [];
  const [FinalResault, setFinalResault] = useState([] as number[]);

  const Calculate = () => {
    let a = det(matrix);
    console.log(a + "det");
    // let inv = inverse(matrix);
    setflag(-1);
    if (a == 0) {
      setflag(-1);
    } else {
      let inve = inv(matrix);

      let finalResault = MultyplayMatrix(inve, resault, numberOfEquation);
      setflag(1);
      //let FinalResault = multiply(inve, resault);
      //let i = 0;
      for (let i = 0; i < numberOfEquation; i++) {
        FinalResault.push(finalResault[i]);
      }
    }
  };
  return (
    <Context.Provider
      value={{
        matrix,
        resault,
        numberOfEquation,
        Calculate,
        setNumberOfEquation,
        FinalResault,
        flag,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextMatrixProvider;

export const useMatrixContext = () => React.useContext(Context);
