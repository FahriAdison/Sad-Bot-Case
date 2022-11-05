const fs = require('fs')

const ceemdetd = JSON.parse(fs.readFileSync('./database/todaycmd.json'))

/**
 * for add total command
 * @params {direktori} 
 * dah lah
**/
const cmdaddtd = () => {
	ceemdetd[0].todaycmd += 1
	fs.writeFileSync('./database/todaycmd.json', JSON.stringify(ceemdetd))
}

module.exports = {
	cmdaddtd
}