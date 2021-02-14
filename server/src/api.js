function doGet()
{
	return HtmlService
      .createTemplateFromFile('index')
      .evaluate();

}

function getRandomNumbers()
{
	return AppLib.getRandomNumbers();
}


function writeNumbersToSheet(data)
{
	return AppLib.writeNumbersToSheet(data);
}
