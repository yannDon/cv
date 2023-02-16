const projet1 = document.getElementById("p1");
const port = document.getElementById("port");
const header = document.getElementById("header");
const contact = document.getElementById("contact");
const acceuil = document.getElementById("acceuil");
const nav = document.getElementById("nav");
const category = document.getElementById("category");
const categoryChild = document.getElementById("category").children;
const grid = document.getElementById("grid");
const project = document.querySelectorAll(".project")
const main = document.getElementById("main");
const sections = document.querySelectorAll(".section");
const subTitles = document.querySelectorAll(".sub-title");
const media600 = window.matchMedia("(min-width: 600px)").matches;

const lis = document.querySelectorAll("li");
function animated() {
    port.style.transform = "rotate(0deg)";
    port.style.width = "auto";
    port.style.color = "white";

    header.style.padding = "15px";
    header.style.backgroundColor = "rgba(119, 120, 172, 0.986)";
    header.style.background =
        "linear-gradient( 90deg, rgba(2, 0, 36, 1) 0%, rgba(146, 119, 172, 1) 21%, rgba(89, 0, 255, 0.6923144257703081) 100% )";
    header.style.transitionProperty = "color";
    header.style.transitionDuration = "2s";
    header.style.marginBottom = "10px";

    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";

    main.style.marginLeft = "5px";
    main.style.marginRight = "5px";

    category.style.display = "flex";

    lis.forEach((li) => {
        li.style.fontSize = "14px";
        li.style.overflow = "scroll";
    });

    for (i = 0; i < categoryChild.length; i++) {
        categoryChild[i].style.backgroundColor = "white";
        categoryChild[i].style.textDecoration = "none";
        categoryChild[i].style.border = "1px solid black";
        categoryChild[i].style.marginLeft = "10px";
        categoryChild[i].style.borderRadius = "5px";
        categoryChild[i].style.padding = "5px";
        categoryChild[i].style.fontSize = "14px";
        categoryChild[i].style.transform = "rotate(0deg)";
    }

    setTimeout(() => {
        nav.style.display = "flex";
    }, "2000");

    
    project.forEach(project => {
        project.style.transform = "rotate(0deg)";
        project.style.position = "static";
        project.style.border = "1px solid black";
        project.style.overflow = "scroll";
        

    })

    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(2, 1fr)";
    grid.style.gridTemplateRows = "20vh 20vh 20vh";
    grid.style.gap = "10px";

    sections.forEach((section) => {
        section.style.display = "block";
    });
    main.style.display = "flex";
    main.style.justifyContent = "center";

    subTitles.forEach((subTitle) => {
        subTitle.style.backgroundColor = "rgba(119, 120, 172, 0.986)";
    });
}
