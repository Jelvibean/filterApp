(function(){
	var content = document.getElementById('content');
	var html = '';
	var data = {
		title: 'Really Cool People',
		people: [
			{
				name: 'John',
				age: 34,
				gender: 'male'
			},
			{
				name: 'Jane',
				age: 23,
				gender: 'female'
			},
						{
				name: 'Betty',
				age: 28,
				gender: 'female'
			},
			{
				name: 'Carl',
				age: 45,
				gender: 'male'
			}
		]
	};

	var template = Handlebars.compile(document.getElementById('people-template').innerHTML);

	content.innerHTML = template(content);

})();