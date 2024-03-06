$(document).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var letter = $(".letter"); // Select the letter element
    var hidden = $("#hiddenLetter");  // Create an empty jQuery object to store
    // Open envelope on clicking the letter or open button
    letter.click(function() {
        openLetter();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open")
            .removeClass("hidden");
        hidden.addClass("hidden")
                .removeClass("visible");
    }

    function openLetter(){
        hidden.addClass("visible")
        .removeClass("hidden");
        envelope.addClass("hidden")
        .removeClass("open");
    }

});

function onDevToolsOpen() {
    console.log("Code không clean xin đừng xem :<"); // Log a message
    // Remove unnecessary setTimeout calls
  }
  
  // Call the function to log a message when DevTools opens (optional)
  onDevToolsOpen();
  
