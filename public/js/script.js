/* 文字列を分割しspanで囲む */
const surroundSpan = (className) => {
  const jsText = document.querySelectorAll(className);
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

/* IntersectionObserver */
const intersection = (domElements) => {
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };
  const option = {
    rootMargin: "0px",
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(callback, option);
  domElements.forEach((domElement) => {
    observer.observe(domElement);
  });
};
