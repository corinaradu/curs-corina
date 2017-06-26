$(document).ready(function() {

    var root = 'http://jsonplaceholder.typicode.com';

    $.ajax({
        url: root + '/users',
        method: 'GET'
    }).then(function(data) {
        $.map(data, function(user, index) {
            var template =
                '<div id="user_' + index + '" style="text-align: left">' +
                '<h3> User ID: ' + user.id + '</h3>' +
                '<h2> Name: ' + user.name + '</h2>' +
                '<p> Username: ' + user.username + '</p>' +
                '<p> E-mail: ' + user.email + '</p>' +
                '<p> Street: ' + user.address.street + '</p>' +
                '<p> Suite: ' + user.address.suite + '</p>' +
                '<p> City: ' + user.address.city + '</p>' +
                '<p> Zipcode: ' + user.address.zipcode + '</p>' +
                '<p> Phone: ' + user.phone + '</p>' +
                '<p> Company.name: ' + user.company.name + '</p>' +
                '<p> Company.catchPhrase: ' + user.company.catchPhrase + '</p>' +
                '<p> Company.bs: ' + user.company.bs + '</p>';
            '</div>';

            var template1 =
                '<div id="user_' + index + '" style="text-align: right">' +
                '<h3> User ID: ' + user.id + '</h3>' +
                '<h2> Name: ' + user.name + '</h2>' +
                '<p> Username: ' + user.username + '</p>' +
                '<p> E-mail: ' + user.email + '</p>' +
                '<p> Street: ' + user.address.street + '</p>' +
                '<p> Suite: ' + user.address.suite + '</p>' +
                '<p> City: ' + user.address.city + '</p>' +
                '<p> Zipcode: ' + user.address.zipcode + '</p>' +
                '<p> Phone: ' + user.phone + '</p>' +
                '<p> Company.name: ' + user.company.name + '</p>' +
                '<p> Company.catchPhrase: ' + user.company.catchPhrase + '</p>' +
                '<p> Company.bs: ' + user.company.bs + '</p>';
            '</div>';

            if (index % 2 == 0) {
                $('#users').append(template);
            } else {
                $('#users').append(template1);
            }
        });
    })

    $(".apare").click(function() {
        $('#users div').eq(0).show();
        $('#users div').eq(1).show();
    });

    $(".dispare").click(function() {
        $('#users div').eq(0).hide();
        $('#users div').eq(1).hide();
    });

    $('.loadPosts').click(function(ev) {
        $('#users div').eq(0).find('h2').css('color', 'blue')
    });
	
	 $(".google").click(function() {
        window.location = 'http://google.com';
    });


/*
	CONSOLE LOG
	====================================================
	
	1. Selectati toti children din #users/
    $('#users').children();

	2. Elementele 2 si 7 aiba background rosu
    $('#users div').eq(1).css('background', 'red');
    $('#users div').eq(6).css('background', 'red');
    
	3. Selectati first/last element
    console.log('first', $('#users div').first());	
    console.log('last', $('#users div').last());
	
	4. Faceti append de text pe fiecare children adaugand textul 'Text appended'.
    var appendtext = $('#users div').children().append("<b>Text appended</b>");
    console.log('appendtext', $('#users div').children().append("<b>Text appended</b>"));
	
	5. Toti children ai unui children sa aiba culoarea albastru, cu exceptia elementului 2.
    $('#users div').first().children().not(':eq(1)').css('color', 'blue');
	
	6.Inlocuiti text la primul child element din childrenii #users
	$('#users div h3').html('Text schimbat');
	
	7. Cautati #users   si afisati in consola: children, siblings, parent;
	$('#users').children();
	$('#users').siblings();
	$('#users').parent();
   
	8. Toate div-urile ce au pozitionare dreapta sa le aplicati bg rosu fin jquery.
	$('#users div:nth-child(even)').css('background', 'red');
   
   
  
*/

});
