import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Card, Container,Col,Row } from 'react-bootstrap';
import { Link } from "react-router-dom"

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
        <Link to={`/city/${this.state.Milan.name}` } state={{ city: this.state.Milan }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Milan.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Milan.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:'black'}}>{this.state.Milan.name},{this.state.Milan.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:'black'}}>
          {this.state.Milan.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.Milan.temp}°C (min: {this.state.Milan.min}°C / max: {this.state.Milan.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    {/* paris --------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={4}>
        <Link to={`/city/${this.state.Paris.name}` } state={{ city: this.state.Paris }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Paris.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)' }} key={this.state.Paris.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Paris.description.includes('rain')? 'white':'black'}}>{this.state.Paris.name},{this.state.Paris.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Paris.description.includes('rain')? 'white':'black'}}>
          {this.state.Paris.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.Paris.temp}°C (min: {this.state.Paris.min}°C / max: {this.state.Paris.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    {/* london----------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={4}>
        <Link to={`/city/${this.state.London.name}` } state={{ city: this.state.London }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.London.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.London.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.London.description.includes('rain')? 'white':'black'}}>{this.state.London.name},{this.state.London.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.London.description.includes('rain')? 'white':'black'}}>
          {this.state.London.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.London.temp}°C (min: {this.state.London.min}°C / max: {this.state.London.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    {/* new york---------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={4}>
        <Link to={`/city/${this.state.NewYork.name}` } state={{ city: this.state.NewYork }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.NewYork.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.NewYork.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.NewYork.description.includes('rain')? 'white':'black'}}>{this.state.NewYork.name},{this.state.NewYork.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.NewYork.description.includes('rain')? 'white':'black'}}>
          {this.state.NewYork.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.NewYork.temp}°C (min: {this.state.NewYork.min}°C / max: {this.state.NewYork.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    {/* tokyo------------------------------------------------------------------------------------------------------ */}
     <Col xs={12} md={6} lg={4}>
        <Link to={`/city/${this.state.Tokyo.name}` } state={{ city: this.state.Tokyo }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Tokyo.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Tokyo.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Tokyo.description.includes('rain')? 'white':'black'}}>{this.state.Tokyo.name},{this.state.Tokyo.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Tokyo.description.includes('rain')? 'white':'black'}}>
          {this.state.Tokyo.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.Tokyo.temp}°C (min: {this.state.Tokyo.min}°C / max: {this.state.Tokyo.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    {/* berlin------------------------------------------------------------------------------------------------------- */}
    <Col xs={12} md={6} lg={4}>
        <Link to={`/city/${this.state.Berlin.name}` } state={{ city: this.state.Berlin }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Berlin.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)' 
          }} key={this.state.Berlin.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Berlin.description.includes('rain')? 'white':'black'}}>{this.state.Berlin.name},{this.state.Berlin.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Berlin.description.includes('rain')? 'white':'black'}}>
          {this.state.Berlin.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.Berlin.temp}°C (min: {this.state.Berlin.min}°C / max: {this.state.Berlin.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    {/* madrid--------------------------------------------------------------------------------------------------------- */}
     <Col xs={12} md={6} lg={4}>
        <Link to={`/city/${this.state.Madrid.name}` } state={{ city: this.state.Madrid }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Madrid.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Madrid.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Madrid.description.includes('rain')? 'white':'black'}}>{this.state.Madrid.name},{this.state.Madrid.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Madrid.description.includes('rain')? 'white':'black'}}>
          {this.state.Madrid.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.Madrid.temp}°C (min: {this.state.Madrid.min}°C / max: {this.state.Madrid.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    {/* moscow--------------------------------------------------------------------------------------------------------- */}
     <Col xs={12} md={6} lg={4}>
        <Link to={`/city/${this.state.Moscow.name}` } state={{ city: this.state.Moscow }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Moscow.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Moscow.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Moscow.description.includes('rain')? 'white':'black'}}>{this.state.Moscow.name},{this.state.Moscow.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Moscow.description.includes('rain')? 'white':'black'}}>
          {this.state.Moscow.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.Moscow.temp}°C (min: {this.state.Moscow.min}°C / max: {this.state.Moscow.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    {/* sydney----------------------------------------------------------------------------------------------------------- */}
     <Col xs={12} md={6} lg={4}>
        <Link to={`/city/${this.state.Sydney.name}` } state={{ city: this.state.Sydney }} style={{ textDecoration: "none" }}> <Card className='rounded w-100 mt-5' style={{ height: '190px',backgroundImage: this.state.Sydney.description.includes('rain')? 'url(https://www.shutterstock.com/image-photo/raining-season-summer-storm-dark-260nw-2631620755.jpg)': 'url(https://img.freepik.com/vettori-gratuito/sfondo-di-cielo-blu-realistico_1048-6707.jpg?semt=ais_hybrid&w=740&q=80)'  }} key={this.state.Sydney.id}>
      <Card.Body>
        <Card.Title style={{ fontWeight:'bold',color:this.state.Sydney.description.includes('rain')? 'white':'black'}}>{this.state.Sydney.name},{this.state.Sydney.country}</Card.Title>
        
        <Card.Text style={{ fontWeight:'bold',color:this.state.Sydney.description.includes('rain')? 'white':'black'}}>
          {this.state.Sydney.description} • <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg> {this.state.Sydney.temp}°C (min: {this.state.Sydney.min}°C / max: {this.state.Sydney.max}°C)
        </Card.Text>
      </Card.Body>
     </Card></Link></Col>
    </Row></Container>)
}}

export default MyMain;