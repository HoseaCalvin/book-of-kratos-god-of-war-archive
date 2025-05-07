function openGameTab(event, gameId) {
    document.querySelectorAll('.tab-content').forEach((tab) => {
        tab.style.display = 'none';
    });

    document.querySelectorAll('.tab-button').forEach((button) => {
        button.classList.remove('active');
    });

    document.getElementById(gameId).style.display = 'block';
    event.currentTarget.classList.add('active');
    
}

document.addEventListener('DOMContentLoaded', function() {
    const openFirstTab = document.querySelector(".tab-button");
    if(openFirstTab) {
        openFirstTab.click();
    }
})

function showPassage() {
    const passage = document.querySelector(".overview-text");
    const content = document.querySelector(".overview-content");

    passage.classList.toggle('show');
    
    if (passage.classList.contains("show")) {
        content.classList.add("move-up");
    } else {
        content.classList.remove("move-up");
    }
}
