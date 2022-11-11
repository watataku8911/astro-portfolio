/* 文字列を分割しspanで囲む */
const surroundSpan = (dom) => {
  const jsText = document.querySelectorAll(dom);
  jsText.forEach((target) => {
    let newText = "";
    const text = target.textContent;
    const result = text.split("");
    for (let i = 0; i < result.length; i++) {
      newText += "<span>" + result[i] + "</span>";
    }
    target.innerHTML = newText;
  });
};
