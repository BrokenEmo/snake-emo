// Load function when page is ready
$(document).ready(function(){
    // Trigerred when form submitted
    $('#form').submit(function(event){
        // Display submitted name
        let username = document.querySelector('#username');
        username.innerHTML = $('input').first().val();

        // Fades out popup window
        $('#popup').fadeOut('slow');

        console.log(totalFoodAte);

        $('#gameTitle').fadeIn('slow');

        // Prevent form to do the same thing
        event.preventDefault();
    });
}); 