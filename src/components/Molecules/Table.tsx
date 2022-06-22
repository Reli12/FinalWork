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
    let a: number[][] = [];
    let d: string;
    for (let i = 0; i < numberOfEquation; i++) {
      a[i] = [];
      for (let j = 0; j < numberOfEquation; j++) {
        const input = document.getElementById(`${i},${j}`) as HTMLInputElement;
        d = input.value;
        console.log(d);
        if (d == "") {
          a[i][j] = 0;
        } else {
          a[i][j] = parseFloat(d);
        }
      }
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
