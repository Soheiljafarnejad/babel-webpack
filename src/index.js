const getName = () => console.log("hi");

class App {
  getName(name) {
    console.log(`hi ${name}`);
  }
}

new App().getName("soehil");
