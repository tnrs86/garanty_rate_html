import clearClassName from './clearClassName.js';

export default function getStartValues() {
  let inputINN = document.getElementById("inn");
  let inputNum_purhase = document.getElementById("num_purhase");
  let inputType_BG = document.getElementById("type_BG");
  let inputSum_warranty = document.getElementById("sum_warranty");
  let dataIsValid = true

  const addedClassName = " page__input_warning";

  if (isNaN(inputINN.value) || inputINN.value == "") {
    inputINN.className = clearClassName(inputINN.className, addedClassName) + addedClassName;
    dataIsValid = false
  }

  if (isNaN(inputNum_purhase.value) || inputNum_purhase.value == "") {
    inputNum_purhase.className = clearClassName(inputNum_purhase.className, addedClassName) + addedClassName;
    dataIsValid = false
  }

  if (inputType_BG.value == "") {
    inputType_BG.className = clearClassName(inputType_BG.className, addedClassName) + addedClassName;
    dataIsValid = false

  }

  if (isNaN(inputSum_warranty.value) || inputSum_warranty.value == "") {
    inputSum_warranty.className = clearClassName(inputSum_warranty.className, addedClassName) + addedClassName;
    dataIsValid = false
  }

  if (!dataIsValid) return


  return {
    "inn": inputINN.value,
    "purhase": inputNum_purhase.value,
    "type_bg": inputType_BG.value,
    "sum_varranty": inputSum_warranty.value,
  }
}
