function loadPosts() {
  var root = 'http://jsonplaceholder.typicode.com';

  $.ajax({
    url: root + '/posts',
    method: 'GET'
  }).then(function(data) {
    $.map(data, function(post, index){
      var template =  '<div>' + 
                        '<h2>' + post.title + '</h2>' +
                        '<p>' + post.body + '</p>' +
                      '</div>';
					 
	$('#postss').append(template);
    });

  });
}