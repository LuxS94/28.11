import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Card, Container,Col,Row } from 'react-bootstrap';

class MyMain extends Component {
    state= {
        Milan:{
        name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',},
        Paris :{ name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',}}

    }

    getMeteoMilan=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Milan,IT&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({Milan:{
                name: meteo.name,
                id: meteo.id,
                country: meteo.sys.country,
                description: meteo.weather[0].description,
                temp: meteo.main.temp,
                min: meteo.main.temp_min,
                max: meteo.main.temp_max,
            }});
    })
        
        .catch((err) => {
        console.log('Errore nella chiamata', err)});
    }
    
        
getMeteoParis=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Paris,FR&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({Paris:{
                name: meteo.name,
                id: meteo.id,
                country: meteo.sys.country,
                description: meteo.weather[0].description,
                temp: meteo.main.temp,
                min: meteo.main.temp_min,
                max: meteo.main.temp_max,
            }})
    })
        
        .catch((err) => {
        console.log('Errore nella chiamata', err)});
    }
     componentDidMount(){
    this.getMeteoMilan();
    this.getMeteoParis();   
}
    render() {
    return (
        <Container ><Row><Col xs={12} md={6} lg={3}>
         <Card className='rounded ' style={{ width: '18rem',backgroundImage:'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)' }} key={this.state.Milan.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:'black'}}>{this.state.Milan.name},{this.state.Milan.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:'black'}}>
          {this.state.Milan.description} - {this.state.Milan.temp}°C (min: {this.state.Milan.min}°C / max: {this.state.Milan.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* paris --------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={3}>
         <Card className='rounded ' style={{ width: '18rem',backgroundImage:'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)' }} key={this.state.Paris.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:'black'}}>{this.state.Paris.name},{this.state.Paris.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:'black'}}>
          {this.state.Paris.description} - {this.state.Paris.temp}°C (min: {this.state.Paris.min}°C / max: {this.state.Paris.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col></Row></Container>)
}

export default MyMain;