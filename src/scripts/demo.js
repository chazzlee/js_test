export class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerText = "It's ALIVE!!!";

    this.ele.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    this.ele.children[0].innerText = "Ouch!";
  }
}
