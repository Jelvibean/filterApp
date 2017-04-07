(function(){


	var offerList = document.getElementById('offerTypesList');
	var data = {
		title: 'Offer Types',
		list: [
			{
				name: 'All'
			},
			{
				name: 'Bonus Free Play'
			},
			{
				name: 'Dining Special Event'
			},
			{
				name: 'Bonus Comp Dollars'
			},
			{
				name: 'Special Event'
			},
			{
				name: 'Entertainment'
			},
			{
				name: 'Bingos'
			}
		]
	};

	var template = Handlebars.compile(document.getElementById('OfferTypes').innerHTML);	
	offerList.innerHTML = template(data);

})();