const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () =>{ 
    filterItem.onclick = (selectedItem)=>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            console.log(filterName);
            filterImg.forEach((image)=>{
                let filterimages = image.getAttribute("data-name");
                if((filterimages == filterName) || (filterName == "all")){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            
            });
        }
    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)");
        
    }
}

const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".close-logo"),
shadow = document.querySelector(".shadow");


function preview(element){
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src;
    let selectedImageCategory = element.getAttribute("data-name");
    categoryName.textContent = selectedImageCategory;
    previewImg.src = selectedPrevImg
    console.log(selectedPrevImg);
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = () =>{
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "scroll";

    }
}


// ---scrolltop---

mybutton = document.getElementById("myBtn");
window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else
    {
        mybutton.style.display = "none";

    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}