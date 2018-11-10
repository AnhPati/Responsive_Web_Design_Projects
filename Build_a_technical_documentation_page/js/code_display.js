var codeDisplay = {
  init : function () {
    var codes = document.querySelectorAll("code");
    var codesContent = codes.innerText || codes.textContent;
    console.log(codesContent);
    for (var i = 0; i < codes.length; i++) {
      codes[i].innerHTML = codes[i].innerHTML.replace(/</gi,"&lt;");
    };
  },
}

var codeDisplayFreecodecamp = Object.create(codeDisplay);
codeDisplayFreecodecamp.init();
