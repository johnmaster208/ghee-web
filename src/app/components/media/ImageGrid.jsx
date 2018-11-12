import React, {Component} from 'react'
import Image from './Image'

class ImageGrid extends Component {

    render() {
        const { width, height } = this.props.dimensions
        return (
            <div className="image-grid">
                {this.renderImageGrid(width, height)}
            </div>
        )
    }

    renderImageGrid(width, height) {
        let Grid = []
        let total = width * height
        for ( let i = 0; i < total; i++) {
            if( i % (total / width ) === 0) {
                Grid.push(
                    <div className="image-grid-row"></div>
                )
            } else {
                Grid.push(
                    <div key={i} className="image-grid-item">
                        <Image key={i} width={25} height={25} />
                    </div>
                )
            }
            
        }
        return Grid
    }
}

export default ImageGrid