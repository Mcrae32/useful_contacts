var options = {
  valueNames: [ 'name', 'born' ],
  // Since there are no elements in the list, this will be used as template.
  item: '<li><h3 class="name"></h3><p class="born"></p></li>'
};

var values = [
  {
    name: 'Jonny Strömberg',
    born: 1986
  },
  {
    name: 'Jonas Arnklint',
    born: 1985
  },
  {
    name: 'Martina Elm',
    born: 1986
  }
];

var userList = new List('users', options, values);

userList.add({
  name: 'Gustaf Lindqvist',
  born: 1983
});



/*var users;

$(document).ready(function(){

	var userList = new List('users', options, users);

	var users = [
		{
			"NAME":"111",
			"LAST_NAME":"222",
			"SECOND_NAME":"333",
			"EMAIL":"BrijinVM@iceberry.ru",
			"PERSONAL_MOBILE":"+7 (999) 000-00-00",
			"WORK_POSITION":"444",
			"PICTURE":"../img/7dc6467689a3c072dce28875b7fafa9a.jpg"
		}
	];

	var options = {
	  valueNames: [ 'name', 'born' ],
	  // Since there are no elements in the list, this will be used as template.
	  item: '<li><h3 class="name"></h3><p class="born"></p></li>'
	};

	var values = [
	  {
	    name: 'Jonny Strömberg',
	    born: 1986
	  },
	  {
	    name: 'Jonas Arnklint',
	    born: 1985
	  },
	  {
	    name: 'Martina Elm',
	    born: 1986
	  }
	];

	var userList = new List('users', options, values);

	userList.add ({
	  name: 'Gustaf Lindqvist',
	  born: 1983
	});
 
});*/

