function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }




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
   
    let ridePosts = [];
     function displayRideCards() {
        var rideCardsContainer = $("#rideCards");
        rideCardsContainer.empty(); 

        each(ridePosts,function(ridePost, index) {
            const card = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${ridePost.from} to ${ridePost.to}</h5>
                        <p class="card-text">Date: ${ridePost.date}, Time: ${ridePost.time}</p>
                    </div>
                </div>
            `;
            rideCardsContainer.append(card);
        });
    }

    
    if (localStorage.getItem("ridePosts")) {
        ridePosts = JSON.parse(localStorage.getItem("ridePosts"));
    }

    
    function offerRide() {
        var from = $("#from").val();
        var to = $("#to").val();
        var date = $("#date").val();
        var time = $("#time").val();
        
        var ridePost = {
            from: from,
            to: to,
            date: date,
            time: time
        };

        ridePosts.push(ridePost);
        localStorage.setItem("ridePosts", JSON.stringify(ridePosts));

        alert("Your ride has been offered!");

    
        $("#from, #to, #date, #time").val("");
    }

    
    $("form").submit(function(event){
        event.preventDefault()
        *
         offerRide();
         displayRideCards();
});


});
