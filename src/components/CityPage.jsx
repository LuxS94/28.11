import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function CityPage(){
    const location = useLocation();
    const { city } = location.state || {};
    const[previsioni,setPrevisioni]= useState(null);
    useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${city.id}&appid=f58a605683c23d6c415bb4dfd7329a68&units=metric`
    )
      .then((res) => {if(res.ok){return res.json()}
    else{throw new Error("Errore nelle previsioni")}})
      .then(data => setPrevisioni(data))
      .catch(err => console.error("Errore", err));
  }, [city.id]);

  return (
    <body className="w-100" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2SBh4RxGYfaLBc8Lw7xHOjvKb5Fc-dUcTJg&s)', backgroundSize:'cover'}}>
    <div >
      <h1>{city.name}</h1>

      {previsioni &&(
        <div >
            <h2>Next hours:</h2>
            <h5 className="mt-3">{previsioni.list[1].weather[0].description}</h5>
          <h2 className="mt-3">Temperature:</h2>
          <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg>{previsioni.list[0].main.temp}°C</h5>
<h2 className="mt-3">Wind speed:</h2>
<h5 className="mt-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag-fill me-3" viewBox="0 0 16 16">
  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
</svg>{previsioni.list[3].wind.speed} km/h</h5>

        </div>
      )}
    </div></body>
  );
}

export default CityPage