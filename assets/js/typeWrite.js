export function typeWrite(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = " ";
  textArray.forEach(function (letter, i) {
    setTimeout(function () {
      element.innerHTML += letter;
    }, 75 * i);
  });
}
