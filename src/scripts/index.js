import '../pug/elements/myBytton/myBytton.scss';
import '../pug/elements/separator/separator.scss'
import '../style/page.scss';
import '../pug/elements/textBox/textBox.scss';
import '../pug/elements/dropList/dropList.scss';
import '../pug/elements/borderLabel/borderLabel.scss';
import '../style/problems.scss';

import displayingProblems from "./displayingProblems";
import { sendPost } from './post';
import setRating from './setRating';
import setIndicatorValue from './setIndicatorValue';
import getStartValues from './getStartValues.js';
import clearClassName from './clearClassName.js';

export function init(serverURL) {
  const addedClassName = " page__input_warning";

  let inputINN = document.getElementById("inn");

  inputINN.addEventListener('click', () => {
    inputINN.className = clearClassName(inputINN.className, addedClassName)
  })

  let inputNum_purhase = document.getElementById("num_purhase");

  inputNum_purhase.addEventListener('click', () => {
    inputNum_purhase.className = clearClassName(inputNum_purhase.className, addedClassName)
  })

  let inputSum_warranty = document.getElementById("sum_warranty");

  inputSum_warranty.addEventListener('click', () => {
    inputSum_warranty.className = clearClassName(inputSum_warranty.className, addedClassName)
  })

  let selectBG = document.getElementById("type_BG")

  selectBG.addEventListener("click", ()=> {
    selectBG.className = clearClassName(selectBG.className, addedClassName) 
  })

  document.getElementById("btn_get_descript").addEventListener("click", () => {

    let sendMessage = getStartValues();

    if (!sendMessage) return;

    sendPost(serverURL, sendMessage, (ansver) => {
      displayingProblems(ansver)
    })
  })


  document.getElementById("btn_calc_rating").addEventListener("click", () => {

    let sendMessage = getStartValues();;

    if (!sendMessage) return;

    sendPost(serverURL, sendMessage, (ansver) => {

      if (ansver && (ansver["score"]) || (ansver["score"]) == 0) {
        setRating((ansver["score"]))
        setIndicatorValue((ansver["score"]))
      } else {
      }

    })
  })

  document.getElementById("btn_send_application").addEventListener("click", () => {
    sendPost(serverURL, { "setAppllication": true }, (ansver) => {

    })
  })

}

window.init = init