import { useMatrixContext } from "../../context/Context";
import Input from "../Atoms/Input";

const Table = () => {
  const { numberOfEquation } = useMatrixContext();
  let array = new Array(numberOfEquation);
  for (let i = 0; i < numberOfEquation; i++) {
    array[i] = i;
  }
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const HandleSumbit = () => {
    let matrix: number[][] = [];
    let resault: number[] = [];
    let d: string;
    for (let i = 0; i < numberOfEquation; i++) {
      matrix[i] = [];
      for (let j = 0; j < numberOfEquation; j++) {
        const input = document.getElementById(`${i},${j}`) as HTMLInputElement;
        d = input.value;

        if (d == "") {
          matrix[i][j] = 0;
        } else {
          matrix[i][j] = parseFloat(d);
        }
        console.log(matrix[i][j]);
      }
    }
    //geting resault of each matrix
    for (let i = 0; i < numberOfEquation; i++) {
      const input = document.getElementById(`Resault${i}`) as HTMLInputElement;
      d = input.value;

      if (d == "") {
        resault[i] = 0;
      } else {
        resault[i] = parseFloat(d);
      }
      // console.log(resault[i] + "Resault");
    }
  };
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              {array.map((el, i) => (
                <>
                  <th>{alphabet[i]}</th>
                  {i == numberOfEquation - 1 && <th>Resaults</th>}
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {array.map((el, i) => (
              <tr>
                {array.map((el, j) => (
                  <th>
                    <Input key={`${i}${j}`} Id={`${i},${j}`} />
                  </th>
                ))}
                <th>
                  <Input key={`${i}+Resault`} Id={`Resault${i}`} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={HandleSumbit}>Sumbit values</button>
    </>
  );
};

export default Table;
