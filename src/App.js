import "./styles.css";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dogImage: "" };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ dogImage: json.message });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <img alt="a dog" src={this.state.dogImage} />
      </div>
    );
  }
}
