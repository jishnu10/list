function printPage() {
    // Filter out rows with quantity <= 0
    const table = document.getElementById("particularsTable");
    const rows = table.getElementsByTagName("tr");
    for (let i = rows.length - 1; i >= 0; i--) {
        const quantityInput = rows[i].querySelector("input[type='number']");
        if (quantityInput && parseInt(quantityInput.value) <= 0) {
            rows[i].parentNode.removeChild(rows[i]);
        }
    }
    
    // Print the page
    window.print();
    
    // Restore removed rows
    location.reload();
}
