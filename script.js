function startRoll() {
    const roll = document.getElementById('caseRoll');
    const selectedItemDisplay = document.getElementById('selectedItem');
    const itemCount = 5; // Number of unique items
    const rollDuration = 3000; // Total duration of the roll in milliseconds

    // Calculate the width of each item + margin (adjust if necessary)
    const itemWidth = 110; // 100px width + 10px margin
    const totalItems = itemCount * 2; // Total items (including repeated items)

    // Set the roll to a random item
    const finalPosition = -(Math.floor(Math.random() * itemCount) * itemWidth + itemWidth * Math.floor(totalItems / 2));

    // Start the roll animation
    roll.style.transition = 'none';
    roll.style.transform = 'translateX(0)';

    setTimeout(() => {
        roll.style.transition = `transform ${rollDuration / 1000}s cubic-bezier(0.25, 1, 0.5, 1)`;
        roll.style.transform = `translateX(${finalPosition}px)`;

        // Calculate the selected item after the roll ends
        setTimeout(() => {
            const selectedIndex = Math.abs(finalPosition) / itemWidth % itemCount;
            const selectedItem = roll.children[selectedIndex].getAttribute('data-item');
            selectedItemDisplay.textContent = `Selected Item: ${selectedItem}`;
        }, rollDuration);
    }, 100); 
}