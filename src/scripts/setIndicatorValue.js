export default function setIndicatorValue(value) {
  const arrowElement = document.getElementById("arrow");

  arrowElement.style = "transform: rotate(" + (-100 + value / 5) + "deg)";
}