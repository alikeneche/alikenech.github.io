function selectWord(word, emoji) {
    const display = document.getElementById('chosen-word');
    
    // Add a quick scale animation to the display
    display.style.transform = "scale(0.8)";
    display.style.opacity = "0";
    
    setTimeout(() => {
        display.innerHTML = `Selected: <span style="color:white">${word}</span> ${emoji}`;
        display.style.transform = "scale(1)";
        display.style.opacity = "1";
        display.style.transition = "all 0.3s ease";
    }, 150);

    // Provide haptic-like feedback via console (or actual vibration on mobile)
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}
