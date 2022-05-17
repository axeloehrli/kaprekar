const container = document.querySelector(".container")
const button = document.querySelector(".button-submit")
const input = document.querySelector("input")
button.addEventListener("click", () => {
  resetOperation()
  operate(input.value)
})

const sortHighToLow = (num) => {
  const numArray = []
  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    numArray.push(number)
  }

  numArray.sort((a, b) => b - a)
  return parseInt(numArray.join(""))
}

const sortLowToHigh = (num) => {
  const numArray = []
  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    numArray.push(number)
  }

  numArray.sort((a, b) => a - b)
  return parseInt(numArray.join(""))
}

let steps = 0

const operate = (num) => {
  steps++
  const highToLow = sortHighToLow(num)
  const lowToHigh = sortLowToHigh(num)

  displayOperation(highToLow, lowToHigh)
  let result = highToLow - lowToHigh

  if (result === 6174) {
    const resultText = document.createElement("h1")
    resultText.classList.add("result-text")
    resultText.textContent = result
    container.appendChild(resultText)
    steps = 0
  } else if (steps >= 50) {
    const resultText = document.createElement("h1")
    resultText.classList.add("result-text")
    resultText.textContent = "Invalid Number"
    container.appendChild(resultText)
    steps = 0
  } else {
    return operate(result.toString())
  }
}

const displayOperation = (num1, num2) => {
  const operationText = document.createElement("p")
  operationText.classList.add("operation-text")
  operationText.textContent = `${steps}: ${num1} - ${num2}`
  container.appendChild(operationText)
}

const resetOperation = () => {
  const operationTextElements = document.querySelectorAll(".operation-text")
  const resultTextElements = document.querySelectorAll(".result-text")

  operationTextElements.forEach(element => element.remove())
  resultTextElements.forEach(element => element.remove())
}