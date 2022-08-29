import create from "zustand"
import inverse from "../functions/MatrixInverse"
import MultyplayMatrix from "../functions/MatrixMultiplay"


interface Store {
    inverse:any
    finalResault:any
    setInverse: (matrix:any) => void 
    flag: number
    setFlag: (flag: number) => void
    setFinalResault:(InversMat: any, ResaultMat: any, equationNum: number)=>void
}


const useStore = create<Store>((set) => ({
    inverse: [] as any,
    flag:0,
    finalResault:[]as any,
    setInverse:(matrix:any)=>{
        set({inverse:inverse(matrix)})
    },
    setFlag(flag) {
        set({flag:flag})
    },
    setFinalResault(InversMat, ResaultMat, equationNum) {
        set({finalResault: MultyplayMatrix(InversMat, ResaultMat, equationNum)})
    },
}))

export default useStore