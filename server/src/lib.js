import * as moment from 'moment';
import _ from 'lodash';

function getRandomNumbers()
{
	let out = _.times(6, ()=>
	{
		return _.random(1,100);
	});

	return out;
}

function writeNumbersToSheet(data) {
	const sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1IgYo1Bj5kKliYGZbMxXJUkLMOOWGdjMPW-lEBwGLJJA/edit').getActiveSheet();
	const cell = sheet.getRange(1, 2);
	cell.setValue(new Date());

	data.forEach((number, i) => {
		const cell = sheet.getRange(i + 1, 1);
		cell.setValue(number);
	});
}

export {
    getRandomNumbers,
	writeNumbersToSheet
};
