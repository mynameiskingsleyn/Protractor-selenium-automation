<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <link rel="stylesheet" href="./style/style.css">

    <title>Superhero Roster</title>
</head>

<body>
  <!-- bug in here -->
    <div id="overlay">
        <div class="row justify-content-md-center">
            <h1 id="login-title">Welcome. Please Log In.</h1>
        </div>

        <div class="row justify-content-md-center">
            <div class="col-8">
                <form id="form-login">
                    <div class="form-group">
                        <label for="loginEmail">Email address</label>
                        <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="loginPassword">Password</label>
                        <input type="password" class="form-control" id="loginPassword" placeholder="Password">
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="rememberLoginChk">
                        <label class="form-check-label" for="rememberLoginChk">Remember Login</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div class="alert alert-danger hide" role="alert" id="login-alert">
                    An e-mail and password are required.
                </div>
            </div>
        </div>
    </div>
<!-- bug end -->
    <div class="row">
        <div class="col-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Heroes</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="./index.html">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://glitchitsystem.com/">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Hero Facts
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#wolverineModal">Wolverine</a>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#spidermanModal">Spider-Man</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick="logout()" href="#">Logout</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0" id="search-form">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search-box">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <!-- Wolverine Modal -->
            <div class="modal fade" id="wolverineModal" tabindex="-1" role="dialog" aria-labelledby="wolverineModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="wolverineModalLabel">Wolverine Fact</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Wolverine made his first comic book appearance in 1974.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Spider-Man Modal -->
            <div class="modal fade" id="spidermanModal" tabindex="-1" role="dialog" aria-labelledby="spidermanModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="spidermanModalLabel">Spider-Man Fact</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row justify-content-md-center">
            <h1>Superhero Roster</h1>
        </div>

        <div class="row justify-content-md-center bg-light">
            <img src="./images/superhero.png" alt="Superhero Image">
        </div>

        <div class="row justify-content-md-center">
            <div class="col-8">
                <p>
                    Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start
                    with. Add as many heroes as you would like to round out your dream team.
                </p>
            </div>
        </div>

        <div class="row justify-content-md-center bg-light">
            <h3>Build Your Superhero Roster:</h3>
        </div>

        <div class="row justify-content-md-center bg-light">
            <div class="col-9">
                <ul class="list-group" id="hero-list">
                    <li class="list-group-item">Wolverine</li>
                    <li class="list-group-item">Iron Man</li>
                    <li class="list-group-item">Deadpool</li>
                    <li class="list-group-item">Thor</li>
                    <li class="list-group-item">Spider-Man</li>
                </ul>
                <hr>

                <div class="alert alert-danger hide" role="alert" id="addHero-Alert">
                    This is a danger alert???check it out!
                </div>

                <form id="addHero-form">
                    <div class="form-group">
                        <label for="heroInput">ADD A SUPERHERO</label>
                        <input type="text" class="form-control" id="heroInput" placeholder="Enter Hero">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

        <div class="row justify-content-md-center">
            <div class="col-9">
                <h4>Vote for your favorite Superhero movie</h4>
                <div class="alert alert-primary hide" role="alert" id="vote-alert">
                    Thanks for voting!
                </div>
                <form id="vote-form">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="heroMovieRadio" id="heroMovieRadio1" value="option1" checked>
                        <label class="form-check-label" for="heroMovieRadio1">
                            X-Men
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="heroMovieRadio" id="heroMovieRadio2" value="option2">
                        <label class="form-check-label" for="heroMovieRadio2">
                            Avengers
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="heroMovieRadio" id="heroMovieRadio3" value="option3">
                        <label class="form-check-label" for="heroMovieRadio3">
                            Deadpool
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="heroMovieRadio" id="heroMovieRadio4" value="option3">
                        <label class="form-check-label" for="heroMovieRadio4">
                            Spider-Man Homecoming
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="heroMovieRadio" id="heroMovieRadio5" value="option3">
                        <label class="form-check-label" for="heroMovieRadio5">
                            Iron Man
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Movie</th>
                            <th scope="col">Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="movieName1">X-Men</td>
                            <td id="movieVotes1">10</td>
                        </tr>
                        <tr>
                            <td id="movieName2">Avengers</td>
                            <td id="movieVotes2">5</td>
                        </tr>
                        <tr>
                            <td id="movieName3">Deadpool</td>
                            <td id="movieVotes3">22</td>
                        </tr>
                        <tr>
                            <td id="movieName4">Spider-Man Homecoming</td>
                            <td id="movieVotes4">12</td>
                        </tr>
                        <tr>
                            <td id="movieName5">Iron Man</td>
                            <td id="movieVotes5">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script src="./js/script.js"></script>
</body>

</html>
