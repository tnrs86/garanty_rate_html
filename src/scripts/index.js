import '../style/page.scss';
import '../pug/elements/textBox/textBox.scss';
import '../pug/elements/dropList/dropList.scss';
import '../pug/elements/borderLabel/borderLabel.scss';
import '../style/problems.scss';
import displayingProblems from "./displayingProblems";
import { sendPost } from './post';
import setRating from './setRating';
import setIndicatorValue from './setIndicatorValue';

export function init(serverURL) {

  document.getElementById("btn_get_descript").addEventListener("click", () => {

    let inputINN = document.getElementById("inn");
    let inputNum_purhase = document.getElementById("num_purhase");
    let inputType_BG = document.getElementById("type_BG");
    let inputSum_warranty = document.getElementById("sum_warranty");
    let sendMessage = {};


    sendMessage = {
      "inn": inputINN.value,
      "purhase": inputNum_purhase.value,
      "type_bg": inputType_BG.value,
      "sum_varranty": inputSum_warranty.value,
    }

    sendPost(serverURL, sendMessage, (ansver) => {
      displayingProblems(ansver)
    })
  })


  document.getElementById("btn_calc_rating").addEventListener("click", () => {

    let inputINN = document.getElementById("inn");
    let inputNum_purhase = document.getElementById("num_purhase");
    let inputType_BG = document.getElementById("type_BG");
    let inputSum_warranty = document.getElementById("sum_warranty");
    let sendMessage = {};


    sendMessage = {
      "inn": inputINN.value,
      "purhase": inputNum_purhase.value,
      "type_bg": inputType_BG.value,
      "sum_varranty": inputSum_warranty.value,
    }

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

// window.onload = function () {

//   document.getElementById("btn_get_descript").addEventListener("click", () => {

//     let inputINN = document.getElementById("inn");
//     let inputNum_purhase = document.getElementById("num_purhase");
//     let inputType_BG = document.getElementById("type_BG");
//     let inputSum_warranty = document.getElementById("sum_warranty");
//     let sendMessage = {};


//     sendMessage = {
//       "inn": inputINN.value,
//       "purhase": inputNum_purhase.value,
//       "type_bg": inputType_BG.value,
//       "sum_varranty": inputSum_warranty.value,
//     }

//     sendPost("https://httpbin.org/post", sendMessage, (ansver) => {
//       displayingProblems(ansver)
//     })
//   })


//   document.getElementById("btn_calc_rating").addEventListener("click", () => {
//     sendPost("https://httpbin.org/post", { 1: "1", 2: "2" }, (ansver) => {

//       if (ansver && (ansver["score"]) || (ansver["score"]) == 0) {
//         setRating((ansver["score"]))
//         setIndicatorValue((ansver["score"]))
//       } else {
//         let testValue = parseInt(Math.random() * 1000)
//         setRating(testValue)
//         setIndicatorValue(testValue)
//       }

//     })
//   })

//   document.getElementById("btn_send_application").addEventListener("click", () => {
//     sendPost("https://httpbin.org/post", { 1: "1", 2: "2" }, (ansver) => {
//       console.log("set rating")

//     })
//   })

//   displayingProblems({ "Первая": "low", "Вторая": "high" })
// }