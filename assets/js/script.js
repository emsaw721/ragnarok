
//Marvel Characters API URL

$("#searchbtn").click(function() {
var apiKey = "65ccc0475fbe74a76cd9393f0c51a7bd"
var privateKey = "0b99ee2827d2a7cf3d74437bb5ec552cc183ef69"

var ts = Date.now(); 
let hash = CryptoJS.MD5(ts+privateKey+apiKey);
var characterName = $("#textbox").val(); 
var marvelUrl = "https://gateway.marvel.com/v1/public/characters?name=" +characterName+ "&ts=" +ts+ "&apikey=" +apiKey+ "&hash=" +hash
console.log(marvelUrl)


if (characterName === "") {
    console.log("modal start")
    var modal = document.getElementById("characterModal");
    var span = document.getElementsByClassName("close")[0];


        modal.style.display = "block";


    $(span).click(function () {
        modal.style.display = "none";
    })

    $(window).click(function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
    return;

}; 


//fetch function
fetch(marvelUrl)
    .then(function(response) {
        if (response.ok) {
            console.log(response)
        response.json()
    .then(data => {
        // data from the api
        console.log(data);
    })}

    else{
        throw new Error('HTTP error, status = ' + response.status);
    }; 

}); 
}); 

    $("#searchbtn").click(function(event) {
        var newHTML = document.createElement("a")
        newHTML.href= "characterindex.html" 
        newHTML.innerHTML= "Search" 
        this.append(newHTML)
    })


// Google search API URL
    //<script async src="https://cse.google.com/cse.js?cx=f79ab53a4a2ab43ef">
    //</script><div class="gcse-search"></div></>

// let header= document.getElementById('header');

// let characters=document.getElementById('characters');

// let footer= document.getElementById('footer');

// let string='';

// async function getapi(marvelURL)

// // Storing response

// var response = await fetch(marvelURL)

// .then(function (response){
    
// // fetch request
// if (response.ok) {
// throw new Error('HTTP error, status = ' + response.status);
//       }
   
//  // Returns the response as JSON
//     return response.json();
//  }).then(function(data){
    
//  // Logs Marvel Characters API data
//   console.log('Marvel Universe Characters:', data);

// // Display header
//     header.innerHTML='<div class="bg-red-900 text-center py-4 lg:px-4"><span class="font-semibold mr-2 text-left flex-auto text-white">Marvel Universe Characters</span></div>';
//     string +='<div class="flex flex-wrap pt-5">';
        
// // Loop the API data 

// for(let i=0;i<data.data.results.length;i++){
//  let element = data.data.results[i];
 
//  //Display Each Character Attributes

//  string+='<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4"><a href="'+element.urls[0].url+'" target="_blank"> <div class=" max-w-sm rounded overflow-hidden shadow-lg m-4"><img class="w-full" src="'+element.thumbnail.path+'/standard_small.'+element.thumbnail.extension+'" alt="'+element.name+'"><div class="px-6 py-4"><div class="font-bold text-xl mb-2">'+element.name+'</div></div></a></div></div>';
// }
//  string+='</div'

// characters.innerHTML=string;


// let header= document.getElementById('header');

// let characters=document.getElementById('characters');

// let footer= document.getElementById('footer');

// let string='';

// async function getapi(marvelURL)

// // Storing response

// const response = await fetch(marvelURL)

// .then(function (response){
    
//     // fetch request
//     if (!response.ok) {
//         throw new Error('HTTP error, status = ' + response.status);
//         }
   
//         // Returns the response as JSON
//         return response.json();
// }).then(function(data){
    
    // Log Marvel Characters API data
        
    // console.log('Marvel Universe Characters:', data);

    //     // Displayed
        
    //     header.innerHTML='<div class="bg-red-900 text-center py-4 lg:px-4"><span class="font-semibold mr-2 text-left flex-auto text-white">Marvel Universe Characters</span></div>';
    //     string +='<div class="flex flex-wrap pt-5">';
        
    //     // Loop the API data 
        
    //     for(let i=0;i<data.data.results.length;i++){
    //         let element = data.data.results[i];
            
    //         //Display Character Attributes
            
    //         string+='<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4"><a href="'+element.urls[0].url+'" target="_blank"> <div class=" max-w-sm rounded overflow-hidden shadow-lg m-4"><img class="w-full" src="'+element.thumbnail.path+'/standard_small.'+element.thumbnail.extension+'" alt="'+element.name+'"><div class="px-6 py-4"><div class="font-bold text-xl mb-2">'+element.name+'</div></div></a></div></div>';
    //     }
    //     string+='</div'

    //     characters.innerHTML=string;

    // });