<?php
session_start();
	if($_GET["logout"]==1 AND $_SESSION['id']){
      session_destroy();
      $message = "You logged out. Have a nice day";
    }
	include("connection.php");
	if ($_POST['SignUp']){
		if (!$_POST['email'])
			$error.= "<br /> Please enter your email";
		else if (!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
			$error.= "<br /> Please enter a valid email address";
		if (!$_POST['password'])
			$error.= "<br /> Please enter your password";
		else{
			if (strlen($_POST['password']) < 6 )
				$error.= "<br /> Please enter a password with at least 6 characters";
			if (!preg_match('`[A-Z]`',$_POST['password']))
				$error.= "<br /> Please include at least one capital letter in your password";
		}
		if($error)
			$errors = "There were error(s) in your signup details: ".$error;
		else{
			$query= "SELECT * FROM users WHERE email='".mysqli_real_escape_string($link,$_POST['email'])."'";
			$result = mysqli_query($link,$query);
			$results = mysqli_num_rows($result);
			if ($results)
				$errors = "That email is already in use!";
			else{
				$query = "INSERT INTO `users` (`email`, `password`) VALUES ('".mysqli_real_escape_string($link, $_POST['email'])."', '".md5(md5(REDACTED).REDACTED)."')";
				mysqli_query($link,$query);
				$message= "You've been signed up!";
				$_SESSION['id'] = mysqli_insert_id($link);
				//Redirect to logged in page
				header("Location:mainpage.php");
			}
		}
	}
	if ($_POST['Login']){
		$query = "SELECT * FROM users WHERE email='".mysqli_real_escape_string($link, $_POST['loginemail'])."'AND 
		password='" .md5(md5(REDACTED) .REDACTED). "'LIMIT 1";
		$result = mysqli_query($link,$query);
		$row = mysqli_fetch_array($result);
		if ($row){
			$_SESSION['id'] = $row['id'];
			//Redirect to login page
			header("Location:mainpage.php");
		}
		else {
			$errors = "We could not find a user with that email and password. Please try again";
		}
	}
  ?>