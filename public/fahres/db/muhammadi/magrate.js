const fs = require('fs')
const page_x_y = require('./page_x_y.json');
const sura_aya_id = require('./sura_aya_id.json');

const saveTojson = (data) => {
  try {
       console.log(" start warite")
    fs.writeFileSync("indexPage.json", JSON.stringify(data));
    console.log("end save json :)")
  } catch (err) {
    console.error(err)
  }
}
//play merge thow object
const outObject = [];
console.log("play merge foreach")
page_x_y.forEach(function(item,index) {
outObject.push({...page_x_y[index],...sura_aya_id[index]})
})

saveTojson(outObject)