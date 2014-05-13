$(document).ready(function() {
	$('#getGPS').click( function(event){

        street = $('#streetAddress').val()+'+';
        city = $('#city').val()+'+';
        state = $('#state').val();

        // the parameters we need to pass in our request to Google Geocode's API
        googleURL1 = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
        googleURL2 = '&sensor=true&key=AIzaSyBJh8OQe2-Ni97hUnshrLde2CnkYG4TQTQ';
        
        var request =
            googleURL1+
            street+
            city+
            state+
            googleURL2;

        var google_response = $.ajax({
            url: request,
            type: "GET"}).done(function (data) {
                
                console.log('Latitude is: ' + data.results[0].geometry.location.lat);
                console.log('Longitude is is: ' + data.results[0].geometry.location.lng);


                $('#latitude').html(" "+data.results[0].geometry.location.lat);
                $('#longitude').html(" "+data.results[0].geometry.location.lng);

            });



    });
    
    $('#clearForm').click( function(event){
        $("#streetAddress").val("");
        $("#city").val("");
        $("#state").val("");
        $('#latitude').html("");
        $('#longitude').html("");
        
    });
    

    $('form').submit(function(e){e.preventDefault();});
            
});











