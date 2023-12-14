function changeColor(yourColor, yourBColor) {
    console.log("Running Ok");
    document.getElementById("asdf").style.color = yourColor;
    changeBackColor(yourBColor);
  }
  function changeBackColor(yourBColor) {
    document.getElementById("asdf").style.backgroundColor = yourBColor;
  }