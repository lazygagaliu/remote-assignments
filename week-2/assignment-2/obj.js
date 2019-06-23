function calculate(roles){
  let result;
  if(roles.op==="+"){
    result=roles.hp+roles.dp;
  }else if(roles.op==="-"){
    result=roles.ap-roles.dp;
  }else{
    result="Not supported";
  }
  return result;
}

// First Way
class Roles {
  constructor(op, ep, hp, ap, dp){
    this.op = op;
    this.ep = ep;
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
  }
}

let player1 = new Roles("-", 10, 100, 135, 98);
let player2 = new Roles("+", 15, 110, 120, 118);

console.log(player1);
console.log(player2);

console.log(calculate(player1));
console.log(calculate(player2));

// // Second Way
// function Roles(op, ep, hp, ap, dp){
//   let roles = {
//   op: op,
//   ep: ep,
//   hp: hp,
//   ap: ap,
//   dp: dp
//   }
//   return roles;
// }
//
// let player1 = Roles("+", 10, 100, 135, 98);
// let player2 = Roles("-", 15, 110, 120, 118);
//
// console.log(player1);
// console.log(player2);
//
// console.log(calculate(player1));
// console.log(calculate(player2));
