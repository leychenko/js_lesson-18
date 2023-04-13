//================================= Задача 6 ====================================
// Задача 6.Користувач задає кількість оцінок і натискає на кнопку «get table». В результаті формується таблиця з input, куди користувач вводить оцінки. Після цього натискає на кнопку “get sum” і знаходить середнє значення.
const getNewButton = document.createElement("button")
const getDivBtn = document.querySelector(".btn-res")

function getTableWithScores() {
  const userScores = parseInt(document.getElementById("userValue").value)
  const getDiv = document.querySelector(".container2")
  getDivBtn.style.paddingTop = "20px"
  getDivBtn.append(getNewButton)
  getNewButton.innerHTML = "Get avarage"
  getNewButton.onclick = getAvarageScores
  for (let i = 0; i < userScores; i++) {
    const inputs = document.createElement("input")
    getDiv.append(inputs)
    inputs.classList.add("newInp")
  }
}
function getAvarageScores() {
  let sum = 0
  let avarage = 0
  const result = document.createElement("span")
  getDivBtn.append(result)
  const collectionInputsList = document.querySelectorAll(".newInp")
  for (const inp of collectionInputsList) {
    sum = sum + parseInt(inp.value)
  }
  avarage = sum / collectionInputsList.length
  result.innerHTML = `Середній оцінка ${avarage.toFixed(1)}`
  result.style.marginLeft= "20px"
  result.style.fontSize = "20px"
}

document.querySelector(".button").onclick = getTableWithScores
