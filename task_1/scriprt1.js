//================================= Задача 1 ====================================
// Задача 1. Розробити калькулятор

function calcPlus() {
  const firstNum = parseFloat(document.getElementById("first").value)
  const secondtNum = parseFloat(document.getElementById("second").value)
  const sum = firstNum + secondtNum
  document.getElementById("result").value = sum.toFixed(2)
}
function calcMinus() {
  const firstNum = parseFloat(document.getElementById("first").value)
  const secondtNum = parseFloat(document.getElementById("second").value)
  const sum = firstNum - secondtNum
  document.getElementById("result").value = sum.toFixed(2)
}
function calcMultiply() {
  const firstNum = parseFloat(document.getElementById("first").value)
  const secondtNum = parseFloat(document.getElementById("second").value)
  const sum = firstNum * secondtNum
  document.getElementById("result").value = sum.toFixed(2)
}
function calcDivide() {
  const firstNum = parseFloat(document.getElementById("first").value)
  const secondtNum = parseFloat(document.getElementById("second").value)
  const sum = firstNum / secondtNum
  document.getElementById("result").value = sum.toFixed(2)
}
document.querySelectorAll(".button")[0].onclick = calcPlus
document.querySelectorAll(".button")[1].onclick = calcMinus
document.querySelectorAll(".button")[2].onclick = calcMultiply
 document.querySelectorAll(".button")[3].onclick = calcDivide





