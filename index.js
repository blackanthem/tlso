const body = document.getElementsByTagName("body")[0];
const lockBodyClass = "lock-scroll";

//WHATSAPP CTA
const waIcon = document.getElementById("wa-icon");
window.onload = () => {
  setTimeout(() => {
    waIcon.classList.add("active");

    setTimeout(() => {
      waIcon.classList.remove("active");
    }, 6000);
  }, 4000);
};

// HOW TO ORDER MODAL
const orderDiv = document.getElementById("order");
orderDiv.addEventListener("click", closeHowToOrderModal);
orderDiv
  .getElementsByTagName("div")[0]
  .addEventListener("click", (e) => e.stopPropagation());

const showOrderDivLink = document.getElementById("show-order");
showOrderDivLink.addEventListener("click", openHowToOrderModal);

function openHowToOrderModal(event) {
  orderDiv.classList.add("visible");
  body.classList.add(lockBodyClass);
}

function closeHowToOrderModal(event) {
  // if (event.target !== this) return;

  orderDiv.classList.remove("visible");
  body.classList.remove(lockBodyClass);
}

// APPEND NAV CLASS (SCROLLED) ON SCROLL
const navElem = document.getElementsByTagName("nav")[0];
const elementToChangeNavClass = document.getElementById("activate");
const changeNavClassObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.intersectionRatio > 0
      ? navElem.classList.remove("scrolled")
      : navElem.classList.add("scrolled");
  });
});
changeNavClassObserver.observe(elementToChangeNavClass);

// APPEND CLASS "IS-VISIBLE" TO ENTRY TARGETS
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) entry.target.classList.add("is-visible");
    });
  },
  {
    rootMargin: "-70px",
  }
);
const animElements = document.getElementsByClassName("anim");
for (elem of animElements) animObserver.observe(elem);

//SHOW IMAGE IN FULL SCREEN
const imageTagList = document.getElementsByTagName("img");
if (imageTagList)
  for (img of imageTagList) {
    img.addEventListener("click", showModal);
  }

const modalDiv = document.getElementById("modal");
modalDiv.addEventListener("click", closeModal);
function showModal() {
  const modalImg = document.createElement("img");
  modalImg.src = this.src;
  modalImg.alt = this.alt;

  modalDiv.appendChild(modalImg);

  modalDiv.classList.toggle("visible");
  body.classList.toggle(lockBodyClass);
}
function closeModal() {
  body.classList.toggle(lockBodyClass);
  modalDiv.classList.toggle("visible");
  setTimeout(() => {
    modalDiv.getElementsByTagName("img")[0]?.remove();
  }, 500);
}

// HIGHLIGHT CONTACT DIV
// const linkToHighlightContactDiv = document.getElementById("highlight-contact");
// linkToHighlightContactDiv.addEventListener("click", () => highlighContactDiv());

// function highlighContactDiv() {
//   const contactDiv = document.getElementById("contact");

//   contactDiv.classList.add("highlight");

//   setTimeout(() => {
//     contactDiv.classList.remove("highlight");
//   }, 3000);
// }
