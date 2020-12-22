document.getElementById("map-link").addEventListener("click", () => {
  window.open("https://goo.gl/maps/pPGcQPTWTFSF1GNKA", "_blank");
  return false;
});

const linkToHighlightContactDiv = document.getElementById("highlight-contact");

linkToHighlightContactDiv.addEventListener("click", () => highlighContactDiv());

function highlighContactDiv() {
  const contactDiv = document.getElementById("contact");

  contactDiv.classList.add("highlight");

  setTimeout(() => {
    contactDiv.classList.remove("highlight");
  }, 3000);
}

const imageTagList = document.getElementsByTagName("img");
if (imageTagList)
  for (img of imageTagList) {
    img.addEventListener("click", showModal);
  }

const body = document.getElementsByTagName("body")[0];

const modalDiv = document.getElementById("modal");
modalDiv.addEventListener("click", closeModal);
function showModal() {
  const modalImg = document.createElement("img");
  modalImg.src = this.src;
  modalImg.alt = this.alt;

  modalDiv.appendChild(modalImg);

  modalDiv.classList.toggle("visible");
  body.classList.toggle("lock-scroll");
}
function closeModal() {
  body.classList.toggle("lock-scroll");
  modalDiv.classList.toggle("visible");
  modalDiv.getElementsByTagName("img")[0]?.remove();
}

const navElem = document.getElementsByTagName("nav")[0];
const elementToChangeNavClass = document.getElementById("scroll-down");
const changeNavClassObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.intersectionRatio > 0
      ? navElem.classList.remove("scrolled")
      : navElem.classList.add("scrolled");
  });
});
changeNavClassObserver.observe(elementToChangeNavClass);

// const animImg = document.getElementsByClassName("anim");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.intersectionRatio > 0) entry.target.classList.add("is-visible");
//     });
//   },
//   { rootMargin: "-70px" }
// );
// for (let anim of animImg) observer.observe(anim);
