let content = document.getElementById("content");
let digits = [];
for(let i = 0; i < 10; i++){
  let digits = {
    container: null,
    content: {
      bar: document.CreateElement("div"),
      label: document.CreateElement("div"),
    }
  }

  digit.container.id = i;
  digit.content.bar.id = "bar_" + i;
  digit.content.label.id = "label_" + i;

  digit.content.bar.addClass("bar");
  digit.content.label.addClass("label");

  content.appendChild(digit.container);
  digit.container.appendChild(digit.content.bar);
  digit.container.appendChild(digit.content.label);

  // digit.content

  digit.push(digit);
}
