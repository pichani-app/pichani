document.addEventListener('DOMContentLoaded', () => {
    // Scroll Spy for TOC
    const sections = document.querySelectorAll('article.content h2');
    const navLinks = document.querySelectorAll('.toc-list a');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 120) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Add anchor IDs to H2s if they don't exist (for dynamic content)
    sections.forEach(h2 => {
        if (!h2.id) {
            h2.id = h2.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        }
    });

    // Smooth scroll for TOC links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update URL without jump
                history.pushState(null, null, targetId);
            }
        });
    });
});
