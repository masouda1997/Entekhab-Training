import "./style.css";
import javascriptLogo from "./javascript.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="flex justify-center items-center">

      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1 dir="rtl" class="text-yellow-300">پروژه بیس JavaScript</h1>
    </div>
    <p dir="rtl"> تیلویند روی پروژه ست شده و نیازمند فایل های output.css , style.css میباشد همچنین درصورتی که نیاز  به استفاده از این فریم ورک داشتید npm run tw را در یک ترمینال جدا اجرا کنید </p>
  </div>
`;
