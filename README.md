# gethash.js
HTML, Get values in address line with Javascript.<br>
<br>
How to use gethash.js<br>
<b>Example</b> :<br><br>
Address Line(Browser) : 
<pre>.../index.html#msg:YourMessage#show:true</pre>
index.html :<br>
<pre>
<script src="gethash.js"></script><br>
<script>
var message=get("msg");
var ms=get("show");

if(ms == true){
&emsp;document.write( message );
}
</script>
</pre>
<br>
<hr>
Created by Onur KOL<br>
http://instagram.com/onurkolofficial<br>
http://twitter.com/onurkolofficial<br>
http://facebook.com/onurkolofficial<br>
