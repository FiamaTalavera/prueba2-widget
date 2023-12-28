["https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"].forEach((u) => {
  var script = document.createElement("script");
  script.src = u;
  document.body.appendChild(script);
});

class Prueba2Widget extends HTMLElement {
  static _WIDGETNAME = "prueba2-widget";
  static _WIDGETURL = "https://calm-glacier-086945410.4.azurestaticapps.net/";

  connectedCallback() {
    this.classList.add("neo-widget");
    this.classList.add(`widget--${Prueba2Widget._WIDGETNAME}`);
    this.style.overflowX = "hidden";

    fetch(`${Prueba2Widget._WIDGETURL}/${Prueba2Widget._WIDGETNAME}.html`)
      .then((data) => {
        console.log("datita -----", data)
        data.text()})
      .then((html) => {
        this.innerHTML += `<link rel="stylesheet" href="${Prueba2Widget._WIDGETURL}/${Prueba2Widget._WIDGETNAME}.css">`;
        this.innerHTML += html;
        this.initWidgetCode();
      });
    {

    }
  }

  initWidgetCode() {
    console.log("Init Widget code");
  }
}

customElements.define(Prueba2Widget._WIDGETNAME, Prueba2Widget);
