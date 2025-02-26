// Load jQuery
let scriptJQ = document.createElement("script");
scriptJQ.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js";
scriptJQ.onload = function () {
    console.log("jQuery Loaded");

    // Now load Bootstrap JS
    let scriptBootstrap = document.createElement("script");
    scriptBootstrap.src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js";
    scriptBootstrap.onload = function () {
        console.log("Bootstrap JS Loaded");

        // Now load Ekko Lightbox
        let scriptEkko = document.createElement("script");
        scriptEkko.src = "https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js";
        scriptEkko.onload = function () {
            console.log("Ekko Lightbox Loaded");

            // Now that jQuery, Bootstrap, and Ekko Lightbox are loaded, execute your jQuery code:
            $(document).on("click", '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
        };
        document.head.appendChild(scriptEkko);
    };
    document.head.appendChild(scriptBootstrap);
};
document.head.appendChild(scriptJQ);
