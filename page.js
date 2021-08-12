function searchState() {
    stateInput = document.getElementById("stateInput");
    stateInput = stateInput.value.toUpperCase();
    stateList = document.getElementById("stateList");
    stateListElements = stateList.getElementsByTagName("li");
    for(i=0; i<stateListElements.length; i++) {
        stateListElementText = stateListElements[i].getElementsByTagName("a")[0];
        txtValue = stateListElementText.textContent || stateListElementText.innerText;
        if(txtValue.toUpperCase().indexOf(stateInput)>-1) {
            stateListElements[i].style.display = "";
        } else {
            stateListElements[i].style.display = "none";
        }
    }
}