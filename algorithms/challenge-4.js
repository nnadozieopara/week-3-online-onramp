function listSorting(needle, haystack) {
    let row = -1;
    let col = -1;
    let result = [row, col]
    let length = haystack.length;
    for(let i=0; i< length; i++){
        if(Array.isArray(haystack[i])){
            let secondLength = haystack[i].length;
            for(let j=0; j<secondLength; j++){

                if(needle === haystack[i][j]){
                    row = i;
                    col = j;
                    result = [i,j];
                } 
            }
        }else if(needle === haystack[i]){
            row = i; 
        }
        
    }
    if(col === -1){
        return row;
    }else {
        return result;
    }
}

console.log(listSorting(5,[1, 2, 3, 4, 5]));
console.log(listSorting(5,[
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ]));





module.exports = listSorting
