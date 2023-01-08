// var x= 9;
// console.log(x);
// x=12;
// console.log(x);
// var x=7*7;
// console.log(x);
// let y = 55;
// console.log(y);
// y=56;
// console.log(y);
// let y =5; this is error we cant declare y again
// console.log(y);
// const PI=3.14;
// console.log(PI);
// PI=22; // mildaina value update garna
// console.log(PI);
// const x= 33;
// console.log(x);
// console.log(typeof x);
// let name="aaisa";
// console.log(name);
// console.log(typeof name);
// let bool = true;
// console.log(bool);
// console.log(typeof bool);
// let x= 90;
// let y =66;
// let z= false;
// let result= x +y+z;
// console.log(result);
// let name ="aaisa raut ";
// let y= 20;
// let find =name + y;
// console.log(find);
// const name= "aayusha";
// const surname= "raut";
// console.log("my name is :"+name + surname);
// const bio =(`my name is : ${name} ${surname} .`);//template litreal
// console.log(`hi :${bio}`);
// let name = "aayusha  raut"
// console.log(name);
// console.log(typeof name);
// console.log(typeof Number(name));
// type conversion and strings methods
// let number = 123;
// console.log(number);
// // console.log(typeof String(number));
// console.log(typeof number.toString());
// string method
// let str ="Hi ,user!";
// let y = " are you enjoying coding ?";
// let z= "  do you like coding?     ";
//charAT
// console.log(str.charAt(0));
// length
// console.log(str.length);
// concat
// console.log(str.concat(y));
//replace
// console.log(str.replace("hi","hello"));
//indexof
// console.log(str.indexOf("u"));
// console.log(str.lastIndexOf("r"));
//include
// console.log(str.includes("hi"));
//split
// console.log(str.split("u"));
//to lower case
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(z.trim());\
// console.log(str.slice(0,9));
const heading = document.getElementById("mycss");
 heading.innerText ="i love javascript";
 heading.style.background="red";
 heading.style.color="white";
 heading.style.textAlign= "center";
 //condition(if/else)
//  let email ="ayusharaut395@gmail.com";
//  let password ="aayusha";
//  if(email==="ayusharaut395@gmail.com"&& password==="aayusha")
//  {
//     console.log("login success");
//  }
// else 
// {
//     console.log("invalid credential");
// }
// student grade
// let grade = "A";

// if (grade==="B")
// {
//     console.log("very good")

// }
// else if (grade==="c")
// {
//     console.log("do better");

// }
// else if(grade==="d")
// {
//     console.log("need improvement");
// }
// else if(grade==="A")
// {
//     console.log("excellent");
// }
// else
// {
//     console.log("invalid")
// }
// let x= 10;
// if (x>15)
// {
//     xonsole.log("x is greter than 15");
// }
// else if (x>5)
// {
//     console.log("x is greater than 5 but not greater 15");
// }
// else
// {
//     console.log(" x is not geater than 15");
// }
//weather
// let weather ="winter";
// if (weather==="sunny")
// {
//     console.log("its sunny day");
// }
// else if(weather==="cloudy")

// {
//     console.log("its going to rain")
// }
// else if(weather==="winter")
// {
//     console.log("its too cold")
// }
// else
// {
//     console.log("invalid");
// }
//switch case
// let day ="sunday"
// switch (day) {
//     case "monday":
//         console.log("today is monday");
//         break;
//     case "tuesday":
//       console.log("today is tuesday");

//      case "wednesday":
//         console.log("today is wednesday");
//         break;
//     case "thursday":
//         console.log("today is thursday");
//         break;
//      case "friday":
//             console.log("today is friday");
//             break;
//       case "saturday":
//                 console.log("today is saturday");
//                 break;
//     case "sunday":
//         console.log("today is sunday");
//         break;
//     default:
//         console.log("error");
//         break;
// }
// let grade ="A";
// switch(grade)
// {
//     case "B":
//         console.log("very good");
//         break;
//      case "c":
//          console.log("better");
//          break;
//      case "D":
//          console.log("improvement needed");
//          break;
//      case "E":
//         console.log("you are failed");
//         break;
//       case "A":
//          console.log("aich topper");
//          break;
//     default:
//         console.log("error");
//         break;
        
// }
let month ="feb";
switch(month)
{
    case "jan":
    case "feb":
    case "march":
        console.log("here is first three month");
        break;
     case "april":
     case "may":
     case "june":
                console.log("month start with april and end with june");
                break;
     case "july":
     case "aug":
     case "sep":
                 console.log("here month start with july and end with sep ");
                 break;
     case "oct":
     case "nov":
     case "dec":
                  console.log("last trimester");
                  break;
            default:
                console.log("error");
                break;
}