'use strict';

class GASBackEnd
{
	constructor()
	{

	}
	getRandomNumbers()
	{
		return new Promise(function(resolve,reject)
		{
			google.script.run.withSuccessHandler(function(res)
			{
				resolve(res);
			})
			.withFailureHandler(function()
			{
				reject();
			}).getRandomNumbers();
		});
	}
	writeNumbersToSheet(data)
	{
		return new Promise(function(resolve,reject)
		{
			google.script.run.withSuccessHandler(function(res)
			{
				resolve(res);
			})
			.withFailureHandler(function()
			{
				reject();
			}).writeNumbersToSheet(data);
		});
	}
}

export default GASBackEnd;
