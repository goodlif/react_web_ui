import React, {Component} from "react";
import SearchBar from "./SearchBar";
import ButtonEmphasis from "./ButtonEmphasis";
import RadioGroup from "./RadioGroup";
import Slider from "./Slider";
import IconThumbs from "./Icon";
import RatingClear from "./Rating"

class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="ui container" style={{ marginTop: "10px" }}>
        <RadioGroup/>
        </div>
        <div className="ui container" style={{ marginTop: "10px" }}>
        <Slider/>
        </div>
        <div className="ui container" style={{ marginTop: "10px" }}>
        <ButtonEmphasis/>
        </div>
        <div className="ui container" style={{ marginTop: "10px" }}>
        <IconThumbs/>
        </div>
        <div className="ui container" style={{ marginTop: "10px" }}>
        <RatingClear/>
        </div>
      </div>
      
    );
  }
}

export default App;
