/*
 * Библиотека lazysizes
 * - feature detection
 */

/*
 * Проверить какие браузеры поддерживают нативную загрузку https://caniuse.com/
 */

// Чтоб загрузить библиотеку нужно добавить класс и добавить атрибут
// Огромный + библиотеки что она работает во всех браузерах
// Библиотека это илшний код который нужно к себе подключить и настроить по инструкции его чтобы он работал

if ("loading" in HTMLImageElement.prototype) {
    console.log("Браузер поддерживает lazyload");
  
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
    });
  } else {
    console.log("Браузер НЕ поддерживает lazyload");
  
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    script.integrity =
      "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
    script.crossOrigin = "anonymous";
    script.referrerpolicy = "no-referrer";
  
    document.body.appendChild(script);
  }
  
  const lazyImages = document.querySelectorAll("img[data-src]");
  
  lazyImages.forEach((image) => {
    image.addEventListener("load", onImageLoaded, { once: true });
  });
  
  function onImageLoaded(evt) {
    console.log("Картинка загрузилась");
    evt.target.classList.add("appear");
  }