function updateDayAndTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    function updateClock() {
        const currentDate = new Date();
        const currentDay = daysOfWeek[currentDate.getUTCDay()];
        const currentUTCTime = currentDate.toUTCString();
        
        currentDayElement.textContent = currentDay;
        currentUTCTimeElement.textContent = `${currentUTCTime}`;
    }

    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);

    // Initial call to set the clock immediately
    updateClock();
}

updateDayAndTime();


// toggle button
const toggleBtn = document.querySelector('.nav-icons')
const toggleBtnIcon = document.querySelector('.nav-icons i')
const dropDownMenu = document.querySelector('.dropdown')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
}

// windows scroll animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('actives');
        }
        else {
            reveals[i].classList.remove('actives')
        }
    }
}
