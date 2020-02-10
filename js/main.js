document.addEventListener('DOMContentLoaded', documentLoaded, false);


function documentLoaded() {
    var btnEtude = document.getElementById("btnMoreEtude");
    var sectionMoreEtude = document.getElementById("moreEtude");
    var btnExp = document.getElementById("btnMoreExp");
    var sectionMoreExp = document.getElementById("moreExp");
    var allMoreSection = document.getElementsByClassName("moreSection");
    
    console.log('%c Besoin d\'information \n bellemaremederic@gmail.com ', 'background: #001242; color: #2e86de; font-size: 3em;');

    init();

    window.addEventListener("beforeprint",function(){
        console.log("beforeprint")
        for (const element of allMoreSection) {
            element.style.height = element.dataset.maxHeight;
            element.style.opacity = 1;
            element.dataset.status = "open";
        }
    });

    function init() {
        
        for (const element of allMoreSection) {
            element.dataset.maxHeight = element.offsetHeight;
            element.style.height = 0;
            element.style.opacity = 0;
            element.dataset.status = "close";
            var nextButton = element.nextElementSibling;
            nextButton.addEventListener("click", function(clickEvent) {
                toggleSection(clickEvent, element);
            });
        }
    }

    function toggleSection(event, section) {
        event.target.classList.toggle("fa-rotate-180");
        animation(section);
    }

    function animation(element) {
        var dataset = element.dataset;
        var maxHeight = dataset.maxHeight;
        if(dataset.status == "close") {
            element.style.height = maxHeight;
            element.style.opacity = 1
            dataset.status = "open"
        } else {
            element.style.height = 0;
            element.style.opacity = 0;
            dataset.status = "close"
        }
    }
}