function updateLabel() {
    var limit = this.parentElement.getElementsByClassName("demo")[0];
    limit.innerHTML = this.value;
  }
  
  var slideContainers = document.getElementsByClassName("rangecontainer");
  
  for (var i = 0; i < slideContainers.length; i++) {
    var slider = slideContainers[i].getElementsByClassName("range")[0];
    updateLabel.call(slider);
    slider.oninput = updateLabel;
  }