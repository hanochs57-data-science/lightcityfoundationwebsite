document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar-links .nav-link, .sidebar .nav-link");

    // Remove "active" from all, then set "Our Programmes" as default when page loads
    navLinks.forEach(link => link.classList.remove("active"));
    const defaultLink = document.querySelector('.navbar-links .nav-link[href*="#programmes"]');
    if (defaultLink) defaultLink.classList.add("active");

    // Add click event to update active class
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Map section IDs from hrefs
    const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute("href").split(" ")[0]))
        .filter(el => el !== null);

    // Function to update active link on scroll
    function updateActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 120 < sections[index].offsetTop) {}

        navLinks.forEach(link => link.classList.remove("active"));
        const currentSection = sections[index];
        if (currentSection) {
            const activeLinks = document.querySelectorAll(`.nav-link[href*="${currentSection.id}"]`);
            activeLinks.forEach(l => l.classList.add("active"));
        }
    }

    updateActiveLink(); // set on page load
    window.addEventListener("scroll", updateActiveLink);

    // Also update active link on click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});

