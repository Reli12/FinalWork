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
  calculateDet: VoidFunction;
}

const Context = React.createContext<Data>({} as Data);

export const ContextMatrixProvider = (props: any) => {
  const [numberOfEquation, setNumberOfEquation] = useState(0);
  let resault: number[] = [];
  let matrix: number[][] = [];

  const calculateDet = () => {
    //let a = det(matrix);
    //console.log(a + "det");
    // let inv = inverse(matrix);
    let inve = inv(matrix);
    for (let i = 0; i < numberOfEquation; i++) {
      for (let j = 0; j < numberOfEquation; j++) {
        console.log(inve[i][j] + `[${i}] [${j}] inv`);
      }
    }
    let FinalResault = MultyplayMatrix(inve, resault, numberOfEquation);
    //let FinalResault = multiply(inve, resault);
    //let i = 0;
    for (let i = 0; i < numberOfEquation; i++) {
      console.log(FinalResault[i] + `[${i}]`);
    }
  };
  return (
    <Context.Provider
      value={{
        matrix,
        resault,
        numberOfEquation,
        calculateDet,
        setNumberOfEquation,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextMatrixProvider;

export const useMatrixContext = () => React.useContext(Context);
