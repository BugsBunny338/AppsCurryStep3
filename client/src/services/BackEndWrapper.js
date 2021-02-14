'use strict';
import MockBackEnd from './MockBackEnd.js';
import GASBackEnd from './GASBackEnd.js';

class BackEndWrapper
{
	constructor()
	{
		if (typeof google !== 'undefined')
		{
			this.real = new GASBackEnd();
		}
		else
		{
			this.real = new MockBackEnd();
		}
	}

	getRandomNumbers()
	{
		return this.real.getRandomNumbers();
	}

	writeNumbersToSheet(data)
	{
		return this.real.writeNumbersToSheet(data);
	}

};

export default BackEndWrapper;

