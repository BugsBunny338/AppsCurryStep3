<template>
<div>
	<h1>Home</h1>
	<h3>Numbers executed from GoodData platform</h3>
	<p>Domain: https://interactive-examples-proxy.herokuapp.com/, workspace: psk46untnn2vhzs5bokdav3bu2puf6s6</p>
	<p>Example: <a href="https://codesandbox.io/s/github/gooddata/gooddata-ui-examples/tree/master/example-execute?file=/src/App/index.js" target="_blank">https://codesandbox.io/s/github/gooddata/gooddata-ui-examples/tree/master/example-execute?file=/src/App/index.js</a></p>
	<p>Metric: aaZgQ8Oqib25, attributes: label.csv_order_lines.category, label.customers.customerregion</p>
	<ul>
		<li v-for="num in numbers">{{num}}</li>
	</ul>

</div>
</template>
<script>
import BackEndWrapper from '../services/BackEndWrapper';
import bearFactory, { AnonymousAuthProvider } from "@gooddata/sdk-backend-bear";
import { newMeasure, newAttribute } from "@gooddata/sdk-model";
export default
{
  name: 'Home',
  data(){
  	return ({
  		bw:new BackEndWrapper(),
  		numbers:[]
  	});
  },
  mounted()
  {
      this.loadRequests();
  },
  methods:
  {
  	loadRequests()
  	{
		const backend = bearFactory({
			hostname: "https://interactive-examples-proxy.herokuapp.com/"
		}).withAuthentication(new AnonymousAuthProvider());

		backend
			.workspace("psk46untnn2vhzs5bokdav3bu2puf6s6")
			.execution()
			.forItems([
				newMeasure('aaZgQ8Oqib25'),
				newAttribute('label.csv_order_lines.category'),
				newAttribute('label.customers.customerregion')
			])
			.execute()
			.then(result => {
				console.log('result', result);
				result.readAll().then(dataView => {
					const data = dataView.data[0];
					console.log('data', data);

					this.numbers = data;
					this.bw.writeNumbersToSheet(data);
				});
			});

		console.log('bear', bearFactory);
		console.log('provider', AnonymousAuthProvider);
		console.log('backend', backend);

	  	this.bw.getRandomNumbers().then(function(res)
	  	{
	  		// this.numbers = res;
	  	}.bind(this),
	  	function(err)
        {
          //this.showError();

        }.bind(this));
  	}

  }

}
</script>
