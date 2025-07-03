import scrollama from "scrollama";
console.log('wahts up')

document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("expanded");
  });

  console.log('HELLO?')

  const headerEl = document.querySelector('header')
  const scroller = scrollama();

  console.log({headerEl})
  
  if (headerEl) {
    headerEl.dataset.scrollDirection = 'up'
    console.log('is this happerning?')
    scroller
      .setup({
        step: document.querySelectorAll('main'),
        offset: 0,
      })
      .onStepEnter((response) => {
        console.log('hello?', response)
        headerEl.dataset.scrollDirection = response.direction
      })
      .onStepExit((response) => {
        console.log('goodbye?', response)
        headerEl.dataset.scrollDirection = response.direction
      });
  }
});

