$(document).ready(function() {
             console.log('ready')
            $("#driver-button").click(function() {
                window.location.href = "./sign_up_driver.html";
            });

            $("#passenger-button").click(function() {
                window.location.href = "./sign_up_passenger.html";
            });
        });