import {tangdiem, giamdiem} from "./alert.js"
const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
    <link rel="stylesheet" href="./questionComponent.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">  
    <div class="row">
        <p id="ques"></p>
        <div class="col" id="answer1">
        </div>
        <div class="col" id="answer2">
        </div>
        <div class="col" id="answer3">
        </div>
        <div class="col" id="answer4">
        </div>
    </div>
`;

export default class QuestionComponent extends HTMLElement {
  constructor(data) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$ques = this.shadowRoot.getElementById("ques");
    this.$ans1 = this.shadowRoot.getElementById("answer1");
    this.$ans2 = this.shadowRoot.getElementById("answer2");
    this.$ans3 = this.shadowRoot.getElementById("answer3");
    this.$ans4 = this.shadowRoot.getElementById("answer4");

    this.setAttribute("data", JSON.stringify(data));
  }

  connectedCallback(){
      this.$ans1.onclick = (event) => {
        event.preventDefault();
        tangdiem();
      }

      this.$ans2.onclick = (event) => {
        event.preventDefault();
        giamdiem();
      }

      this.$ans3.onclick = (event) => {
        event.preventDefault();
        giamdiem();
      }

      this.$ans4.onclick = (event) => {
        event.preventDefault();
        giamdiem();
      }
  }

  static get observedAttributes() {
    return ["data"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "data") {
      let dataQuestion = JSON.parse(newValue);
      console.log(dataQuestion.question);
      this.$ques.innerHTML = dataQuestion.question;
      this.$ans1.innerHTML = dataQuestion.correct_answer;
      this.$ans2.innerHTML = dataQuestion.incorrect_answers[0];
      this.$ans3.innerHTML = dataQuestion.incorrect_answers[1];
      this.$ans4.innerHTML = dataQuestion.incorrect_answers[2];
    }
  }
}

window.customElements.define("question-container", QuestionComponent);
