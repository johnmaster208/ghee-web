import React, {Component} from 'react'

class Image extends Component {

    render() {
        return (
            <img
            className="image"
            src={`http://placehold.it/${this.props.width}x${this.props.height}`}
            type={this.props.type ? this.props.type : 'default'}
            />
        )
    }
}

export default Image