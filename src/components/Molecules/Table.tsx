import { useMatrixContext } from "../../context/Context";
import Input from "../Atoms/Input";

const Table = () => {
  const { numberOfEquation, resault, matrix, calculateDet } =
    useMatrixContext();

  let array = new Array(numberOfEquation);
  for (let i = 0; i < numberOfEquation; i++) {
    array[i] = i;
  }

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const HandleSumbit = () => {
    let d: string;
    for (let i = 0; i < numberOfEquation; i++) {
      matrix[i] = [];
      for (let j = 0; j < numberOfEquation; j++) {
        const input = document.getElementById(`${i},${j}`) as HTMLInputElement;
        d = input.value;

        if (d === "") {
          matrix[i][j] = 0;
        } else {
          matrix[i][j] = parseFloat(d);
        }
        console.log(matrix[i][j]);
      }
    }
    let i = 0;
    for (let j = 0; j < numberOfEquation; j++) {
      const input = document.getElementById(`Resault${j}`) as HTMLInputElement;
      d = input.value;
      console.log(d + "da");
      if (d == "") {
        resault[j] = 0;
      } else {
        resault[j] = parseFloat(d);
        console.log(resault[j] + "inside giving value");
      }
      console.log(resault[j] + "res");
      i++;
    }
    console.log(resault.length + "len");
    calculateDet();
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
                  {i === numberOfEquation - 1 && <th>Resaults</th>}
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
