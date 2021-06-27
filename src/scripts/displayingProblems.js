const lowProblem = "low";
const midProblem = "mod";
const highProblem = "high";

export default function displayingProblems(problems = {}) {
  let problemSContainer
  let problemItemContainer
  let problemNameContainer
  let problemValueContainer
  let problemsKeyArray
  let problemValueContainerClassName = "page__problemValueContainer";

  problemSContainer = document.getElementById("problemsContainer");

  problemSContainer.innerHTML = "";

  problemsKeyArray = Object.keys(problems);

  // заголовок
  problemItemContainer = document.createElement("div");
  problemItemContainer.className = "page__problemContainer"

  problemNameContainer = document.createElement("div");
  problemNameContainer.className = "page__problemNameHeader"
  problemNameContainer.innerText = "ФАКТОР"

  problemValueContainer = document.createElement("div");
  problemValueContainer.className = "page__problemValyueHeader"
  problemValueContainer.innerText = "КРИТИЧНОСТЬ"

  problemSContainer.appendChild(problemItemContainer)
  problemItemContainer.appendChild(problemNameContainer)
  problemItemContainer.appendChild(problemValueContainer)

  problemsKeyArray.forEach(key => {
    problemItemContainer = document.createElement("div");
    problemItemContainer.className = "page__problemContainer"

    problemNameContainer = document.createElement("div");
    problemNameContainer.className = "page__problemNameContainer"
    problemNameContainer.innerText = key
    problemValueContainer = document.createElement("div");

    problemValueContainerClassName = "page__problemValueContainer";

    switch (problems[key]) {
      case lowProblem:
        problemValueContainerClassName += " " + problemValueContainerClassName + "_green"
        break;

      case midProblem:
        problemValueContainerClassName += " " + problemValueContainerClassName + "_yellow"
        break;

      case highProblem:
        problemValueContainerClassName += " " + problemValueContainerClassName + "_red"
        break;
    }

    problemValueContainer.className = problemValueContainerClassName


    problemItemContainer.appendChild(problemNameContainer)
    problemItemContainer.appendChild(problemValueContainer)

    problemSContainer.appendChild(problemItemContainer)

  })
}