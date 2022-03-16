let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
const fetchData = async () =>{

   let api = await fetch("https://api.covid19api.com/total/country/belgium", requestOptions)
   let object = api.json()
   object.then((array) =>{
       document.getElementById('api1').innerHTML = numberWithCommas(array[array.length - 1].Confirmed)
       document.getElementById('api2').innerHTML = numberWithCommas(array[array.length - 1].Deaths)
       document.getElementById('api3').innerHTML = numberWithCommas(array[array.length - 1].Active)
       document.getElementById('api4').innerHTML = array[array.length - 1].Country
        // console.log(array[array.length - 1]);
   })
    .catch(error => console.log('error', error));

}
fetchData();
