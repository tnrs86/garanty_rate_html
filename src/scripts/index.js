import '../style/page.scss';

window.onload = function () {

  document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    const arrowElement = document.getElementById("arrow")
    console.log(keyName)

    arrowElement.style = "transform: rotate(" + keyName * 10 + "deg)"
  });
}