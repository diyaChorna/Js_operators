//завдання 1
// let q1 = prompt("Question number 1?");
// let result = 0;
// if(q1 ==1){
//       result +=1;
//       let q2 = prompt("Question number 2?");
//       if(q2 ==2){
//             result +=1;
//             let q3 = prompt("Question number 3?");
//             if(q3 ==3){
//                   result +=1;
//                   console.log(result);
//             }
//             else{
//                   result +=0;
//                   console.log(result);
//             }
//       }
//       else{
//             result +=0;
//             console.log(result);
//       }
// }
// else{
//       result +=0;
//       console.log(result);
// }

//завдання  2
// let name = prompt('Please input your name');
// if(name == null || name == ''){
//       console.log("I dont know you");
// }
// else{
//       let password = prompt('Please input your password');
// }

//завдання 3
// let password = prompt('Please input your password');
// if(password == 'LOGOS'){
//       console.log('Welcome');
// }
// else if(password == null){
//       console.log('Exit canceled');
// }
// else{
//       console.log('Password wrong');
// }

//завдання 4
let number = prompt('Please input number of month');
if(number>=1 && number<=2){
      console.log('winter');
}
else if(number ==12){
      console.log('winter');
}
else if(number>=3 && number<=5){
      console.log('spring');
}
else if(number>=6 && number<=8){
      console.log('summer');
}
else if(number>=9 && number<=11){
      console.log('autumn');
}
else if(number == null){
      console.log('exit');
}
else if(number>=13 || number<=0){
      console.log('number wrong');
}