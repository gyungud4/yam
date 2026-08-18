const input = document.querySelector(".login-container input");
const btn = document.querySelector(".login-container button");

const countryCode = document.createElement("span");
countryCode.innerText = "KR +82  ▼";
countryCode.style.color = "#ffffff";
countryCode.style.fontSize = "14px";
countryCode.style.marginRight = "8px";
countryCode.style.display = "none";

const errorMsg = document.createElement("div");
errorMsg.innerText = "ⓧ 유효한 이메일 주소나 휴대폰 번호를 입력하세요.";
errorMsg.style.color = "#eb3942";
errorMsg.style.fontSize = "13px";
errorMsg.style.marginTop = "6px";
errorMsg.style.display = "none";

input.before(countryCode);
input.after(errorMsg);

function handleValidation() {
  const val = input.value.trim();
  const isPhone = /^[0-9]{8,11}$/.test(val);
  const isEmail = val.includes("@") && val.includes(".");

  if (!isEmail && !isPhone) {
    input.style.border = "1px solid #eb3942";
    input.style.outline = "1px solid #eb3942";
    errorMsg.style.display = "block";
  } else {
    input.style.border = "";
    input.style.outline = "";
    errorMsg.style.display = "none";
  }
}

btn.addEventListener("click", handleValidation);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleValidation();
  }
});

input.addEventListener("input", () => {
  const val = input.value.trim();

  if (/^[0-9]/.test(val)) {
    countryCode.style.display = "inline-block";
  } else {
    countryCode.style.display = "none";
  }

  input.style.border = "";
  input.style.outline = "";
  errorMsg.style.display = "none";
});