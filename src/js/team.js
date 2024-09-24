function movedTeam() {
    let selector = document.querySelector('#team-div').offsetTop;
    window.scrollTo({top : selector, behavior : 'smooth'})
}