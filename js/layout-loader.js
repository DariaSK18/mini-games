// funcs for header and footer (using fetch)

document.addEventListener("DOMContentLoaded", () => {
  const insertHTML = (selector, filePath) => {
    const container = document.querySelector(selector);
    if (container) {
      fetch(filePath)
        .then((res) => res.text())
        .then((data) => {
        //   console.log(data);
          container.innerHTML = data
        })
        .catch(err => console.error(`Error loading ${filePath}`, err))
    //   console.log(filePath);
    }
  };

  insertHTML("#header_placeholder", "src/header.html");
  insertHTML("#footer_placeholder", "src/footer.html");
});
