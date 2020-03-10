import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    if (event.target.value.length % 3 === 0) {
      console.log(event.target.value);
    }
  }

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form">
          <div className="field">
            <label htmlFor="">Image search</label>
            <input type="text" onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;