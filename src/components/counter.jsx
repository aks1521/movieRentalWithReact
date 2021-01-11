import React, { Component } from "react";

export class Counter extends Component {
  
  formatCount() {
    const count  = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        </div>
        <div className="col">
        <button
          onClick={() => this.props.handleIncrement(this.props.counter)}
          className="btn btn-sm btn-secondary m-2"
        >
          +
        </button>

        <button
          onClick={() => this.props.handleDecrement(this.props.counter)}
          className="btn btn-sm btn-secondary m-2"
          disabled={this.props.counter.value===0}
        >
          -
        </button>
        <button
          onClick={() => this.props.deleteMe(this.props.counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          x
        </button>
        </div>
      </div>
    );
  }
}
