var users=[]
function createUser(firstName, lastName, phoneNumber, country, carModel, registrationNumber, email, password) {
    return {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      country: country,
      carModel: carModel,
      registrationNumber: registrationNumber,
      email: email,
      password: password
    };
  }

  $(document).ready(function() {
 
    $("form").submit(function(event) {
        var data= localStorage.getItem("userData");
        if (data !==null) 
        {
            users=JSON.parse(localStorage.getItem("userData"))
        }
      event.preventDefault();
  
      var firstName = $("#firstname").val();
      var lastName = $("#lastname").val();
      var phoneNumber = $("#phone").val();
      var country = $("#country").val();
      var carModel = $("#model").val();
      var registrationNumber = $("#registration").val();
      var email = $("#email").val();
      var password = $("#password").val();
  
      var userData = createUser(firstName, lastName, phoneNumber, country, carModel, registrationNumber, email, password);

      users.push(userData)
  
      localStorage.setItem("userData", JSON.stringify(users));
      localStorage.setItem('logged-user',JSON.stringify(userData))
      alert("driver:",firstName, "has been stored!");
      window.location.href=('keeptrack.html');

    });
  });