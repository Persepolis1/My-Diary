<?php include("login.php");?>
<!DOCTYPE html>

<html lang="en">

  <head>

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>Your Secret Diary</title>



    <!-- Bootstrap -->

    <link href="../css/bootstrap.min.css" rel="stylesheet">



    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->

    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

    <!--[if lt IE 9]>

      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>

      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

    <![endif]-->

    <style type="text/css">
      .maincontainer{

        background: url(../img/diarysplash.jpg);

        width: 100%;

        height: 100%;

        background-size: cover;

        background-position: center;


      }

      .center{

        text-align: center;

      }

      h1,p,label{
        color: white;
      }

      p{

        padding-top: 15px;

        padding-bottom: 15px;

      }

     
      .deadcenter{
        position: absolute;
        top:25%;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
      .btn-lg{
        margin-top:10px;
      }
      .input-group-addon{
        min-width: 90px;
        text-align: left;
      }

    </style>

  </head>

  <body>
  <div class="navbar navbar-inverse navbar-fixed-top">
  
    <div class="container">
    
      <div class="navbar-header">
      
        <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        
          <span class="icon-bar"></span>
          
          <span class="icon-bar"></span>
          
          <span class="icon-bar"></span>
            
        </button>
        
        <a class="navbar-brand">Secret Diary - Log in to the right</a>
        
      </div>
      
      <div class="collapse navbar-collapse">
      
        <form class="navbar-form navbar-right" method="post"> 
        
          <div class="form-group">
          
            <input type="email" name="loginemail" placeholder="Email" class="form-control" value="<?php echo addslashes($_POST['loginemail']); ?>" />
                                                     
          </div>
          
          <div class="form-group">
          
            <input type="password" name="loginpassword" placeholder="Password" class="form-control" value="<?php echo addslashes($_POST['loginpassword']); ?>" />
                                                        
          </div>
          
          <input type="submit" name= "Login" class="btn btn-success" value="Log In">
          
        </form>
        
      </div>
      
    </div>  
    
  </div>

    <div class="container maincontainer">

      <div class="row">

        <div class="col-md-6 center deadcenter">

          <h1 class="center">Your Secret Diary</h1>

          <p class="lead center">Your own secret diary, sign up below</p>
          <?php 
            if ($errors) {
        
              echo '<div class="alert alert-danger">'.addslashes($errors).'</div>';
            }
            if($message)
               echo '<div class="alert alert-success">'.addslashes($message).'</div>';
           ?>

          <form method="post">

            <div class="form-group">
              <div class="input-group">                
                <span class="input-group-addon">Email</span>
                <input type="text" class="form-control" name="email" id="email" placeholder="Your email">
              </div>
            </div>

            

            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">Password</span>
                <input type="password" class="form-control" name="password" id="password" placeholder="6 Characters minimum including 1 Capital letter">
              </div>
              <input type="submit" class="btn btn-success btn-lg" name="SignUp" value="Sign up">
            </div>

          </form>
         

        </div>

      </div>

    </div>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

    <!-- Include all compiled plugins (below), or include individual files as needed -->

    <script src="../js/bootstrap.min.js"></script>

    <script type="text/javascript">

      $('.maincontainer').css("min-height",$(window).height());


    </script>

  </body>

</html>