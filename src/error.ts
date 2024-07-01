// Archivo: vulnerableCode.js

function displayMessage(message) {
    // Ejemplo de vulnerabilidad XSS
    document.getElementById('messageBox').innerHTML = message;
}

// Ejemplo de uso (simulando un mensaje malicioso)
var maliciousMessage = '<img src="malicious_script.js">';
displayMessage(maliciousMessage);
