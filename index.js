// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

//wrapGifts(gifts);

function writeCards (nameArray , event) {
    let messages = []
for (let i = 0; i < nameArray.length; i++) {
messages.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
} 
return messages;
}

function countDown(number){
for (let i=number; i>=0; i--) {
    console.log(i)
}
}
//let countDown = 10;
//while (countDown > 0) {
    //console.log(countDown--);
//}