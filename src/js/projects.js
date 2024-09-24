let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.style.opacity = '1';
        console.log(entry.target.style.opacity);
    });
})

let element = document.querySelector('#project-div');
observer.observe(element);

function movedProjects() {
    console.log('projects');
    let selector = document.querySelector('#project-div').offsetTop;
    selector -= 100;
    window.scrollTo({top : selector, behavior : 'smooth'})
}