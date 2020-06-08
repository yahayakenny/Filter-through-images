const filterImages = () => {
    let text = document.getElementById("text");
    let ul = document.getElementById("imageList");
    let li = ul.getElementsByTagName("li");
    let filter = text.value.toUpperCase();

    for (i = 0; i < li.length; i++){
        let imageText = li[i].getElementsByTagName("p")[0];
        let textValue = imageText.textContent || imageText.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }

    }

}




