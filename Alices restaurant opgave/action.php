
<p>Tak for en bekræftelse på din booking.</p>

<?php
// besked
$msg = "Email fra " . $_POST['Name'] . " Email: " . $_POST['Name'];


$msg = wordwrap($msg,70);

// send email
mail("someone@example.com","My subject",$msg);
?>
