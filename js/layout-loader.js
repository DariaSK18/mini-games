// funcs for header and footer (using fetch)

document.addEventListener("DOMContentLoaded", () => {
  const insertHTML = (selector, filePath) => {
    const container = document.querySelector(selector);
    if (container) {
      fetch(filePath)
        .then((res) => res.text())
        .then((data) => {
          //   console.log(data);
          container.innerHTML = data;
          // const links = document.querySelectorAll(".nav-link");
          // // console.log(links);
          // links.forEach((link) => {
          //   // console.log(link);
          //   link.addEventListener('click', () => {
          //     if (link.classList.contains("active")) {
          //     link.classList.remove("active");
          //   }
          //   else {
          //     link.classList.add("active");
          //   }
          //   })
            
          // });
        })
        .catch((err) => console.error(`Error loading ${filePath}`, err));
      //   console.log(filePath);
    }
  };

  insertHTML("#header_placeholder", "src/header.html");
  insertHTML("#footer_placeholder", "src/footer.html");
});
