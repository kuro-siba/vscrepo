

const showkirin = (entries) => {
  console.log(entries[0].target);
};

const kirinObserver = new IntersectionObserver(showkirin);

kirinObserver.observe(document.querySelector('#kirin'));