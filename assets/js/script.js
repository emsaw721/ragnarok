//Marvel Characters API URL

const marvelURL = "https://gateway.marvel.com:443/v1/public/characters?" +marvelTS+ "&apikey=3bc4ed058d04fc848cf88cd88dd98142&" +marvelHash+ ""; 
var marvelTS = "some timestamp from when the api was called" ;
var marvelHash = "md5 digest of the ts, private key, and public key" ; 
// Google search API URL
    //<script async src="https://cse.google.com/cse.js?cx=f79ab53a4a2ab43ef">
    //</script><div class="gcse-search"></div></>

let header= document.getElementById('header');

let characters=document.getElementById('characters');

let footer= document.getElementById('footer');

let string='';

async function getapi(marvelURL)

// Storing response

  var response = await fetch(marvelURL)
// don't want to use const because then can't change response variable 

.then(function (response){
    
    // fetch request
    if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
        }
   
        // Returns the response as JSON
        return response.json();
}).then(function(data){
    
    // Logs Marvel Characters API data
        console.log('Marvel Universe Characters:', data);

        // Display header
        header.innerHTML='<div class="bg-red-900 text-center py-4 lg:px-4"><span class="font-semibold mr-2 text-left flex-auto text-white">Marvel Universe Characters</span></div>';
        string +='<div class="flex flex-wrap pt-5">';
        
        // Loop the API data 
        for(let i=0;i<data.data.results.length;i++){
            let element = data.data.results[i];
            //Display Each Character Attributes
            string+='<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4"><a href="'+element.urls[0].url+'" target="_blank"> <div class=" max-w-sm rounded overflow-hidden shadow-lg m-4"><img class="w-full" src="'+element.thumbnail.path+'/standard_small.'+element.thumbnail.extension+'" alt="'+element.name+'"><div class="px-6 py-4"><div class="font-bold text-xl mb-2">'+element.name+'</div></div></a></div></div>';
        }
        string+='</div'

        characters.innerHTML=string;