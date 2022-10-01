let tabs = document.querySelectorAll(".toggle"),
  contents = document.querySelectorAll(".content");
   tabs.forEach((tab, index) => {
  tab.addEventListner("click", () => {
    contents.forEach((content, index) => {
      content.classList.remove("is-active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    contents[index].classList.add("is-active")
    tabs[index].classList.add("is-active");
  });
});
