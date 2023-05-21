<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "rebecatimoteojb@gmail.com";
  $subject = "New Contact Form Submission";
  $body = "Name: " . $name . "\n\nEmail: " . $email . "\n\nMessage: " . $message;

  $headers = "From: " . $email;

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo "Thank you for your message. We'll be in touch soon!";
  } else {
    echo "Oops! Something went wrong. Please try again later.";
  }
}
?>
