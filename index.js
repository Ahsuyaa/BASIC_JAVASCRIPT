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
// 
// for(i=0;i<10;i++)
// {
//     console.log(i);  
// }
// let i =10;
// while(i<19)
// {
//     console.log(i);
//     i++;
// }
// const num =[1 , 2  ,3,  4, 5];
// console.log(num.length);
// console.log(num);
// console.log(num[2]);
// let x= 5;
// do 
// {
//  console.log("hello world");
   
// } while(x<5);
// const myarr =[2,2,4,11,23,24,5,7,8,9,12,1,0];
// console.log(myarr.length);
// const newArr =["shyam","hari","gita","sita","mina"];
// console.log(newArr);
// //push method
// const newAdd  = newArr.push("krishna");
// console.log(newArr);
//unshift
// const newarr =["mok","huge","talk","see"];
// console.log(newarr.unshift("captain "));
// console.log(newarr);
//pop method
// const newarr =[3,4,5,6,7];
// console.log(newarr);
// const newdata= newarr.pop();
// console.log(newdata);
// shift
// const newarr =[1,2,33,43,21,0];
// const newdata = newarr.shift();
// console.log(newdata);
// console.log(newarr);
//concat method
// let arr1=[1,2,3,4,5];
// let arr2=["array","structure","enumeration"];
// console.log(arr1.concat(arr2));
//filter
// let newarr =[2,3,4,5,21,6,43,23,76,22];
// console.log(newarr);
// const findfilter = newarr.filter((n)=>n>5);
// console.log(findfilter);
// console.log(newarr);
//splice method
// const newarr =[3,4,5,6,21,32,43];
// console.log(newarr);
// const newdata =newarr.splice(2,3);
// console.log(newarr);
//reverse
// const newarr =[6,21,7,43,8,9,10,11,12,13];
// console.log(newarr);
// const newdata = newarr.reverse();
// console.log(newdata);
// console.log(newarr);
//sort
// const newarr =[11,23,4,1,6,43,22,78];
// const newdata =newarr.sort();
// console.log(newarr);
// let arr =[]
// arr[0]=1;
// for(let i= 0;i<10;i++)
// {
// arr[i]= i;
// arr.push(i);
// console.log(arr);
// }
//OBJECT
// const myprofile =
// {
//     firstname:"aayusha",
//     lastname:"raut",
//     Age:21,
//     ismarried:false,
//     issalary: function()
//     {
//         console.log("ma sanga jagir xaina");
//         return true;
//     },
// };
// console.log(myprofile);
// console.log(myprofile.Age);
// console.log(myprofile["Age"]);
// console.log(myprofile.issalary());
const car ={
    make:"Rover",
    model:"camry",
    color:"red",
    runwheel:4,
    iselectric:false,
    startengine:function()
        {
            console.log("start");
            return true;
        },
        endengine:function()
        {
            console.log("end");
            return flase;
        }
    
    
};
// console.log(car);
// console.log(car.startengine());
// console.log(car.endengine());
// if(car.startengine())
// {
//     console.log("car is about to start");
// }
// else if (car.endengine())
// {
//     console.log("car is at steady "); 
// }
// else{
//     console.log("error");
// }
//function
// function mydata() {
//     let a=90;
//     let b=12;
//     let result=(a+b)/2;
//     console.log(result);
    
// }
// mydata();
// function newd(a,b,c) {
//     return  (a+b+c)/2;
    
// }
// const ans =newd(2,2,2);
// const ans1 =newd(2,1,2);
// console.log(ans);
// console.log(ans1);
// const myvalue= function()
// {
//     let x=3;
//     let y =4;
//     let result=x*y;
//     console.log(result);
// }
// console.log(myvalue());
// function mydata(arr=[]){
//     let total=0;
//     for(let i=0;i<arr.length;i++)
//     {
//        total=total +arr[i];
//     }
//   return total;

// }
// const ans = mydata([1,2,3,4,5]);
// console.log(ans);
//scoping
// let x=67;// global scope
// function myscope()
// {
//     let x= 67;// local scope

// }
// console.log(x);
// var x= 90;
//  function varr()
//  {
//     var x = 9+9;
//     console.log(x);
//  }
//  console.log(x);
//  varr();
// function myblock()
// {
//     if(true)
//     {
//         var x= 9*9;
//         console.log(x);
//     }
   
// }
// myblock();
// let in block and function scope
// function myfun()
// {
//     if(true)
//     {
//         let y= (8+2)/2;
//         console.log(y);
//     }
   
    
// }
// myfun();
function myfunc()
{
    if(true)
    {
        let x= (15+2)*2;
        console.log(x);
    }
}

myfunc();