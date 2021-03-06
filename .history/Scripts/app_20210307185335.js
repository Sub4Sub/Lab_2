/*
* Name: Brett Tindall & Emeka Okoisama
* Student Id: 100708109 & 
* Date Completed: 2021-02-05
*/

"use strict"; 

var User = /** @class */ (function () {
  
  //User parameterized constructor
  function User(firstName, lastName, userName, emailAddress, password) {
    this.m_firstName = firstName;
    this.m_lastName = lastName;
    this.m_userName = userName;
    this.m_emailAddress = emailAddress;
    this.m_password = password;
  }

  //User toString function
  User.prototype.toString = function()
  {
    return "Full Name: " + this.m_firstName + " " + this.m_lastName +
    "\nUser Name: " + this.m_userName +
    "\nEmail Address: " + this.m_emailAddress +
    "\nPassword: " + this.m_password;
  };
  return User;
}());

//IIFE - Immediately Invoked Function Expression
(function()
{

    /*
      Function that displays the home page's content
    */
    function displayHome()
    {
      //Creating header element
        let indexHeading = document.createElement("h1");

        //Setting headers id and giving it text content
        indexHeading.setAttribute("id", "indexHeading");
        indexHeading.textContent = `Welcome to lab 2`;

        //Using jquery to select main element
        let mainContent = document.querySelector("main");
        //Appending header to end of main
        mainContent.appendChild(indexHeading);

        //Creating a div element that contains the pages content
        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<h4>By Brett Tindall and Emeka Okoisama</h4>
        <p id="paragraphThree">
        Hello, welcome to our first second submission for Webd 6201. This website consists of multiple web pages that give information about us
        and help demonstrate our prowess with jquery.
        </p>`;

        //Appending the div to the end of main
        mainContent.append(newDivTag);

        
    }

    /*
      Function that displays the project page's content
    */
    function displayProjects()
    {
      //Creating header element
        let projectHeading = document.createElement("h1");

        //Setting headers id and giving it text content
        projectHeading.setAttribute("id", "projectHeading");
        projectHeading.textContent = `Example Projects:`;

        //Using jquery to select main element
        let mainContent = document.querySelector("main");
        //Appending header to end of main
        mainContent.appendChild(projectHeading);

        //Creating a div element that contains the pages content
        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `<table class="table">
        <thead>
          <tr>
            <th scope="col">Project Title</th>
            <th scope="col">Project Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Modulus</th>
            <td>
              <p>
                The first project displayed on our website is a windows point form application called Modulus. The purpose of modulus is to 
                help organize a food businesses inventory and to keep track of any product being wasted. This is achieved by first storing all of 
                the food and inventory in a database, then every week all unused and/or wasted food is tracked in a report. Finally, 
                these reports are merged together and displayed as a monthly report. 
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">Webd 3201 website</th>
            <td>
              <p>
                The second project to be displayed on our website is a website that utilizes HTML, php and postgres sql to create a website that 
                 allows salesperson so sign-in and log information about their sales history. This site includes multiple user types, such as admin
                 and salesperson, and contains many functions and features, such as resetting a users password, adding clients, displaying user or client info in tables and 
                 logging calls with clients in real time.
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">Cobol based data processor</th>
            <td>
              <p>
                The final project being displayed on our website is a data processor that was creating using the language cobol. This application
                would take a .dat file containing raw data on a stores transactions as its input and process it by first validating the data, then
                the file is split into 2 .dat files where one contains all return transactions and one contains all sales transactions. Finally 
                both files are processed, formatted and displayed in 2 separate reports.
              </p>
            </td>
          </tr>
        </tbody>
      </table>`;

        //Appending the div to the end of main
        mainContent.append(newDivTag);

        
    }

    /*
      Function that displays the services page's content
    */
    function displayServices()
    {
      //Creating header element
        let serviceHeading = document.createElement("h1");

        //Setting headers id and giving it text content
        serviceHeading.setAttribute("id", "serviceHeading");
        serviceHeading.textContent = `Services`;

        //Using jquery to select main element
        let mainContent = document.querySelector("main");
        //Appending header to end of main
        mainContent.appendChild(serviceHeading);

        //Creating a div element that contains the pages content
        let newDivTag = document.createElement("div");
        newDivTag.innerHTML = 
        `
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">List of Skills</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Emeka Okoisama</th>
      <td>Search Engine optimization, Web Design and Testing and debugging.</td>
      <td><img src="./img/Professional_image.jpeg" alt="" border=3 height=150 width=150></img></td>
    </tr>
    <tr>
      <th scope="row">Brett Tindall</th>
      <td>Graphic Design, working with Hosting and working with databases.</td>
      <td><img src="./img/me.png" alt="" border=3 height=150 width=150></img></td>
    </tr>
  </tbody>
</table>`;

        //Appending the div to the end of main
        mainContent.append(newDivTag);

        
    }

    /*
      Function that displays the about us page's content
    */
   function displayAbout()
   {
      //Creating header element
      let aboutHeading = document.createElement("h1");

      //Setting headers id and giving it text content
      aboutHeading.setAttribute("id", "aboutHeading");
      aboutHeading.textContent = `About Us`;

      //Using jquery to select main element
      let mainContent = document.querySelector("main");
      //Appending header to end of main
      mainContent.appendChild(aboutHeading);
      //Creating a div element that contains the pages content
      let newDivTag = document.createElement("div");
      newDivTag.innerHTML = 
      `
      <table class="table">
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">List of Skills</th>
    <th scope="col">Resume</th>
    <th scope="col">Portrait</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">Emeka Okoisama</th>
    <td>Is a forward-thinking and enthusiastic individual with a passion for service delivery and customer satisfaction. I bring energy, enthusiasm, problem-solving and teamwork skills to any </b>
    position. I am highly motivated with outstanding interpersonal skills with the ability to work independently and in a team.</td>
    <td><a href="./resumes/Resume-Emeka-Okoisama.pdf">Link to Emeka's resume</a></td>
    <td><img src="./img/Professional_image.jpeg" alt="" border=3 height=150 width=150></img></td>
  </tr>
  <tr>
    <th scope="row">Brett Tindall</th>
    <td>Is a dedicated worker who is adept at programming in many different languages. I bring charisma and hard work to any project I work on and can flex to fill most roles. I am very passionate about my work and enjoy taking leadership roles.</td>
    <td><a href="./resumes/Resume-Brett-Tindall.pdf">Link to Brett's resume</a></td>
    <td><img src="./img/me.png" alt="" border=3 height=150 width=150></img></td>
  </tr>
</tbody>
</table>`;

//Appending the div to the end of main
mainContent.append(newDivTag);
   }
    /*
      Function that displays the contact page's content
    */
    function displayContact()
    {
      //Creating header element
      let contactHeading = document.createElement("h1");

      //Setting headers id and giving it text content
      contactHeading.setAttribute("id", "contactHeading");
      contactHeading.textContent = "Enter a Contact";

      //Using jquery to select main element
      let mainContent = document.querySelector("main");
      //Appending header to end of main
      mainContent.appendChild(contactHeading);

      //Creating a div element that contains the pages content
      let newDivTag = document.createElement("div");
      newDivTag.innerHTML = 
      `<div id="messageArea"></div>

      <div class="row justify-content-lg-center g-3">
        <form class="col-lg-6 col-md-10 col-sm-10">

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Full Name </span>
            <input id="fullName" type="text" class="form-control" aria-label="Full Name" aria-described by="Full Name Input"
            name="fullName" required>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Contact Number</span>
            <input id="contactNumber" type="tel" class="form-control" aria-label="Contact Number" aria-described by="Contact Number Input"
            name="contactNumber" required>
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
            <input id="emailAddress" type="email" class="form-control" aria-label="Email Address" aria-described by="Email Address Input"
            name="emailAddress" required>
          </div>

          <button id="sendButton" type="submit" class="btn btn-primary"><i class="fas fa-envelope fa-lg"></i> Send</button>
          <button id="cancelButton" type="reset" class="btn btn-warning"><i class="fas fa-undo fa-lg"></i> Cancel</button>
        </form>
      </div>`;
        
      //Appending the div to the end of main
      mainContent.append(newDivTag);

      //Selecting the send button
        $("#sendButton").on("click", function() 
    {
      
        location.href = './index.html';
      
    });

    }

    /*
      Function that displays the fixed header at the bottom of the page
    */
   function displayHeader()
   {
     //Selecting the body tag
     let mainContent = document.querySelector("body");

     //Creating a header tag 
     let newHeaderTag = document.createElement("header");

     //Filling header tag inner html with header content
     newHeaderTag.innerHTML = 
     `
     <header>
      <!-- Main Navigation -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">WEBD6201</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" id ="headerList">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="index.html"><i class="fas fa-home fa-lg"></i> Home</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" id="productsLink" aria-current="page" href="products.html"><i class="fas fa-cog fa-lg"></i> Products</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="services.html"><i class="fas fa-map fa-lg"></i> Services</a>
                </li>

                <li class="nav-item" id="aboutUsList">
                  <a class="nav-link" id="aboutUsLink" aria-current="page" href="about.html"><i class="fas fa-info fa-lg"></i> About Us</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="contact.html"><i class="fas fa-phone fa-lg"></i> Contact Us</a>
                </li>
                </ul>

                <ul class="navbar-nav me-auto mb-2 mb-lg-0" id ="loginHeaderList">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="login.html"><i class="fas fa-user fa-lg"></i> Login</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="register.html"><i class="fas fa-user fa-lg"></i> Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </header>
     `
    //Appending the header to the top of the body tag
     mainContent.prepend(newHeaderTag);

   }

    /*
      Function that displays the fixed footer at the bottom of the page
    */
    function displayFooter()
    {
      let mainContent = document.querySelector("main");

      let newFooterTag = document.createElement("footer");

      newFooterTag.innerHTML = 
      `
      <footer>
        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container-fluid">
              <h4><i class="far fa-copyright fa-lg"></i> Copyright 2021.</h4>
            </div>
          </nav>
    </footer>
      `

      mainContent.append(newFooterTag);

    }

    /*
      Function that adds a button to the human resources page
    */
    function addHumanResourcesButton()
    {

      let aboutUsLink = document.getElementById("aboutUsList");

      let newListItem = document.createElement("li");

      newListItem.innerHTML = 
      `
      <li class="nav-item">
        <a class="nav-link" id="HumanResourcesLink" aria-current="page" href="human-resources.html"><i class="fas fa-globe fa-lg"></i> Human Resources</a>
      </li>
      `

      aboutUsLink.after(newListItem);

    }

    /*
      Function that changes the products button's text to projects
    */
   function alterProductsButton()
   {

    //Selecting the 'products' list item button in the header
    let productsButton = document.getElementById("headerList").childNodes[3];

    //Creating a new list item
    let newListItem = document.createElement("li");

    //Setting the new list items inner html to the new button/ list item
    newListItem.innerHTML = 
   `
   <li class="nav-item">
               <a class="nav-link" aria-current="page" href="products.html"><i class="fas fa-cog fa-lg"></i> Projects</a>
             </li>
   `

   //Replacing the products button with the projects button 
    productsButton.replaceChild(newListItem, productsButton.childNodes[1]);

   }

   /*
      Function that displays the login page's content
    */
   function displayLogin()
    {

      // a div element that contains the pages main content
      let mainHTML = 
      `<div id="messageArea"></div>

      <div class="row" style="margin-top: 5%;">
      <div class="offset-md-3 col-md-6 col-sm-12">
      <div class="row justify-content-lg-center g-3" style="background-color: lightgrey; padding-bottom: 50px; ">
      <h1 class="display-4">Login</h1>
        <form>

          <div class="input-group mb-3">
            <span class="input-group-addon" id="inputGroup-sizing-default" style="padding: 5px; border-style: groove; width: 6%; ">
            <i class="fa fa-user" style="align-content: center;">
            </i>
            </span>
           
            <input type="text" class="form-control" id="contactName" name="userName"  required
            value="" placeholder="Enter your username">
          </div>
         
          
          <div class="input-group">
                          <span class="input-group-addon" style="padding: 5px; border-style: groove; width: 6%;">
                            <i class="fa fa-lock" style="padding: 5px;">
                            </i>
                          </span>
                          <input type="password" class="form-control" id="password" name="password"  required
                          value="" placeholder="Enter your password">
                        </div>
          
          <div class="text-right" style="padding: 5px; position: absolute; right: 30%;">
          <button id="sendButton" type="button" class="btn btn-primary"><i class="fas fa-envelope fa-lg"></i> Login</button>
          </div>
          </form>
      </div>
      <p class="text-center text-muted small">
                  Don't have an account? 
                  <a href="register.html">Register Here!</a>
                </p>
      </div>
      </div>`;
        
      //Appending the div to the end of main
      $("main").append(mainHTML);

      //Using jQuery to create a click event for the send button
      $("#sendButton").on("click", function() 
      {
        //Selecting the contact name input box's text values
        let userName = $("#contactName").val();

        //Resetting the input box's text values to blank 
        $("#contactName").val("");
        $("#password").val("");

        //Selecting the header list
        let headerList = $("#headerList");

        //Creating a new div that will display the userName in the nav bar
        let newListItem = 
        `
        <div style=text-align: center;">
        <span class="navbar-text" style="margin: 100px 100px 0 0; padding: 50px 50px;">` + userName + `</span>
        </div>
        `

        //Appending the div item in between the contact us button and the login button
        headerList.after(newListItem);
        
      });

    }

    /*
      Function that calls the validation functions for the register page
    */
    function registerFormValidation()
    {
      testFullName(); //Validate first and last name function
      testEmail(); //validate email function
      testPassword(); //Validate password function
    }

    /*
      Function that validates the first name and last name inputs content on the register page
    */
    function testFullName()
    {
      //Selecting and hiding the error message box
      let messageArea = $("#ErrorMessage").hide();

      //Setting regex pattern
      let fullNamePattern = /([A-Z][a-z]{1,})/;

        //When the user takes focus from the first name input box do:
        $("#firstName").on("blur", function()
        {
          //If first name does not match regex pattern do:
          if(!fullNamePattern.test($(this).val()))
          {
            //Select and highlight the input box
            $(this).trigger("focus").trigger("select");
            //Display error message
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid first Name. First name must be capitalized and at least 2 characters long.");
          }
          else
          {
            //Hide error message
            messageArea.removeAttr("class").hide();
          }
        });

        //When the user takes focus from the last name input box do:
        $("#lastName").on("blur", function()
        {
          //If last name does not match regex pattern do:
          if(!fullNamePattern.test($(this).val()))
          {
            //Select and highlight the input box
            $(this).trigger("focus").trigger("select");
            //Display error message
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid last Name. Last name must be capitalized and at least 2 characters long.");
          }
          else
          {
            //Hide error message
            messageArea.removeAttr("class").hide();
          }
        });
    }

    /*
      Function that validates the email inputs content on the register page
    */
    function testEmail()
    {
      //Selecting and hiding the error message box
      let messageArea = $("#ErrorMessage").hide();

      //Setting regex pattern
      let emailPattern = /^(?=.*[@])[A-Za-z\d@.]{8,}$/;

        //When the user takes focus from the email input box do:
        $("#emailAddress").on("blur", function()
        {
          //If email does not match regex pattern do:
          if(!emailPattern.test($(this).val()))
          {
            //Select and highlight the input box
            $(this).trigger("focus").trigger("select");
            //Display error message
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid email address. This must include one @ symbol and be at least 8 characters long.");
          }
          else
          {
            //Hide error message
            messageArea.removeAttr("class").hide();
          }
        });
    }

    /*
      Function that validates the password inputs content on the register page
    */
    function testPassword()
    {
      //Selecting and hiding the error message box
      let messageArea = $("#ErrorMessage").hide();

      //Setting regex pattern
      let passwordPattern = /[\S+]{6,}/;

      //When the user takes focus from the password input box do:
      $("#password").on("blur", function()
      {
        //If confirm password text val is not blank:
        if($("#confirmPassword").val() != "")
        {
          //If email does not match regex pattern do:
          if(!passwordPattern.test($("#password").val()))
          {
            //Select and highlight the input box
            $("#password").trigger("focus").trigger("select");
            //Display error message
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid password. This must include be at least 6 characters long.");
            //Set confirm error text value to blank
            $("#confirmPassword").val("");
          }
          else
          {
            //If password text val does not match the confirm password text val do:
              if($("#password").val() != $("#confirmPassword").val())
              {
                //Select and highlight the input box
                $("#password").trigger("focus").trigger("select");
                //Display error message
                messageArea.show().addClass("alert alert-danger").text("Passwords did not match.");
                //Set confirm error text value to blank
                $("#confirmPassword").val("");              
              }
              else
              {
                //Hide error message
                messageArea.removeAttr("class").hide();
              }
          }
        }
      });

        //When the user takes focus from the confirm password input box do:
        $("#confirmPassword").on("blur", function()
        {
          //If password text val is not blank:
          if($("#password").val() != "")
          {
            //If email does not match regex pattern do:
            if(!passwordPattern.test($("#password").val()))
            {
              //Select and highlight the input box
              $("#password").trigger("focus").trigger("select");
              //Display error message
              messageArea.show().addClass("alert alert-danger").text("Please enter a valid password. This must include be at least 6 characters long.");
              //Set confirm error text value to blank
              $("#confirmPassword").val("");
            }
            else
            {
                if($("#password").val() != $("#confirmPassword").val())
                {
                  //Select and highlight the input box
                  $("#password").trigger("focus").trigger("select");
                  //Display error message
                  messageArea.show().addClass("alert alert-danger").text("Passwords did not match.");
                  //Set confirm error text value to blank
                  $("#confirmPassword").val("");                
                }
                else
                {
                  //Hide error message
                  messageArea.removeAttr("class").hide();
                }
            }
          }
        });
    }

    /*
      Function that displays the register page's content
    */
    function displayRegister()
    {
      //Setting an errorMessage div tag
      let errorHTML = `<div id="ErrorMessage"></div>`;

      //Appending the errorMessage div the the main using jQuery
      $("main").append(errorHTML);
      
      //Creating a div element that contains the pages content
      let mainHTML = 
      `

      <div class="row" style="margin-top: 5%;">
      <div class="offset-md-3 col-md-6 col-sm-12">
      <div class="row justify-content-lg-center g-3" style="background-color: lightgrey; padding-bottom: 50px;">
      <h1 class="display-4"><strong>Register</strong></h1>
        <form >
          <p class="hint-text">Create your own account. It's free and only takes a minute.</p>

          <div class="form-group">
          <div class="row">
            <div class="col-md-6">
              <input class="form-control" type="text" name="firstName" id="firstName" placeholder="First Name" required>
            </div>
            <div class="col-md-6">
              <input class="form-control" type="text" name="lastName" id="lastName" placeholder="Last Name" required>
            </div>
          </div>
        </div>

        <div class="form-group" style="margin-top: 3%;">
        <div class="row">
          <div class="col-md-12">
            <input type="email" class="form-control" id="emailAddress" name="emailAddress" required
            value="" placeholder="Email">
          </div>
        </div>
        
      </div>
 
      <div class="form-group" style="margin-top: 3%;">
        <div class="row">
          <div class="col-md-12">
            <input type="password" class="form-control" id="password" name="password"  required
            value="" placeholder="Password">
          </div>
        </div>
        
      </div>

      <div class="form-group" style="margin-top: 3%;">
        <div class="row">
          <div class="col-md-12">
            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword"  required
            value="" placeholder="Confirm Password">
          </div>
        </div>
        
      </div>
          
          <div class="text-right" style=" padding: 5px; position: absolute; right: 30%;">
          <button id="sendButton" type="submit" class="btn btn-primary"><i class="fas fa-envelope fa-lg"></i> Register</button>
          </div>
          </form>
      </div>
      <p class="text-center text-muted small">
                  Already have an account? 
                  <a href="login.html">Sign in</a>
                </p>
      </div>
      </div>`;

      //Appending the div to the end of main
      $("main").append(mainHTML);

      // form validation
      registerFormValidation();

      $("#sendButton").on("click", function(event) 
      {
          event.preventDefault();

          let userName = "user_" + $("#firstName").val() + $("#lastName").val();

          let user = new User($("#firstName").val(), $("#lastName").val(), userName, $("#emailAddress").val(), $("#password").val());

          console.log(user.toString());
        
      });
    }

   /*
      Function that run when the page loads 
    */
    function Start()
    {
        console.log("App Started..."); //Initial console log
        
        displayHeader(); //Calling displayHeader() to display the header

        alterProductsButton(); //Calling alterProductButton() to change the products button to projects button

        addHumanResourcesButton(); //Calling addHumanResources() to add the human resources button

        let mainContent2 = document.querySelector("body");

        mainContent2.setAttribute("style", "background-image: url('./img/background.jpg')");

        //Switch case that tests the documents title and calls the appropriate function
        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Products":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Login":
            displayLogin();
          break;
          case "Register":
            displayRegister();
          break;
          }
        
    }
    
    displayFooter(); //Calling the display footer function to display the footer

    //Calling the start function when loaded
    window.addEventListener("load", Start);

})();