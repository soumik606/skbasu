document.addEventListener('DOMContentLoaded', function() {
    // Citation Copy Functionality
    const citationCopyBtn = document.querySelector('.copy-citation-btn');
    
    if (citationCopyBtn) {
        citationCopyBtn.addEventListener('click', function() {
            const citationText = document.querySelector('.citation-block p').textContent;
            
            // Create a temporary textarea to copy text
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = citationText;
            document.body.appendChild(tempTextArea);
            
            // Select and copy the text
            tempTextArea.select();
            document.execCommand('copy');
            
            // Remove the temporary textarea
            document.body.removeChild(tempTextArea);
            
            // Optional: Provide visual feedback
            this.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-copy"></i> Copy Citation';
            }, 2000);
        });
    }
});