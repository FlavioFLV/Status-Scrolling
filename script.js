let pierWraper = document.querySelectorAll(".pier-wraper");
let pierContent = document.querySelector(".pier-content");
let doc = document.documentElement;

const onScrollStop = (array) => {
    let isScrolling;
    pierWraper.forEach((pier, index) => {
        window.addEventListener("scroll", () => {
            let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight) + 1);
            
            pierContent.innerHTML = value+"%";

            pier.classList.add("show");
            pier.style.backgroundImage = `
                conic-gradient(
                    ${array[index]} ${value * 3.6}deg, 
                    lightblue 0 360deg
                )
            `;
            
            clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                pierWraper.forEach(el => {
                    el.classList.remove("show");
                })
            }, 500);
        });
    })
}

const color = ["red", "blue"]
onScrollStop(color)