let studname = [
{'FNAME':'rasem'},
{'FNAME':'5awand'},
{'FNAME':'doumet'},
{'FNAME':'anas'},
{'FNAME':'ramez'}
];
var _name = document.getElementById("std");
studname.forEach((x)=>{
  var o = document.createElement("option")
  o.innerHTML = x
  _name.appendChild(o)

});

console.log(studname)
console.log('stdname Length: ',studname.length)
studname.push({'FNAME':'Rony'})
console.log(studname)
console.log('stdname Length: ',studname.length)
console.log('students only:')
studname = studname.filter((x)=> x.FNAME != 'Rony')
console.log(studname)