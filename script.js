const arr = [  
  {  
     "name":"Luke Skywalker",
     "height":"172",
     "mass":"77",
     "hair_color":"blond",
     "skin_color":"fair",
     "eye_color":"blue",
     "birth_year":"19BBY",
     "gender":"male"
  },
  {  
     "name":"C-3PO",
     "height":"167",
     "mass":"75",
     "hair_color":"n/a",
     "skin_color":"gold",
     "eye_color":"yellow",
     "birth_year":"112BBY",
     "gender":"n/a"
  },
  {  
     "name":"R2-D2",
     "height":"96",
     "mass":"32",
     "hair_color":"n/a",
     "skin_color":"white, blue",
     "eye_color":"red",
     "birth_year":"33BBY",
     "gender":"n/a"
  },
  {  
     "name":"Darth Vader",
     "height":"202",
     "mass":"136",
     "hair_color":"none",
     "skin_color":"white",
     "eye_color":"yellow",
     "birth_year":"41.9BBY",
     "gender":"male"
  },
  {  
     "name":"Leia Organa",
     "height":"150",
     "mass":"49",
     "hair_color":"brown",
     "skin_color":"light",
     "eye_color":"brown",
     "birth_year":"19BBY",
     "gender":"female"
  },
  {  
     "name":"Owen Lars",
     "height":"178",
     "mass":"120",
     "hair_color":"brown, grey",
     "skin_color":"light",
     "eye_color":"blue",
     "birth_year":"52BBY",
     "gender":"male"
  },
  {  
     "name":"Beru Whitesun lars",
     "height":"165",
     "mass":"75",
     "hair_color":"brown",
     "skin_color":"light",
     "eye_color":"blue",
     "birth_year":"47BBY",
     "gender":"female"
  },
  {  
     "name":"R5-D4",
     "height":"97",
     "mass":"32",
     "hair_color":"n/a",
     "skin_color":"white, red",
     "eye_color":"red",
     "birth_year":"unknown",
     "gender":"n/a"
  },
  {  
     "name":"Biggs Darklighter",
     "height":"183",
     "mass":"84",
     "hair_color":"black",
     "skin_color":"light",
     "eye_color":"brown",
     "birth_year":"24BBY",
     "gender":"male"
  },
  {  
     "name":"Obi-Wan Kenobi",
     "height":"182",
     "mass":"77",
     "hair_color":"auburn, white",
     "skin_color":"fair",
     "eye_color":"blue-gray",
     "birth_year":"57BBY",
     "gender":"male"
  }
]

function editName(arr) {
  return arr.map(function (item) {
   let itemToName={};  
    let newItem = Object.assign({}, item);
    Object.keys(newItem).forEach(item => {itemToName[item.replace("name", "label")] = newItem[item]}); 
    return itemToName;  
  }) 
}

function isNumber(item){
   return item.match(/^[0-9]+$/) != null;
}
function editNumber(arr) {
   return arr.map(function(item) {
   let newItem = Object.assign({}, item);
   Object.keys(newItem).forEach(item =>newItem[item] = (isNumber(newItem[item]) ? parseInt(newItem[item]) : newItem[item]));
   return newItem;
   });
}

function edits(arr){
   return arr.map(function(item){
   let itemToSend = {};
   let newItem = Object.assign({}, item);
   Object.keys(newItem).forEach(item => {itemToSend[item.replace("_", " ")] = newItem[item]}); 
   return itemToSend;  
   })
}

function getGender (arr, gender){
   return arr.filter(item => item.gender === gender)
};

function pushObjects(arr,item){ //функция добавляет новый обьект в массив третьим по счету
   let startArr = arr.slice(0,2);
   let endArr = arr.slice(2);
   let newArr = [...startArr,item,...endArr];
   return newArr;
}

const newObject = pushObjects(arr,{
   "name":"some name",
   "height":"182",
   "mass":"77",
   "hair_color":"black",
   "skin_color":"red",
   "eye_color":"brown",
   "birth_year":"XXXXXX",
   "gender":"female"
});



console.log(editName(arr));  //Функция заменяет "name" на "label"
console.log(editNumber(arr)); // функция переобразовывает строку где одни числа в числовое значение
console.log(edits(arr)); // функция ищет в ключе "_"  и заменяет его на  пробел
console.log(getGender(arr,"female")); // фукция ищет только те обьекты , в которых пол соответсвует значению заданому втором аргументом
