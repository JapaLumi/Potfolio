function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('hidden');
}

function openProject(projectId) {
    document.getElementById(projectId).style.display = 'flex';
}

function closeProject(projectId) {
    document.getElementById(projectId).style.display = 'none';
}
