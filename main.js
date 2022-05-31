//1//
// console.log(first.innerText);
//2//
// second.innerText = "my dom app";
//3//
// var textClass = document.getElementsByClassName("texts");
//4//
// console.log(textClass);
// console.log(textClass[1]);
//5//
// console.log(textClass[2].innerHTML);
//6//
// var textsClass2 = document.getElementsByClassName("texts2");
//  console.log(textsClass2);
//7//
// function nameFromUser() {
//   name1.innerText = prompt("Enter your name");
// }
// nameFromUser();
//8//
// function numAndColor() {
//   var numberOf = +prompt("Enter number");
//   for (var i = 0; i < numberOf; i++) {
//     var color = prompt("Enter some color");
//     document.write("<span>" + color + "</span>"+"<br>");
//   }
// }
// numAndColor();
//9//
// function textFromUser() {
//   var userText = prompt("Enter text");
//   var userTag = prompt("Enter tag name");
// document.write('<'+userTag+'>'+userText+'</'+userTag+'>')
// }
// textFromUser();
// 10//
// function inputTy() {
//   var inputType = prompt("enter type");
// document.write('<input type="'+inputType+'"></<input>')}
// inputTy();

//11//
// function changeInnerText(className,text) {
//     var elemArray=document.getElementsByClassName(className)
//     for(var i=0;i<elemArray.length;i++){
//             elemArray[i].innerText=text;
//     }
// }
// changeInnerText("classy","how are you")
//12//
// function pElemets(){
// var pArray= document.getElementsByTagName("p")
// for(var i=0;i<pArray.length;i++){
// pArray[i].innerHTML="<span>"+"because"+"</span>";

// }
// }
// pElemets()
//13//
// function above18() {
//   var firstName = prompt("Enter your first name");
//   var lastName = prompt("Enter your last name");
//   var age = +prompt("Enter your age");
//   document.write(firstName + " " + lastName + " " + age);
//   if (age > 18) {
//     document.write("<br>"+"<input></input>");
//   }
// }
// above18();
//14//
// function movieObject() {
//   var movie = {
//     nameMovie: prompt("Enter movie name"),
//     views: prompt("Enter number of views"),
//     year: prompt("Enter year of movie"),
//     img: prompt("Enter movie cover"),
//   };
//   document.write(
//     "<h1>" +
//       movie.nameMovie +
//       "</h1>" +
//       "<h2>" +
//       movie.views +
//       "</h2>" +
//       "<span>" +
//       movie.year +
//       "</span>" +
//       "<br>" +
//       "<img src=" +
//       movie.img +
//       ">"
//   );
// }
// movieObject();
//15//
// var emploee = {
//   firstName: prompt("Enter your first name"),
//   lastName: prompt("Enter your last name"),
//   email: prompt("Enter your email"),
//   department: prompt("Enter your department"),
// };
// document.write(
//   "<h1>" +
//     emploee.firstName +
//     "</h1>" +
//     "<h2>" +
//     emploee.lastName +
//     "</h2>" +
//     "<span>" +
//     emploee.email +
//     "</span>" +
//     "<p>" +
//     emploee.department +
//     "</p>"
// );
//16//
// function numOfBuildings() {
//   var numOfObjects = prompt("Enter number");
//   for (var i = 0; i < numOfObjects; i++) {
//     var building = {
//       contractor: prompt("Enter the contractor name"),
//       company: prompt("Enter the company name"),
//       numOfFloors: prompt("Enter the number of floors"),
//       numOfAppartmentsInFloor: prompt(
//         "Enter the number of appartments in floor"
//       ),
//     };
//     document.write(
//       "<h2>" +
//         building.contractor + " "+
//         building.company +" "+
//         building.numOfFloors +" "+
//         building.numOfAppartmentsInFloor +
//         "</h2>"
//     );
//   }
// }
// numOfBuildings();
//17//
// var counter = 0;
// function userStore() {
//   var numOfObjects = prompt("Enter number");
//   for (var i = 0; i < numOfObjects; i++) {
//     var store = {
//       storeName: prompt("Enter the store name"),
//       adress: prompt("Enter the adress"),
//       numOfDepartments: prompt("Enter the number of departments"),
//       numOfEmploees: prompt("Enter number of emploees"),
//     };
//     if (store.numOfEmploees > 10) {
//       document.write(
//         "<h1>" +
//           store.storeName +
//           " " +
//           store.adress +
//           " " +
//           store.numOfDepartments +
//           " " +
//           store.numOfEmploees +
//           "</h1>"
//       );
//     }
//     counter++;
//   }
// }
// userStore();
//18 //
// function printElements() {
//   console.log(counter);
// }
// printElements();

//19//
// function contactInfo() {
//   var numOfContacts = +prompt("Enter number of contacts");
//   for (var i = 0; i < numOfContacts; i++) {
//     var contactObject = {
//       fullName: prompt("Enter full name"),
//       company: prompt("Enter the company name"),
//       phone: prompt("Enter phone"),
//       mobile: prompt("Enter mobile"),
//       email: prompt("Enter email"),
//     };
//     document.getElementById("mylist").innerHTML +=
//       "<li>" + contactObject.fullName + "</li>";
//   }
// }
// contactInfo();
