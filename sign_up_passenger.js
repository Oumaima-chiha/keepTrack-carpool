var users=[]
function createUser(firstName, lastName, phoneNumber, country, email, password) {
    return {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      country: country,
      email: email,
      password: password,
    };
  }

  $(document).ready(function() {
 
    $("form").submit(function(event) {
        var data= localStorage.getItem("passengerData");
        if (data !==null) 
        {
            users=JSON.parse(localStorage.getItem("userData"))
        }
      event.preventDefault();
  
      var firstName = $("#firstname").val();
      var lastName = $("#lastname").val();
      var phoneNumber = $("#phone").val();
      var country = $("#country").val();
      var email = $("#email").val();
      var password = $("#password").val();
  
      var userData = createUser(firstName, lastName, phoneNumber, country,email, password);

      users.push(userData)
  
      localStorage.setItem("passengerData", JSON.stringify(users));
      localStorage.setItem('logged-user',JSON.stringify(userData));
  
      alert("passenger:",firstName, "has been stored!");
      window.location.href=('keeptrack.html')
  
    });
  });