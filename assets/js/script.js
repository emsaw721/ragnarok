
//Marvel Characters API URL

var comics = document.getElementsByClassName("comics"); 

$(document).ready( function() {

    
    $("#secondpage").addClass("hidden") 


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
    var close = document.getElementsByClassName("close")[0];


        modal.style.display = "block";


    $(close).click(function () {
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

$.ajax({
    url: marvelUrl,
    method: "GET"
}).then(function(response){
    console.log(response)
    var data = response.data
    console.log(data)

    var results = data.results 
            console.log(results)
    
            for (let i=0; i< results.length; i++ ) {
            var appendedName = $("<div>").text(results[i].name); 
            $(".character-name").append(appendedName)


            var imgHalf = JSON.stringify(results[i].thumbnail.path); 
            localStorage.setItem("img", imgHalf)
            console.log(imgHalf)
       
        // img still not working, but getting closer? 
            var imgPath= localStorage.getItem("img")
            console.log(imgPath)
            $(".charimg").attr("src", imgPath + ".jpg")

            // figure out a way to select the name only and then display each name on individual cards
            var comicAppearances = results[i].comics.items;
            console.log(comicAppearances)
        
        for (i=0; i< comicAppearances.length; i++) {
            var comicNames = comicAppearances[i].name 
            console.log(comicNames)
            comicNamesList = $("<div>").text(comicNames); 
            comicNamesList.attr("class", "card"); 
            $(comics).append(comicNamesList); 
        } }


            for (let i=0; i< results.length; i++ ) {
 
             var seriesAppearances = results[i].series.items;
            console.log(seriesAppearances)

        for (i=0; i< seriesAppearances.length; i++) {

            var seriesNames = seriesAppearances[i].name 
            var seriesDisplay = $("<div>").text(seriesNames);
           
            seriesDisplay.attr("class", "card")
            $(".tv-media").append(seriesDisplay) 
        }} 

          

  secondHTML(); 



    function secondHTML() {
   
    $("#firstpage").empty() 

    $("#secondpage").removeClass("hidden") 
    
    }


})

})


// var googleUrl = AIzaSyCqukRh9S6YNRuqZEe3sQaOP34Lh2lM-Ko
// $.ajax ({

// })

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

});  
