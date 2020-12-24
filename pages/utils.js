//Function for Enlarge Callback
function enlarge(ele) {
  ele
    .querySelector(".grid__btn_popup")
    .addEventListener("click", function (pic) {
      openPopUp(popupImageBlock);
      popupImage.src = pic.target.src;
      popupCaption.innerHTML = pic.target.alt;
    });
}
export { enlarge };
