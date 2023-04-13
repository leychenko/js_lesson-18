//================================= Задача 4 ==============================
// Задача 4.Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і відображаються у окремих div (їх треба створити і додати на сторінку)

function showMessage() {
	const someDiv = document.querySelector(".result")
  const wishList = [
    "З’їздити в Америку",
    "Купити новий автомобиль",
    "Щоб закінчилась війна",
    "Знайти нову роботу",
    "Щоб вся русня яка на нашій землі виздихала",
  ]
 for (let i = 0; i < 3; i++) {
	const randomWish = Math.floor(Math.random() * (wishList.length - 1))
	const someWish = document.createElement("div")
	someWish.innerText = `${i + 1}. ${wishList[randomWish]}`
	someDiv.append(someWish)
 }
}
window.onload = showMessage