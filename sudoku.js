
var sudoku = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0 ,0]];

function sudokuSolver(sudoku){
var nonPossibilities = {},
impossibleNumbers,
emptySpaces = 81;
while(emptySpaces > 0){
    emptySpaces =0;
    for(var vert= 0;vert< sudoku.length; vert++){
        for(var horz = 0; horz < sudoku.length; horz++){
            nonPossibilities= {};
            if(sudoku[vert][horz] === 0){
                for(var i = 0; i < 9; i++){
                    if(sudoku[vert][i] > 0){
                        nonPossibilities[sudoku[vert][i]] = true;
                    }
                    if(sudoku[i][horz] > 0){
                        nonPossibilities[sudoku[i][horz]] = true;
                    }
                }
                for(var vgrid = Math.floor(vert/ 3) * 3; vgrid < Math.floor(vert / 3) * 3 + 3; vgrid++){
                    for(var hgrid = Math.floor(horz / 3) * 3; hgrid < Math.floor(horz / 3) * 3 + 3; hgrid++){
                        if(sudoku[vgrid][hgrid]){
                            nonPossibilities[sudoku[vgrid][hgrid]] = true;
                        }
                    }
                }
                impossibleNumbers= Object.keys(nonPossibilities);//unique possible from non possible
                if(impossibleNumbers.length === 8){//if condition for impossiblenum
                    for(var i = 0; i < 10; i++){//for loop 1-9 num
                        if(impossibleNumbers.indexOf(i.toString()) < 0){
                            sudoku[vert][horz] = i;
                        }
                    }
                }
                else{
                    emptySpaces++;
                }
            }

        }

    }
}

return sudoku;
}	
console.log(sudokuSolver(sudoku));	