$(() => {

  $('head')[0].innerHTML = `
<meta charset="utf-8">
<title>Study Guy Tutoring</title>
<link rel="stylesheet" href="styles.css" type="text/css" media="screen" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  ` + $('head')[0].innerHTML;

  $('body')[0].innerHTML = `
<div id="nav">
  <h1>Study Guy Tutoring</h1>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li>|</li>
      <li><a href="schedule.html">Schedule</a></li>
      <li>|</li>
      <li><a href="resources.html">Resources</a></li>
      <li>|</li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</div>
  ` + $('body')[0].innerHTML;

});
