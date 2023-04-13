//================================= Задача 2 ====================================
// Задача 2.Зробити конвертер валют (курси валют – константи у скрипті)
	

function convert(){
	const dollarRate = 39
  const euroRate = 41
	const grn = parseFloat(document.getElementById("grn").value)
	const euroVAlue = grn / euroRate
	const dollarValue = grn / dollarRate
	document.getElementById("euro").value = euroVAlue.toFixed(2)
	document.getElementById("dollars").value = dollarValue.toFixed(2)
}

document.getElementsByTagName("button")[0].onclick = convert




//=================================================================================
 
