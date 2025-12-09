const shareButton = document.getElementById('share-button');
const sharePopup = document.getElementById('share-popup');
const authorInfo = document.getElementById('author-info');
const cardFooter = document.getElementById('card-footer');

shareButton.addEventListener('click', function() {
    this.classList.toggle('active');
    sharePopup.classList.toggle('active');
    authorInfo.classList.toggle('active');
    cardFooter.classList.toggle('show-share');
});