const { json } = require("body-parser");
const fs = require("fs");

function saveDetails(data) {
  let details = loadDetailsInJSON();

  let duplicate = details.find((detail) => detail.username === data.username);

  if (!duplicate) {
    details.push(data);
    saveDataInStringFormat(details);
    return true;
  } else {
    return false;
  }
}

//helper Functions
function loadDetailsInJSON() {
  try {
    let dataBuffer = fs.readFileSync("users.json");
    let dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
}

function saveDataInStringFormat(data) {
  const dataJson = JSON.stringify(data);
  fs.writeFileSync("users.json", dataJson);
}

module.exports = { saveDetails, loadDetailsInJSON };
