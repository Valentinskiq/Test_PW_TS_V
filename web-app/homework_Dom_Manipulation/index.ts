const homeworkH1: HTMLHeadElement = document.getElementsByTagName("h1")[0];
homeworkH1.textContent = "Welcome to my Homework";

const divsHomeWork: HTMLElement = document.querySelector(
  ".content"
) as HTMLElement;
const paragraphsTwo: HTMLParagraphElement = divsHomeWork.querySelector(
  "p"
) as HTMLParagraphElement;
paragraphsTwo.style.color = "#fffb00";

const uiHomeWork: HTMLElement = document.getElementById("list") as HTMLElement;
const liHomework = uiHomeWork.getElementsByTagName("li");
liHomework[0].textContent = "Apple";
liHomework[1].textContent = "Banana";
liHomework[2].textContent = "Cherry";

const myButton: HTMLElement = document.querySelector("button") as HTMLElement;
myButton.style.border = "1px solid red";
