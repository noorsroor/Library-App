import React, {Component} from 'react';

class Footer extends Component {
    constructor() {
        super();
        this.state ={count :0};
    }

    increment =() => {
        this.setState({count: this.state.count +1});
    }

    render() {
        return (
            <footer>
                <hr></hr>
                <div class="copyright">&copy; 2024 Noor sroor. All Rights Reserved.      </div>
            </footer>
        )
    }
}

export default Footer;