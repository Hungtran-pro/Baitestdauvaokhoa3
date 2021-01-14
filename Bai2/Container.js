import { data } from "./data.js";
import QuestionComponent from "./QuestionComponent.js";
const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
  <link rel="stylesheet" href="./container.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"> 
    <div class="container" id="questions">
    </div>
`;

export default class Container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$boxQuestion = this.shadowRoot.getElementById("questions");
  }

  connectedCallback(){
    this.setAttribute('data', JSON.stringify(data.results));
  }

  static get observedAttributes(){
      return ["data"];
  }

  attributeChangedCallback(attrName, oldValue, newValue){
    if(attrName == "data"){
        let Questions = JSON.parse(newValue);
        for(let Question of Questions){
            let $questionComponent = new QuestionComponent(Question);
            this.$boxQuestion.appendChild($questionComponent);
        }
    }
  }
}

window.customElements.define("question-box", Container);
