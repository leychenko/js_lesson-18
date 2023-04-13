//================================= Задача 7 ====================================
// Задача 7. Подорож складається з 3 етапів. На кожному етапі користувач може вибрати один з видів транспорту (авто, автобус, літак - випадаючий список), харчування (сніданок, обід, вечеря – checkbоx) та одного з 3-х гідів(використати  - radio buttons). Ціни визначте самі. Підрахувати загальну вартість.

function getTotalPrice() {
  const inputList = document.querySelectorAll("input")
  const transport1 = parseFloat (document.getElementById("transport1").value)
  const transport2 = parseFloat (document.getElementById("transport2").value)
  const transport3 = parseFloat (document.getElementById("transport3").value)
  let sumTransport = transport1 + transport2 + transport3
  let sum = 0
  for (const inp of inputList) {
    if (inp.checked) sum += parseFloat(inp.value)
  }
  const totalPrice = sum + sumTransport
    document.getElementById(
      "resultPriceTrip"
    ).innerHTML = `Загалом до сплати : ${totalPrice} грн`
  
}
document.querySelector("button").onclick = getTotalPrice
