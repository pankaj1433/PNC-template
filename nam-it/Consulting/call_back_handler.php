<?php 
$errors = '';
$myemail = 'contact-usa@nam-it.com';//<-----Put Your email address here.
if(empty($_POST['username'])  || 
   empty($_POST['email']) || 
   empty($_POST['subject']) || 
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['username']; 
$email_address = $_POST['email']; 
$subject = $_POST['subject']; 
$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message.\n ".
	"Here are the details:\n Name: $name \n Email: $email_address \n Subject: $subject \n Message: $message"; 
	
	$headers = "from: info@example.com\n"; 
	$headers .= "Reply-To: $email_address\n";
	$headers .= "cc: amit.mehta78@gmail.com, nitinkumar0107@gmail.com";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: call_back_thankyou.php');
} 

echo nl2br($errors);
?>