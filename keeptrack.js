$(document).ready(function() {
    $(".reverse-button").click(function() {
        var fromValue = $("#from").val();
        var toValue = $("#to").val();

        $("#from").val(toValue);
        $("#to").val(fromValue);
    });
});
