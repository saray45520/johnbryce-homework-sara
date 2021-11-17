// תרגיל 1
// const stringtonumber = () => {
//     let stringInput = document.getElementById("string")
//     let stringInputValue = stringInput.value
//     let message = document.getElementById("p")
//     try {
//         if (stringInputValue == "") throw "is Empty";
//         if (isNaN(stringInputValue)) throw "not a number";
//         {

//         }
//     } catch (error) {
//         message.innerHTML = "Input " + error;

//     }
// }
// תרגיל 2
// let message = document.getElementById("p")  
// const stringtonumber = () => {
//     message.innerText="sara"

// }
// const stringcallback = (callback) =>{
//     callback()

// }
//  stringcallback(stringtonumber)
// תרגיל 3
//  let message = document.getElementById("p")
// const stringtonumber = () =>{
// message.innerHTML=Math.floor(Math.random() * 10);
// }
// function cool(callback) {
//     callback();
//     }
//     cool(stringtonumber)
// תרגיל 4
// let message = document.getElementById("p")
// const stringtonumber = (num) => {
//     message.innerText = num
// }
// function cool(callback, num) {
//     callback(42)
// }
// cool(stringtonumber)
// הפנק הראשונה מקבלת מספר ומציגה
// הפנק השנייה מקבל פנק ופרמטר 
// תרגיל 5
// let arr = []
// const stringtonumber = (num1, num2, num3, num4, num5) => {
//     arr.push(num1, num2, num3, num4, num5)
//     let randomnumber = Math.floor(Math.random() * arr.lengh)
//     let result = arr[randomnumber]
//     return result
// }
// function cool(callback) {
//     const num = callback(42, 128, 37, 81, 66)
//     document.write("Num:" + num)

// }
// cool(stringtonumber)
// תרגיל 6
// const stringtonumber = () =>{
//     let colorList=["red", "bleak", "grey", "ping", "yellow"]
//     let backgroundBody=document.getElementById("body")
// let randomColor=Math.floor(Math.random() *colorList.length)
// backgroundBody.style.backgroundColor=colorList[randomColor]
// }
// function cool(callback){

//     callback()
// }
// cool(stringtonumber)
//  תרגיל 7
// const color = (color) => {
//     let backgroundBody = document.getElementById("body")
//     backgroundBody.style.backgroundColor = color

// }
// function cool(callback) {

//     callback("green")
// }
// const stringtonumber =() =>cool(color)
//תרגיל 8
// let colorlist = []
// const functionbackgroundColor = (color1, color2, color3) => {
//     colorlist.push(color1, color2, color3)
//     let randomColor = Math.floor(Math.random() * colorlist.length)
//     return colorlist[randomColor]
// }

// function amazing(paintCallback) {
//     const paintedColor = paintCallback("Red", "Green", "Blue");
//     document.write("Painted Color: " + paintedColor);
// }
// amazing(functionbackgroundColor)
//תרגיל 9
// const stringtonumber = () =>{
//     IntervalId=  setInterval(() => {
//         document.write(Math.floor(Math.random() * (100 - 1) ) + 1)
//         // document.write=","
//     }, 1000);
// }
// setInterval(stringtonumber,1000)
// clearInterval(IntervalId)



  