//We are given with fucntion isArray(array) which returns if the "array" is array
Array.prototype.sameStructureAs = function (other) {
    if (!isArray(other)) return false;
    if (this.length !== other.length) return false;
    for (let i = 0; i < this.length; i++) {
        if (isArray(this[i]) && isArray(other[i])) {
            if (!this[i].sameStructureAs(other[i])) return false;
        }
        if (!isArray(this[i]) && isArray(other[i])) return false;
        if (isArray(this[i]) && !isArray(other[i])) return false;
    }
    return true;
};

//Improved
Array.prototype.sameStructureAs = function (other) {
    return this.length === other.length
        ? this.every((el, i) => {
              return isArray(el) ? el.sameStructureAs(other[i]) : true;
          })
        : false;
};
