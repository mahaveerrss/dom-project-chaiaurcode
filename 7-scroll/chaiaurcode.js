// use indicator width

const section = document.getElementsByName("section")[0];

const progressBar = document.getElementsByClassName("progress")[0];

const lineIndicator = document.querySelectorAll("#lineIndicator")[0];

window.addEventListener("scroll", (e) => {
  if (window.scrollY) {
    const scrollPosition = window.scrollY;

    const docHeight = document.body.scrollHeight;

    const calculated = Math.ceil(parseInt((scrollPosition / docHeight) * 100));
    if (calculated > 95) {
      progressBar.innerText = 100 + "%";
      lineIndicator.style.width = "100%";
    } else {
      progressBar.innerText = calculated + "%";

      lineIndicator.style.width = calculated + "%";
    }
  }
});
