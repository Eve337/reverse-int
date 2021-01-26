module.exports = function reverse (n) {

  let temp = n < 0 ? n * (-1) : n;
  temp = temp.toString().split("").reverse().join("");
  
  if(n < 0 && Number(temp) > 0 && n > Number(temp)){
    return Number(temp)*(-1);
  } else if (n < 0 && Number(temp) > 0 && n < Number(temp)){
    return Number(temp);
  }
}
