<!DOCTYPE html>
<html>
<body>

<ul id="nav">
	<li><a href="about">About Us</a></li>
	<li><a href="contact">Contact Us</a></li>
	<li><a href="archives">Our Archives</a></li>
	<li><a href="free">Free Stuff</a></li>
</ul>

<p>Note: We use href="#" for test links. In a real web site this would be URLs.</p>

</body>

<script type="text/javascript">

function setActive() {
	  aObj = document.getElementById('nav').getElementsByTagName('a');
	  for(i=0;i<aObj.length;i++) { 
	    if(document.location.href.indexOf(aObj[i].href)>=0) {
	      aObj[i].className='active';
	    }
	  }
	}
	
</script>
</html>
