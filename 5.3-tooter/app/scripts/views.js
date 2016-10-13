var $ = require('jquery');
var template = require('../templates/application.hbs');

function PostView(){
  $('body').append('<ul class="posts">');
  $('body').append(template());
}

PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title + '</h1><p>' + post.body + '</p></li>');
  });
}

module.exports = {
  'PostView': PostView
};

$('form').on('submit', function(event){
  event.preventDefault();
  $(document).trigger('create:post', [{title: "Cool", body: "Cool"}]);
});
