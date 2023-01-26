<?php
$name = $_POST['emailName'];
$email = $_POST['emailEmail'];
$message = $_POST['emailMessage'];

// Enter email address below
$to = "name@example.com";

$subject = $_POST['emailSubject'];
$headers = "From: " . $email . "\r\n";

$body = "Name: " . $name . "\n\nEmail: " . $email . "\n\nMessage: " . $message;

if (mail($to, $subject, $body, $headers)) {
  echo "Form submitted successfully!";
} else {
  echo "Error: form submission failed.";
}
?>