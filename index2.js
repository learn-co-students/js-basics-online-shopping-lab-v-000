var asdf = new Array()
asdf = [1,2,3,4,5]

var wert = new Array()
wert = ["cat", "dog", "rat", "bird", "frog"]

var zxcv = new Array 
zxcv = [ 'a', 'b', 'c', 'd', 'e' ]

function wordCap(word){
 console.log(word.toUpperCase());
}

function aryCap(array){
  array.forEach( item => {
    if (typeof item === "number" ){
      numCap(item);
    } else {
      console.log(item.toUpperCase());
    }
  })
}

function numCap(num){
  console.log( `YOU HAVE CHOSEN NUMBER: ` + num);
}

function boolCap(bool){
  console.log(bool.toUpperCase());
}

// function parseData(data){
//   if "string"){
//     wordCap(data);
//     } else {
//       if "array"){
//       aryCap(data);
//       } else {
//         if "number"){
//         numCap(data);
//         } else {
//           if (data == true || data == false){
//           wordCap(data);
//         }
//       }
//     }
//   }
// }

function parseData(data){

  switch (typeof data){

    case "string": 
      wordCap(data);
    break;

    case "object":
      aryCap(data);
    break;

    case "array":
      aryCap(data);
    break;
    
    case "number":
      numCap(data);
    break;

  //  case (data == true || data == false):
  //   wordCap(data);
  default:
  console.log("What type of data did you enter???");
  }
}