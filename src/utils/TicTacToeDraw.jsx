export function checkDraw(board,size){
    let count = 0;
    for(let i = 0;i<size;i++){
        for(let j = 0;j<size;j++){
            if(board[i][j] != ""){
                count++;
            }
        }
    }
    if(count == (size*size)){
        return true;
    }
    return false;
}