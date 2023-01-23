function showAnimate(elementClass, elementShowClassWoDot) {
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add(elementShowClassWoDot);
            } else {
                change.target.classList.remove(elementShowClassWoDot);
            }
        });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(elementClass);
    for (let elm of elements) {
        observer.observe(elm);
    }
}

export default showAnimate;