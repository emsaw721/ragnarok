
//Marvel Characters API URL
var comics = document.getElementsByClassName("comics");

$(document).ready(function () {


    $("#secondpage").addClass("hidden")


    $("#searchbtn").click(function () {
    

        var apiKey = "65ccc0475fbe74a76cd9393f0c51a7bd"
        var privateKey = "0b99ee2827d2a7cf3d74437bb5ec552cc183ef69"

        var ts = Date.now();
        let hash = CryptoJS.MD5(ts + privateKey + apiKey);
        var characterName = $("#textbox").val();
        var marvelUrl = "https://gateway.marvel.com/v1/public/characters?name=" + characterName + "&ts=" + ts + "&apikey=" + apiKey + "&hash=" + hash
        console.log(marvelUrl)

        // basically saying if no character name in textbox, then bring up the modal that tells the user to put 
        //in a character name
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

        getCharacter();

        //fetch function and using the response to dynamically display name, character image, comic appearances, 
        // and movie appearances
        function getCharacter() {
            var giphyApiKey = "KTxKYssNF5dSbkEvJSXYTQEL2dOYbCJe"
            var characterName = $("#textbox").val();
            var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + characterName +"&api_key=" + giphyApiKey+ "&limit=5" 
            console.log(giphyUrl)
    
            
            $.ajax({
                url: giphyUrl, 
                method: "GET" 
            }).then(function (response) {
                console.log(response) 
    
                var data= response.data
    
                console.log(data)
    
                for (var i=0; i< data.length; i++) {
                    var imageUrl = data[i].images.original.url
                    console.log(imageUrl)
    
                    function createImg() {
                        var img = document.createElement("img")
                        img.src = imageUrl
                        document.getElementById("giphyhome").appendChild(img)
                    }
    
                    createImg(); 
    
                }
            })

            $.ajax({
                url: marvelUrl,
                method: "GET"
            }).then(function (response) {

                var data = response.data


                var results = data.results


                for (let i = 0; i < results.length; i++) {
                    var appendedName = $("<div>").text(results[i].name);
                    $(".character-name").append(appendedName)


                    var imgHalf = JSON.stringify(results[i].thumbnail.path);
                    var imgLocal = imgHalf.slice(1, -1)

                    var jpgTag = ".jpg"
                    var imgUrl = imgLocal.concat("", jpgTag)
                    $(".charimg").attr("src", imgUrl)


                    var comicAppearances = results[i].comics.items;

                    for (i = 0; i < comicAppearances.length; i++) {
                        var comicNames = comicAppearances[i].name
                        comicNamesList = $("<div>").text(comicNames);
                        comicNamesList.attr("class", "card");
                        $(comics).append(comicNamesList);
                    }
                }


                for (let i = 0; i < results.length; i++) {

                    var seriesAppearances = results[i].series.items;

                    for (i = 0; i < seriesAppearances.length; i++) {

                        var seriesNames = seriesAppearances[i].name
                        var seriesDisplay = $("<div>").text(seriesNames);

                        seriesDisplay.attr("class", "card")
                        $(".tv-media").append(seriesDisplay)
                    }
                }


                // saying to run second html function 
                secondHTML();


                //adds class "hidden" to first page so it is not in view, and removes class "hidden" from second page 
                // so it is. 
                function secondHTML() {

                    $("#firstpage").addClass("hidden")

                    $("#secondpage").removeClass("hidden")

                }


             
            })
        }
        localStorage.setItem("charactername", characterName)

        var btnContainer = document.getElementById("pastsearch")
        var btnText = localStorage.getItem("charactername")
        var btn = document.createElement("button")
        btn.innerHTML = btnText
        btn.setAttribute("class", "pastbtn")
        btn.setAttribute("type", "button")
        btnContainer.append(btn)


        btn.addEventListener("click", function (event) {
            characterName = $(this).text();
            getCharacter();
            
        })

    })
    // created button for homepage link at top of second page so pages don't refresh (not clicking on link) 
    //when the homepagebtn is clicked, secondpage html is hidden and firstpage html is unhidden, textbox is cleared 
    $(".homepagebtn").click(function () {
        $("#secondpage").addClass("hidden")
        $("#firstpage").removeClass("hidden")
        $("#textbox").val("")
        $(".character-name").empty()
        $(".tv-media").empty()
        $(comics).empty()
        $("#giphyhome").empty(); 


       
    })



});  
