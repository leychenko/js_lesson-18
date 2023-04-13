//================================= Задача 5 ====================================
// Задача 5. Відобразити таблицю 3*4 з випадковими числами (її треба динамічно створити і вставити на сторінку)

function getTable() {
	const table = document.createElement("table")
	document.getElementById("table").append(table)
  for (let i = 0; i < 3; i++) {
    let row =  document.createElement("tr")
	 table.append(row)
    for (let j = 0; j < 4; j++) {
    let column = document.createElement("td")
      const random = Math.floor(Math.random() * 100)
		column.innerText = `${random}`
		row.append(column)
    }
  }
  
}
window.onload = getTable