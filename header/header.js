document.addEventListener("DOMContentLoaded", function () {
    fetch("/header/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            setTimeout(() => {
                const hamburgerMenu = document.querySelector(".hamburger-menu");
                const navMenu = document.querySelector(".nav-menu");

                hamburgerMenu.addEventListener("click", () => {
                    hamburgerMenu.classList.toggle("active");
                    navMenu.classList.toggle("active");
                });

                const activeMenu = document.querySelectorAll('.main-menu');
                const currentPath = window.location.pathname;
                activeMenu.forEach((menu) => {
                    const href = menu.getAttribute('href');

                    if (href === '/') {
                        if (currentPath === '/') {
                            menu.classList.add('active');
                        } else {
                            menu.classList.remove('active');
                        }
                    } else {
                        const sectionPath = href.substring(0, href.lastIndexOf('/') + 1);
                
                        if (currentPath.startsWith(sectionPath)) {
                            menu.classList.add('active');
                        } else {
                            menu.classList.remove('active');
                        }
                    }
                })

            }, 100);
            

        })
        .catch(error => console.error("Error loading header:", error));
});

