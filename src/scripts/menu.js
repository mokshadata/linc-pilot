import scrollama from "scrollama";

document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  });

  const headerEl = document.querySelector('header')
  const scroller = scrollama();
  
  if (headerEl) {
    headerEl.dataset.scrollDirection = 'up'
    scroller
      .setup({
        step: document.querySelectorAll('main'),
        offset: 0,
      })
      .onStepEnter((response) => {
        headerEl.dataset.scrollDirection = response.direction
      })
      .onStepExit((response) => {
        headerEl.dataset.scrollDirection = response.direction
      });
  }
});

