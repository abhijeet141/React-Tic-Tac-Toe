import { useState, useEffect } from "react";
import {checkWinner} from '../utils/TicTacToeWinner'
import { checkDraw } from "../utils/TicTacToeDraw";
export function Board({size}){
    if(size == ""){
        return;
    }
    console.log(size);
    if(size>10){
        return <div className="text-white">Size must be at least at max 10</div>;
    }
    
    if (size < 2) {
        return <div className="text-white">Size must be at least 2</div>;
    }
    const[board,setBoard] = useState(
        Array.from({ length: size }, () => {
        return Array(size).fill("");
    })
); 
useEffect(() => {
    if (size >= 2) {
        setBoard(Array.from({ length: size }, () => Array(size).fill("")));
    }
    setXturn(true);
}, [size]);       
    const [xturn,setXturn] = useState(true)
    const handleClick = (rowIndex,colIndex) => {
        if(board[rowIndex][colIndex] != "" || winner){
            return;
        }
        const deepCopy = JSON.parse(JSON.stringify(board))
        deepCopy[rowIndex][colIndex] = xturn?'X':'O';
        setBoard(deepCopy)
        setXturn(!xturn)
    }
    const winner = checkWinner(board, size);
    const draw = checkDraw(board,size);
    const status = winner? `Winner is ${winner}`: draw? `Game Draw` : xturn?"Player X turn":"Player O turn";

    
    return(
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="grid gap-1" style={{gridTemplateColumns: `repeat(${size},50px)`}} >
            {board.map((row,rowIndex) => {
               return row.map((cell,colIndex)=>{
                    return(
                        <div  key={`${rowIndex}-${colIndex}`}  onClick={()=>{handleClick(rowIndex,colIndex)}} className="flex justify-center items-center h-12 w-12 border-2 border-white font-medium text-lg text-white">{cell}</div>                   
                    ) 
                })
            })}
            </div>
            <div className="text-white">
                {status}
            </div>
        <div>
            <button onClick={()=>{
                setBoard(Array.from({length: size},()=>{
                    return Array(size).fill("")}))
                    setXturn(true);    
            }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-20 h-10">Reset</button>
        </div>
        </div>
    )
}