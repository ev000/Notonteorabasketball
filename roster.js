
// Functionality for the "Read More" button on the roster page

const bioParentContainer = document.querySelector('.desc-container');

bioParentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreRoster = current.className.includes('readMoreRoster');
    
    if (!isReadMoreRoster) return;
    
    const currentText = event.target.parentNode.querySelector('.moreText');
    currentText.classList.toggle('moreText--show');
    
    
    current.textContent = current.textContent.includes('Full bio') ? "Read Less" : "Full bio";
});