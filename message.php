<?php

  header("Content-Type: application/json");
  
  $First_Name = $_POST['First_Name'];
  $Last_Name= $_POST['Last_Name'];
  $Phone = $_POST['Phone'];
  $Brand = $_POST['Brand'];
  $Model = $_POST['Model'];
  $Year = $_POST['Year'];

  $to = "vinayagam.mhb@gmail.com";
  $from = "vinayagam.mhb@gmail.com";


  $Subject = "All State Auto Body and Repair Contact-Us Form";
  $headers = "From: " . $from . "\r\n";
  $headers .= "Reply-To: ". $from . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  $headers1 = "From: " . $to . "\r\n";
  $headers1 .= "Reply-To: ". $to. "\r\n";
  $headers1 .= "MIME-Version: 1.0\r\n";
  $headers1 .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    
  // prepare email body text
  $body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
  $body .= "<table style='width: 100%;'>";
  $body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";

  $body .= "</td></tr></thead><tbody>";
  $body .= "<tr><td style='border:none;'><strong>Name:</strong> {$First_Name} {$Last_Name}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Mobile No:</strong> {$Phone}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Mobile No:</strong> {$Phone}</td></tr>";

  $body .= "<tr><td style='border:none;'><strong>Brand:</strong> {$Brand}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Model:</strong> {$Model}</td></tr>";
  $body .= "<tr><td style='border:none;'><strong>Year:</strong> {$Year}</td></tr>";
  $body .= "</tbody></table>";
  $body .= "</body></html>";
  // prepare reply email body text
  
  // send email
  if(mail($to, $Subject, $body, $headers)){
    echo $success;
    $data =  array("result" => "Message sended successfully!!");
    echo json_encode($data, true);
  }
  else{
    $data =  array("result" => "Mail Not send");
    echo json_encode($data, true);
  }
    
    

?>