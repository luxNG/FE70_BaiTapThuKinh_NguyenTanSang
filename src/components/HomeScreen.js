import React, { Component } from 'react';


export default class HomeScreen extends Component {
    state = {
        displayImage: './glassesImage/g1.jpg'
    }

    changeImage = (url) => {
        this.setState({
            displayImage: `${url}`
        })
    }
    showBackground = () => {
        return <div style={{}}>
            <p style={{ textAlign: 'center' }}>TRY GLASSES APP ONLINE</p>
            <img style={{ position: 'absolute', left: '340px', top: '65px', width: '10%', opacity: '0.5' }} src={this.state.displayImage} alt='model1' />

            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <img src='./glassesImage/model.jpg' alt='model1' style={{ width: '15%' }} />
                <img src='./glassesImage/model.jpg' alt='model2' style={{ width: '15%' }} />
            </div>


            <div style={{ margin: 'auto', height: '100px', marginTop: '200px' }} >
                <button style={{ width: '10%' }} onClick={() => { this.changeImage('./glassesImage/g1.jpg') }}> <img style={{ width: '100%' }} src='./glassesImage/g1.jpg' alt='abc' ></img></button>
                <button style={{ width: '10%' }} onClick={() => { this.changeImage('./glassesImage/g2.jpg') }}> <img style={{ width: '100%' }} src='./glassesImage/g2.jpg' alt='abc'></img></button>
                <button style={{ width: '10%' }} onClick={() => { this.changeImage('./glassesImage/g3.jpg') }}> <img style={{ width: '100%' }} src='./glassesImage/g3.jpg' alt='abc'></img></button>
                <button style={{ width: '10%' }} onClick={() => { this.changeImage('./glassesImage/g4.jpg') }}> <img style={{ width: '100%' }} src='./glassesImage/g4.jpg' alt='abc'></img></button>
                <button style={{ width: '10%' }} onClick={() => { this.changeImage('./glassesImage/g5.jpg') }}> <img style={{ width: '100%' }} src='./glassesImage/g5.jpg' alt='abc'></img></button>



            </div>
            {/* <img src='./glassesImage/background.jpg' alt='abc'></img> */}
        </div >
    }

    showGlass = () => {
        return
    }

    render() {
        return (
            <div>

                {this.showBackground()}
                {this.showGlass()}
            </div>
        )
    }
}
