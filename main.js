// console.log(first.innerText);
// second.innerText = "my dom app";
// var textClass = document.getElementsByClassName("texts");
// console.log(textClass);
// console.log(textClass[1]);
// console.log(textClass[2].innerHTML);
// var textsClass2 = document.getElementsByClassName("texts2");
//  console.log(textsClass2);
// function nameFromUser() {
//   name1.innerText = prompt("Enter your name");
// }
// nameFromUser();
// function numAndColor() {
//   var numberOf = +prompt("Enter number");
//   for (var i = 0; i < numberOf; i++) {
//     var color = prompt("Enter some color");
//     document.write("<span>" + color + "</span>"+"<br>");
//   }
// }
// numAndColor();
//9// לא הושלם
// function inputTy() {
//   var inputType = prompt("enter type");
//   document.innerHTML = <input></input>;
// }
// inputTy();
//11//
// function changeInnerText(className,text) {
//     var elemArray=document.getElementsByClassName(className)
//     for(var i=0;i<elemArray.length;i++){
//             elemArray[i].innerText=text;
//     }
// }
// changeInnerText("classy","how are you")
// function pElemets(){
// var pArray= document.
// for(var i=0;i<pArray.length;i++){
// pArray[i].innerHTML=""

// }
// }
// pElemets()
//19// לא הושלם
function contactInfo() {
  var numOfContacts = +prompt();
  for (var i = 0; i < numOfContacts; i++) {
    var contactObject = {
      fullName: prompt("Enter full name"),
      company: prompt("Enter the company name"),
      phone: prompt("Enter phone"),
      mobile: prompt("Enter mobile"),
      email: prompt("Enter email"),
    };
    document.getElementById().innerHTML +=
      "<li>" + contactObject.fullName + "</li>";
  }
}
contactInfo();
