var loggedUser={}
var isLoggedIn=false
$(document).ready(function() {
    var data=window.localStorage.getItem('logged-user')
    if (data !==null)
    {
        loggedUser=JSON.parse(data)
        isLoggedIn=true
        console.log("here")
        $("#profile").removeClass('hidden');
    }
    $(".reverse-button").click(function() {
        var fromValue = $("#from").val();
        var toValue = $("#to").val();

        $("#from").val(toValue);
        $("#to").val(fromValue);
    });
});
