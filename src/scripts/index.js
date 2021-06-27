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

export function init(serverURL) {

  document.getElementById("btn_get_descript").addEventListener("click", () => {


    let sendMessage = getStartValues();

    if (!sendMessage) return;

    sendPost(serverURL, sendMessage, (ansver) => {
      // displayingProblems(ansver)
      displayingProblems({ 1: "low", 2: "low", 3: "mid", 4: "high" })
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
        let testValue = parseInt(Math.random() * 1000)
        setRating(testValue)
        setIndicatorValue(testValue)
      }

    })
  })

  document.getElementById("btn_send_application").addEventListener("click", () => {
    sendPost(serverURL, { "setAppllication": true }, (ansver) => {

    })
  })

}

window.init = init