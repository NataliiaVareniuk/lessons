"use strict"
function calc(){
  let param = document.getElementById("id-euro").value;
  let res = 1.07*param;
  console.log(`${res}`);
  document.getElementById("id-usd").value = res.toFixed(2);
}
function reverse() { 
  let param = document.getElementById("id-usd").value;
  let res = 0.9387*param;
  console.log(`${res}`);
  document.getElementById("id-euro").value = res.toFixed(2);

}
