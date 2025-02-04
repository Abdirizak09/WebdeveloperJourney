document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (name && email && message) {
            alert('Thank you for your message!');
            // Here you can add code to send the form data to your server or email
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Get the button
    const mybutton = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
});