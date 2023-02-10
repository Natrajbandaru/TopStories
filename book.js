$(document).ready(function(){
    let newsContaineEl = document.getElementById("newsContainer");

    function createNewBoard(result){
        let {title, url, multimedia} =  result;
        //console.log(result);
        let resultItem = document.createElement("div");
        resultItem.classList.add("result-item","d-flex","justify-content-between");
        
        let innerCardEl = document.createElement("div");
        innerCardEl.classList.add("inner-card","d-flex","flex-column");
        resultItem.appendChild(innerCardEl);

        let titleEl = document.createElement("a");
        titleEl.textContent = title;
       
        innerCardEl.appendChild(titleEl);
        
        let breakEl = document.createElement("br");
        innerCardEl.appendChild(breakEl);

        let urlEl = document.createElement("a");
        urlEl.textContent = url;
        urlEl.href = url;
        urlEl.target = "_blank";
        innerCardEl.appendChild(urlEl);

        let imgEl = document.createElement("img");
        imgEl.src = multimedia[2].url;
        imgEl.classList.add("image");
        resultItem.appendChild(imgEl);
                
        newsContaineEl.appendChild(resultItem);
    }

    function displayResult(results){
        for(let result of results){
            createNewBoard(result)
            console.log(result);
        }
    }
    $("#getNews").click(function(){
        let newsValue = $("#news").val();
        if (newsValue === "select"){
            $("#error").text("Please enter a valid input");
            $("#newsContainer").empty();
        }
        else{
            $("#newsContainer").empty();
            $.ajax({  
                url : "https://api.nytimes.com/svc/topstories/v2/" + newsValue +".json?api-key=JKmvjVAFYllK9jIDli4hnh11KXbEJkvb", 
                type: 'GET',  
                async:true,
                success: function(res) {  
                    let {results} = res;
                    displayResult(results);
                   // console.log(res.num_results);
                    $("#error").text("");
                }, 
                error :function(s){
                    console.log(s);
                    alert("unknown");
                    $("#newsContainer").empty();
                                
                }
            })
        }
       
    })
});



/*open weather api*/

// jQuery.ajax({  
//     url: 'https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=c8540bbb21e99e8a5c00bad1155abad4',  
//     type: 'GET',  
//     data: "",
//     success: function(res) {  
//        // $("#para").html(res);  
//         alert(JSON.stringify(res));              
//     }, 
//     error :function(s){
//         alert("unknown");              
//     }
 
// });  

/* using fetch method*/

        // let options = {
        //     method : "GET"
        // };
        // fetch(url,options)
        // .then(function(response){
        //     return response.json();
        // })
        // .then(function(jsonData){
        //     let {results} = jsonData;
        //     displayResult(results);
        //     // console.log(jsonData.results[1]);
        //     // console.log(jsonData.results[1].url);
        //     // console.log(jsonData.results[1].title);
        //     // console.log(jsonData.results[1].multimedia[2].url);
        // })