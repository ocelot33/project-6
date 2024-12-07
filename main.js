const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollRevealOption().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
scrollRevealOption().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".header_links", {
    ...scrollRevealOption,
    delay: 1500,
});

scrollRevealOption().reveal(".steps_card", {
    ...scrollRevealOption,
    interval: 500,
});

scrollRevealOption().reveal(".service_image img", {
    ...scrollRevealOption,
    origin: "left",
});
scrollRevealOption().reveal(".service_content .section_subheader", {
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".service_content .section_header", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".service_list li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
});

scrollRevealOption().reveal(".experience_card", {
    duration: 1000,
    interval: 500,
});

// download section
scrollRevealOption().reveal(".download_image img", {
    ...scrollRevealOption,
    origin: "right",
});
scrollRevealOption().reveal(".download_content .section_header", {
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".download_content p", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".download_links", {
    ...scrollRevealOption,
    delay: 1500,
});
