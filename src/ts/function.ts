import { parseISO, format } from "date-fns";
import gsap from "gsap";

// 日付整形関数
export const datePlasticSurgery = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, "yyyy年M月d日");
};

// 文字を丸める関数
export const split = (text: string, maxLength: number): string => {
  let modStr = "・・・";

  if (text.length > maxLength) {
    modStr = text.substr(0, maxLength) + "...";
  } else {
    modStr = text;
  }
  return modStr;
};

// ローディング画面を閉じる
export const closeLoadingScreen = (jsLoaderBg: string) => {
  gsap.timeline().to(jsLoaderBg, {
    opacity: 0,
    direction: 1.1,
  });
};

// オープニングアニメーション
export const opningAnimation = (
  jsLoaderBg: string,
  firstViewTitle: string,
  firstViewtext: string,
  firstViewImageBox: string,
  firstViewCircle: string,
  picDown: string
) => {
  gsap.set(firstViewCircle, {
    opacity: 0,
    y: 30,
  });

  gsap.set([firstViewTitle, firstViewtext, firstViewImageBox], {
    opacity: 0,
    y: -50,
  });

  gsap.set(picDown, {
    opacity: 0,
    y: -30,
  });
  gsap
    .timeline()
    .to(jsLoaderBg, {
      opacity: 0,
      direction: 1.1,
      delay: 1.5,
    })
    .to(
      firstViewCircle,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: {
          amount: 0.6,
        },
      },
      "+=0.2"
    )
    .to(
      firstViewImageBox,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: {
          amount: 0.6,
        },
      },
      "+=0.2"
    )
    .to(
      firstViewTitle,
      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 1,
          from: "start",
          ease: "sine.in",
        },
      },
      "-=0.1"
    )
    .to(
      firstViewtext,
      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 1,
          from: "start",
          ease: "sine.in",
        },
      },
      "-=0.1"
    )
    .to(
      picDown,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "+=0.2"
    );
};

/* 文字列を分割しspanで囲む */
export const surroundSpan = (className: string) => {
  const jsText = document.querySelectorAll(className);
  jsText.forEach((target) => {
    let newText = "";
    const text = target.textContent;
    if (text == null) {
      console.error("error");
    } else {
      const result = text.split("");
      for (let i = 0; i < result.length; i++) {
        newText += "<span>" + result[i] + "</span>";
      }
      target.innerHTML = newText;
    }
  });
};

/* IntersectionObserver */
export const intersection = (domElements: NodeListOf<Element>) => {
  const callback = (entries: IntersectionObserverEntry[]) => {
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
  domElements.forEach((domElement: Element) => {
    observer.observe(domElement);
  });
};
