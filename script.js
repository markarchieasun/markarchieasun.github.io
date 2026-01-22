const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const watchButton = document.getElementById('watchButton');
const videoModal = document.getElementById('videoModal');
const youtubeEmbed = document.getElementById('youtubeEmbed');
const closeModal = document.getElementById('closeModal');

watchButton.addEventListener('click', () => {
    youtubeEmbed.src = "https://www.youtube-nocookie.com/embed/9sGA_OTREzw?si=iCnmu14t95yS80Uc&autoplay=1";
    videoModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    youtubeEmbed.src = "";
    videoModal.style.display = 'none';
});

const shareBtn = document.getElementById('shareButton');
const shareStatus = document.getElementById('shareStatus');

shareBtn.addEventListener('click', () => {
    const shareUrl = "https://youtu.be/TUjZPifUNmU?si=EIAFJVil0yigkvIw";
    navigator.clipboard.writeText(shareUrl).then(() => {
        shareStatus.style.display = 'block';
        setTimeout(() => {
            shareStatus.style.display = 'none';
        }, 2000);
    });
});

const stars = document.querySelectorAll('.star');
const ratingMsg = document.getElementById('rating-message');
let activeRating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', () => highlightStars(star.dataset.value));
    star.addEventListener('mouseout', () => highlightStars(activeRating));
    star.addEventListener('click', () => {
        activeRating = star.dataset.value;
        ratingMsg.textContent = `You rated this ${activeRating}/5. Thank you!`;
    });
});

function highlightStars(val) {
    stars.forEach((s, i) => {
        s.classList.toggle('active', i < val);
    });
}

const postBtn = document.getElementById('postComment');
const commentsList = document.getElementById('commentsList');

postBtn.addEventListener('click', () => {
    const name = document.getElementById('userName').value.trim();
    const text = document.getElementById('commentText').value.trim();

    if (!name || !text) {
        alert("Please enter both your name and a review!");
        return;
    }

    const card = document.createElement('div');
    card.className = 'comment-card';
    card.innerHTML = `<h4>${name}</h4><p>${text}</p>`;
    
    commentsList.prepend(card);
    
    document.getElementById('userName').value = "";
    document.getElementById('commentText').value = "";
});