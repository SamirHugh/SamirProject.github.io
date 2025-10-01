<?php
/*
----------
PHP File for Fashion Filtering Website
Edited by Brady Farabaugh
02/21/2025 - ??/??/????
takes inputs from feedback section and adds them to a database, then displays thank you message
----------
*/

    $server_name = "localhost";
    $username = "root";
    $password = "SDRHSQL18!";
    $dbname = "FashionfilteringSystem";

    $conn = new mysqli($server_name, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }

    $min = 0;
    $max = 5;

    $rating = filter_input(INPUT_POST, "rating", FILTER_SANITIZE_NUMBER_INT);
    $review = filter_input(INPUT_POST, "feedback", FILTER_SANITIZE_STRING);

    if (filter_var($rating,FILTER_VALIDATE_INT, array("options" => array("min_range"=>$min, "max_range"=>$max))) === false){
        echo "Invalid Integer Input, Please Refresh the Page and Input a Valid Number";
    }

    echo $rating;
    echo $review;

    $sql = "INSERT INTO Feedback (Review, Review_Contents) VALUES (?, ?)";
    $s = $conn->prepare($sql);
    $s->bind_param("ss", $rating, $review);
    $s->execute();

?>


<!DOCTYPE hmtl>

<html>
    <head>
        <title>Thank You!</title>
        <link rel="stylesheet" type="text/css" href="FFS.css">
    </head>

    <body>
        <h1>FEEDBACK RECIEVED</h1>
        <h3>Thank You For Submitting Your Feedback</h3>
        <a href="FFS.hmtl">RETURN</a>

        <?php echo "You entered " . $rating . "stars";
        echo "You left the following feedback: " . $review;?>

    </body>








</html>