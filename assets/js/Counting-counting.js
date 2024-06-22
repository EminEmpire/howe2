document.addEventListener('DOMContentLoaded', function() {
    function startCounter() {
        var loveCounter = document.querySelector('.love_counter');
        var loveCounts = document.querySelectorAll('.love_count');
        var hT = loveCounter.offsetTop;
        var hH = loveCounter.offsetHeight;
        var wH = window.innerHeight;
        var wS = window.scrollY;

        if (wS > (hT + hH - wH) || (hT >= wS && (hT + hH) <= (wS + wH))) {
            window.removeEventListener('scroll', startCounter);

            loveCounts.forEach(function(loveCount) {
                var target = parseInt(loveCount.textContent);
                var counter = { value: 0 };
                var duration = 2000;
                var stepTime = Math.abs(Math.floor(duration / target));

                function updateCounter() {
                    counter.value += 1;
                    loveCount.textContent = counter.value + '+';

                    if (counter.value < target) {
                        setTimeout(updateCounter, stepTime);
                    }
                }

                updateCounter();
            });
        }
    }

    window.addEventListener('scroll', startCounter);
    startCounter(); // Call once to check if the element is already in view
});
