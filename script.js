function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let visibleCount = 3;
const increment = 3;
const projects = document.querySelectorAll('.project-item');
const showMoreBtn = document.getElementById('showMoreBtn');

function toggleShowMore() {
  const hiddenProjects = Array.from(projects).filter(p => p.classList.contains('hidden'));
  if (hiddenProjects.length > 0) {
    // Show next 3 hidden projects
    for (let i = 0; i < increment && i < hiddenProjects.length; i++) {
      hiddenProjects[i].classList.remove('hidden');
    }
    visibleCount += increment;

    // If no more hidden remain, change button text to "Show Less"
    if (Array.from(projects).filter(p => p.classList.contains('hidden')).length === 0) {
      showMoreBtn.textContent = 'Show Less';
    }
  } else {
    // Hide all except first 3
    projects.forEach((p, i) => {
      if (i >= 3) {
        p.classList.add('hidden');
      }
    });
    visibleCount = 3;
    showMoreBtn.textContent = 'Show More';
  }
}
