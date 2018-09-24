var followers = 4980;
var likes = 6048;
var comments = 186;

function loadPage() {
  document.getElementById('followers').innerHTML = followers;
  document.getElementById('likes').innerHTML = likes;
  document.getElementById('comments').innerHTML = comments;
}

function follow() {
  followers += 1;
  document.getElementById('followers').innerHTML = followers;
}

function show(){
  document.getElementById('read').setAttribute("onclick","hide()");
  document.getElementById('fade').setAttribute("class","read-open");
  document.getElementsByClassName('post-content')[0].style.maxHeight = "none";
  document.getElementsByClassName('post-content')[0].style.color = "black";
  document.getElementsByClassName('post-content')[0].style.opacity = 1;
  document.getElementById('read').innerHTML= "<p>Read Less</p>";

}

function hide(){
  document.getElementById('read').setAttribute("onclick","show()");
  document.getElementById('fade').setAttribute("class","read-close");
  document.getElementsByClassName('post-content')[0].style.maxHeight = "120px";
  document.getElementsByClassName('post-content')[0].style.color = "grey";
  document.getElementById('read').innerHTML= "<p>Read More</p>";
}
