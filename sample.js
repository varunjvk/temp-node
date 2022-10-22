const amount= 15
if(amount <10){
  console.log('Small Number')
}
else{
  console.log('large number')
}
console.log('job done');

// setInterval(()=>{
//   console.log('test');
// },1000)


// function ch() {
//   let dateTime=new Date();
//   let time=dateTime.toLocaleTimeString();
//   console.log(time);
// }
// setInterval(ch,5000)
let count=0;
let interval = setInterval(function(){
  count+=1;
  if(count==7){
    clearInterval(interval);
  }
  let dateTime=new Date();
  let time=dateTime.toLocaleTimeString();
  console.log(time);
},3000);
