console.log("Test");

let s = sessionStorage.getItem("type");

function setSessionForProgramming()
    {
        sessionStorage.setItem("type", "programming");
        location.reload();   
    }

    function setSessionForGeneral()
    {
        sessionStorage.setItem("type", "general");
        location.reload();
    }
    function setSessionForRandom()
    {
        sessionStorage.clear();
        location.reload();
    }


let postId;
let line;
if(s == null)
{
    console.log("Type is random");
    fetch("assets/json/punch.json")
    .then(function (response)
    {
        return response.json();
    })
    .then(function (data)
    {
        let rand = Math.floor(Math.random() * 387);    
        let text = document.getElementById("SetUp");        
        text.innerHTML = data[rand].setup;  
        line = data[rand].punchline;
        postId = data[rand].id;
        
    });
}

console.log(postId);
if(s == 'programming')
{

    fetch("assets/json/punch.json")
                .then(function (response)
                {
                    return response.json();
                })
                .then(function (data)
                {
                    var data_filter = data.filter( element => element.type =="programming")
                    let lenOfFilter = data_filter.length;
                    let rand = Math.floor(Math.random() * lenOfFilter);  //5 ->g
                    console.log(data_filter.id);

                    line=data_filter[rand].punchline;
                    let text = document.getElementById("SetUp");       
                    text.innerHTML = data_filter[rand].setup;  
                    console.log("Type is "+ data_filter[rand].type);
                    postId = data[rand].id;
                });            
}
console.log(postId);
if(s == 'general')
{

    fetch("assets/json/punch.json")
                .then(function (response)
                {
                    return response.json();
                })
                .then(function (data)
                {
                    var data_filter = data.filter( element => element.type =="general")
                    let lenOfFilter = data_filter.length;
                    let rand = Math.floor(Math.random() * lenOfFilter); 
                    line=data_filter[rand].punchline;
                    let text = document.getElementById("SetUp");       
                    text.innerHTML = data_filter[rand].setup;  
                    console.log("Type is "+ data_filter[rand].type);
                    postId = data[rand].id;
                });            
}

function punchLine()
    {
        let joke = document.getElementById("punch");
        joke.innerHTML = line;
        
    }
    function BringMeMore()
    {
        location.reload();
    }

    function shareTwitter()
    {
    console.log(postId);
    let quote = "I found a funny Joke for you...! Have a look...! %0D%0A";
    let shareUrl = "https://sachinabs.github.io/testJokes/show.html?postId="+postId;
    console.log(shareUrl);
    var tweetUrl = "https://twitter.com/intent/tweet?text="+quote+" see here %0D%0A "+shareUrl;
    //window.location.replace(tweetUrl);
    
    }
    
function shareFacebook()
{
    let shareUrl = "https://sachinabs.github.io/testJokes/show.html?postId="+postId;
    window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(shareUrl), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}