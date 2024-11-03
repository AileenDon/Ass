<?php
// Function to display the greeting message
function greeting_shortcode() {
    return "Welcome to My Site!";
}

add_shortcode('greeting', 'greeting_shortcode');
