// the large image of the figure is assigned to the variable large_img.
var large_img = document.getElementById('large');
// The figure caption field to the variable fg_caption.
var fig_caption = document.getElementById('caption');

// the function takes the html of li img and this gets the html
// from the onclick function in html of img tag present in the unordered list.
function display(small) {
    // this code replace the large image present in alt text
    large_img.src = `images/${small.title}-large.jpg`;
    // this code is used to display the description of image in the fig caption
    fig_caption.innerText = small.alt;
}
