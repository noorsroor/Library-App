import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        this.state ={count :0};
    }

    increment =() => {
        this.setState({count: this.state.count +1});
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg border-bottom">
    <div class="container-fluid">
      <p class="navbar-brand text-white fw-bold">
        Library
      </p>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white fw-bold position-relative" href="#">shope</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
        )
    }
}

export default Header;