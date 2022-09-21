//Marvel Characters API URL
// const marvelURL = "https://gateway.marvel.com:443/v1/public/characters?apikey=3bc4ed058d04fc848cf88cd88dd98142"; 
// <>
//  // Google search API URL
//     <script async src="https://cse.google.com/cse.js?cx=f79ab53a4a2ab43ef">
//     </script><div class="gcse-search"></div></>
// let header= document.getElementById('header');
// let characters=document.getElementById('characters');
// let footer= document.getElementById('footer');
// let string='';
// async function getapi(marvelURL)
//     // Storing response
//     const response = await fetch(marvelURL)

    fetch(marvelAPI).then(function(response) {
        //checks if fetch request was successful
        if (!response.ok) {
            console.log(response); 
            throw new Error('HTTP error, status = ' + response.status);
            }
        }).then(function)
            // Returns the response as JSON
            return response.json();
            thenfunction(data)
        // Logs the Marvel Characters API data
            console.log('Marvel Universe Characters:', data);