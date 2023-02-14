let projet1 = document.getElementById("p1")
let port = document.getElementById("port")
let header = document.getElementById("header")
let contact = document.getElementById("contact")
let acceuil = document.getElementById("acceuil")
let nav = document.getElementById("nav")
let category = document.getElementById("category")
let categoryChild = document.getElementById("category").children
let grid = document.getElementById("grid")
let project = document.getElementById("grid").children
let main = document.getElementById("main")
let section = document.getElementsByClassName("section")

function animated() {
    port.style.transform = "rotate(0deg)"
    port.style.width = "auto"
    port.style.color ="white"
    
    header.style.padding = "15px"
    header.style.backgroundColor = "rgba(119, 120, 172, 0.986)"
    header.style.background ="linear-gradient( 90deg, rgba(2, 0, 36, 1) 0%, rgba(146, 119, 172, 1) 21%, rgba(89, 0, 255, 0.6923144257703081) 100% )"
    header.style.transitionProperty = "color"
    header.style.transitionDuration = "2s"
    header.style.marginBottom = "10px"
    
    nav.style.justifyContent = "space-between"
    nav.style.alignItems = "center"

    category.style.display = "flex"
    
    for (i = 0; i < categoryChild.length; i++) {
        
        categoryChild[i].style.backgroundColor = "white"
        categoryChild[i].style.textDecoration = "none"
        categoryChild[i].style.border = "1px solid black"
        categoryChild[i].style.marginLeft = "10px"
        categoryChild[i].style.borderRadius = "5px"
        categoryChild[i].style.padding = "5px"
        categoryChild[i].style.fontSize = "14px"
        categoryChild[i].style.transform = "rotate(0deg)"
        
    }
    
    setTimeout(() => {
        nav.style.display = "flex"
        }, "2000")
    
    for (i = 0; i < project.length; i++) {
        project[i].style.transform = "rotate(0deg)"
        project[i].style.position = "static"
        project[i].style.border = "1px solid black"
    }
    
    grid.style.display = "grid"
    grid.style.gridTemplateColumns = "repeat(2, 1fr)"
    grid.style.width = "auto"
    grid.style.gap = "10px"
    
    main.style.marginLeft = "5%"
    main.style.marginRight = "5%"

    
    
}

console.log(section)