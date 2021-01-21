import "./App.css";
import { Component } from "react";
import { ImageSlider } from "./components/ImageSlider";
import Counter from "./components/Counter";
import Header from "./components/Header";

class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "ImageSlider",
  };

  render() {
    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
        <div className="App">
          <ImageSlider />
          <button
            onClick={() => this.setState({ whichComponentToShow: "Counter" })}
          >
            Show Counter
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Counter") {
      return (
        <div className="App">
          <Counter initialCount={0}></Counter>
          <button
            onClick={() => this.setState({ whichComponentToShow: "Header" })}
          >
            Show Header
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Header") {
      return (
        <div className="App">
          <Header title="Hello Peeps!!"></Header>
          <button
            onClick={() => this.setState({ whichComponentToShow: "Header" })}
          >
            Show Slider
          </button>
        </div>
      );
    }
    return null;
  }
}

export default App;
