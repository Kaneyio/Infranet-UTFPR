var plansbutton = document.getElementById("plansbutton");
var plansbuttonbar = document.getElementById("plansbuttonbar");

plansbutton.addEventListener('click', function() {
    const section = document.getElementById('plans');
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = sectionPosition - innerHeight / 10;


    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});

plansbuttonbar.addEventListener('click', function() {
    const section = document.getElementById('plans');
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = sectionPosition - innerHeight / 10;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});