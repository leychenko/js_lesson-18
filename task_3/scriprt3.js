

//================================= Задача 3 ====================================
// Задача 3.Користувач задає рік народження. Визначити кількість років користувача.

function getUserYears (){
	const userBornYear = parseInt(document.getElementById("year").value)
	const correctYear = new Date().getFullYear()
	const result = correctYear - userBornYear
	document.getElementById("span").innerHTML = `<p>Вам  ${result} років</p>`
}

document.getElementById("year").onchange = getUserYears

