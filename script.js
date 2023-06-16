function highlight() {
    //Write your code here
	<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight {
      color: green;
    }
  </style>
</head>
<body>
  <p>
    This is a <strong>sample</strong> paragraph with <strong>bold</strong> words.
  </p>
  <a id="highlightLink" href="#" onmouseover="highlight()" onmouseout="returnNormal()">Hover over me</a>

  <script src="script.js"></script>
</body>
</html>



}


function return_normal() {
    //Write your code here
function highlight() {
  var boldWords = document.getElementsByTagName('strong');
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.add('highlight');
  }
}

function returnNormal() {
  var boldWords = document.getElementsByTagName('strong');
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].classList.remove('highlight');
  }
}

    

