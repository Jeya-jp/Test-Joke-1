function checkLinkOn()
{
    let filterUrl = window.location.href;
let linkLen = filterUrl.length;

if (linkLen <= 58)
{
    function normalPost()
    {
        let checkUrl = window.location.href;
        console.log(checkUrl);
        let post = checkUrl.split("=");
        let postNumber=post[1];
        console.log(postNumber);
        fetch("assets/json/punch.json")
                .then(function (response)
                {
                    return response.json();
                })
                .then(function (data)
                {
                    var data_filter = data.filter( element => element.id ==postNumber)
                    console.log(data_filter);
                    // console.log();
                    line=data_filter[0].punchline;
                    let text = document.getElementById("SetUp");       
                    text.innerHTML = data_filter[0].setup;  
                    console.log("Type is "+ data_filter[0].type);
    
                });            
    
    
    }
    normalPost();
}
else
{
    function facebookLink()
{
    let checkUrl = window.location.href;
    console.log(checkUrl);
    let post = checkUrl.split("&");

    let postNumberLink=post[0];
    let postNumberFind = postNumberLink.split("=");
    let postNumber = postNumberFind[1];
    // console.log(postNumber);
    fetch("assets/json/punch.json")
            .then(function (response)
            {
                return response.json();
            })
            .then(function (data)
            {
                var data_filter = data.filter( element => element.id ==postNumber)
                // console.log(data_filter);
                // console.log();
                line=data_filter[0].punchline;
                let text = document.getElementById("SetUp");       
                text.innerHTML = data_filter[0].setup;  
                // console.log("Type is "+ data_filter[0].type);

            });            


}
facebookLink();
}

}

function punchLine()
    {
        let joke = document.getElementById("punch");
        joke.innerHTML = line;
        
    }

function BringMeMore()
{
    window.open("https://sachinabs.github.io/testJokes/","_self");
}