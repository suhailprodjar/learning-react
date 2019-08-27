import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';

class SmartImage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imageSource: props.src,
            placeHolderImage: props.placeHolder,
            altContent: props.alt,
            usedPlaceHolderImage: false,
            src: props.src
        }
        this.loadError = this.loadError.bind(this);
    }

    loadError() {
        if (!this.state.usedPlaceHolderImage) {
            this.setState({
                imageSource: this.state.placeHolderImage,
                usedPlaceHolderImage: true
            });
        }
    }

    render() {
        const { imageSource, altContent } = this.state;
        if (this.props.enableLazy) {
            return (
                <LazyLoad offset={100}>
                    <img src={imageSource} altContent={altContent} onError={this.loadError} />
                </LazyLoad>
            )
        }
        return (
            <img src={imageSource} altContent={altContent} onError={this.loadError} />
        )
    }
}

export default SmartImage