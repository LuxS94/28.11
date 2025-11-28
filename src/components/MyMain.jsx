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
        max: '',},
    London:{ name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',},
    NewYork:{ name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',},
    Tokyo:{ name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',},
    Berlin:{ name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',},
    Madrid:{ name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',},
        Moscow:{ name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',},
        Sydney:{ name: '',
        id: '',
        country: '',
       description:'',
        temp: '',
        min: '',
        max: '',}
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
    getMeteoLondon=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({London:{
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
        getMeteoNewYork=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=New%20York,US&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({NewYork:{
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
    getmeteoTokyo=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({Tokyo:{
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
    getMeteoBerlin=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Berlin,DE&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({Berlin:{
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
    getMeteoMadrid=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Madrid,ES&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({Madrid:{
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
    getMeteoMoscow=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Moscow,RU&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({Moscow:{
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
    getMeteoSydney=function () {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric';
        fetch (URL)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è riuscita')
        }})
        .then ((meteo) => {
            this.setState ({Sydney:{
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
    this.getMeteoLondon();
    this.getMeteoNewYork();
    this.getmeteoTokyo();
    this.getMeteoBerlin();
    this.getMeteoMadrid();
    this.getMeteoMoscow();
    this.getMeteoSydney();
}
    render() {
    return (
        // milan-----------------------------------------------------------------------------------------------------
        <Container  ><Row><Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Milan.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Milan.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:'black'}}>{this.state.Milan.name},{this.state.Milan.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:'black'}}>
          {this.state.Milan.description} - {this.state.Milan.temp}°C (min: {this.state.Milan.min}°C / max: {this.state.Milan.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* paris --------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Paris.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)' }} key={this.state.Paris.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Paris.description.includes('rain')? 'white':'black'}}>{this.state.Paris.name},{this.state.Paris.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Paris.description.includes('rain')? 'white':'black'}}>
          {this.state.Paris.description} - {this.state.Paris.temp}°C (min: {this.state.Paris.min}°C / max: {this.state.Paris.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* london----------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.London.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.London.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.London.description.includes('rain')? 'white':'black'}}>{this.state.London.name},{this.state.London.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.London.description.includes('rain')? 'white':'black'}}>
          {this.state.London.description} - {this.state.London.temp}°C (min: {this.state.London.min}°C / max: {this.state.London.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* new york---------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.NewYork.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.NewYork.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.NewYork.description.includes('rain')? 'white':'black'}}>{this.state.NewYork.name},{this.state.NewYork.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.NewYork.description.includes('rain')? 'white':'black'}}>
          {this.state.NewYork.description} - {this.state.NewYork.temp}°C (min: {this.state.NewYork.min}°C / max: {this.state.NewYork.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* tokyo------------------------------------------------------------------------------------------------------ */}
     <Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Tokyo.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Tokyo.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Tokyo.description.includes('rain')? 'white':'black'}}>{this.state.Tokyo.name},{this.state.Tokyo.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Tokyo.description.includes('rain')? 'white':'black'}}>
          {this.state.Tokyo.description} - {this.state.Tokyo.temp}°C (min: {this.state.Tokyo.min}°C / max: {this.state.Tokyo.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* berlin------------------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Berlin.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)' 
          }} key={this.state.Berlin.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Berlin.description.includes('rain')? 'white':'black'}}>{this.state.Berlin.name},{this.state.Berlin.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Berlin.description.includes('rain')? 'white':'black'}}>
          {this.state.Berlin.description} - {this.state.Berlin.temp}°C (min: {this.state.Berlin.min}°C / max: {this.state.Berlin.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* madrid--------------------------------------------------------------------------------------------------------- */}
     <Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Madrid.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Madrid.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Madrid.description.includes('rain')? 'white':'black'}}>{this.state.Madrid.name},{this.state.Madrid.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Madrid.description.includes('rain')? 'white':'black'}}>
          {this.state.Madrid.description} - {this.state.Madrid.temp}°C (min: {this.state.Madrid.min}°C / max: {this.state.Madrid.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* moscow--------------------------------------------------------------------------------------------------------- */}
     <Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Moscow.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Moscow.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Moscow.description.includes('rain')? 'white':'black'}}>{this.state.Moscow.name},{this.state.Moscow.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Moscow.description.includes('rain')? 'white':'black'}}>
          {this.state.Moscow.description} - {this.state.Moscow.temp}°C (min: {this.state.Moscow.min}°C / max: {this.state.Moscow.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    {/* sydney----------------------------------------------------------------------------------------------------------- */}
     <Col xs={12} md={6} lg={4}>
         <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Sydney.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Sydney.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Sydney.description.includes('rain')? 'white':'black'}}>{this.state.Sydney.name},{this.state.Sydney.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Sydney.description.includes('rain')? 'white':'black'}}>
          {this.state.Sydney.description} - {this.state.Sydney.temp}°C (min: {this.state.Sydney.min}°C / max: {this.state.Sydney.max}°C)
        </Card.Text>
      </Card.Body>
    </Card></Col>
    </Row></Container>)
}}

export default MyMain;