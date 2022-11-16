Array.prototype.isEqual = function(arrCompare) {
    // arrow notation can work here?
    const isEqualToArrCompare = function (el, index) {
        if(el === arrCompare[index]) {
            return true;
        }
        return false;
    }

    if(this.every(isEqualToArrCompare)) return true;
    return false;
}
