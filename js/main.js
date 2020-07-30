document.addEventListener('DOMContentLoaded', documentLoaded, false);


function documentLoaded() {
    var allMoreSection = document.getElementsByClassName("moreSection");
    
    console.log('%c Besoin d\'information \n bellemaremederic@gmail.com ', 'background: #001242; color: #2e86de; font-size: 3em;');

    init();

    function init() {
        for (const element of allMoreSection) {
            element.style.height = 0;
            element.style.opacity = 0;
            element.dataset.status = "close";
            var nextButton = element.nextElementSibling;
            nextButton.addEventListener("click", function(clickEvent) {
                toggleSection(clickEvent, element);
            });
        }
    }

    window.addEventListener("beforeprint",function(){
        console.log("beforeprint")
        for (const element of allMoreSection) {
            element.style.height = element.scrollHeight;
            element.style.opacity = 1;
            element.dataset.status = "open";
        }
    });

    function toggleSection(event, section) {
        event.target.classList.toggle("fa-rotate-180");
        animation(section);
    }

    function animation(element) {
        var dataset = element.dataset;
        if(dataset.status == "close") {
            element.style.height = element.scrollHeight+"px";
            element.style.opacity = 1
            dataset.status = "open"
        } else {
            element.style.height = 0;
            element.style.opacity = 0;
            dataset.status = "close"
        }
    }
}