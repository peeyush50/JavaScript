const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut id for ${myObject[key]}`);
}

const programming =["js","rb","py","java","xpp"]

for (const key in programming) {
   console.log(programming[key] );
}

const map =new  Map()
map.set('IN',"india")
map.set('Usa',"United state")
map.set('fr',"france")

for (const key in map) {
//   console.log(key,':-',value);
}