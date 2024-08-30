function startRoll() {
    const roll = document.getElementById('caseRoll');
    const itemCount = 5; // Number of unique items
    const rollDuration = 3000; // Total duration of the roll in milliseconds

    // Set the roll to a random item
    const finalPosition = -(Math.floor(Math.random() * itemCount) * 105); // Each item + margin is 105px wide

    // Start the roll animation
    roll.style.transition = 'none';
    roll.style.transform = 'translateX(0)';
    
    setTimeout(() => {
        roll.style.transition = `transform ${rollDuration / 1000}s cubic-bezier(0.25, 1, 0.5, 1)`;
        roll.style.transform = `translateX(${finalPosition}px)`;
    }, 100); 
}