// code your solution here
function superbowlWin(array){
    let wn =item=>item.result === 'W';
    let win = array.find(wn);
    /*if(win){
        return win.year
    }
    return win*/
    return win?win.year:win;
}