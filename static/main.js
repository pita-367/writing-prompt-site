function submitvalue() { 
        //on submit, move to prompt page and set a GET request
        var numnouns = document.getElementById("numnoun").value;
        var url = $("#Url").attr("data-url");
        var fullurl = url + "?numnoun=" + numnouns; // Construct the full URL 
        document.location.href = fullurl;
  

}
// used to set a loading screen 
function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }

function onLoad() {
        setVisible('#page', true);
        setVisible('#loading', false);
        generateWords()

}

function generateWords(){
    //get value from url parameter
    var numnouns = window.document.URL.toString().split("?numnoun=")[1];
    var numnouns = numnouns ? numnouns : 1;  // if none given use default of 1


    // For now, will use a set array of nouns 
    var suggestions = new Array();
 	suggestions['nouns'] = new Array( 'teapot', 'laptop', 'dog', 'city','painting','photoshoot','glass','birthday','college')
    var idx = []; //list of random unique numbers 
    console.log(numnouns)
    
    while (idx.length<numnouns) {
       var n = Math.floor(Math.random() * suggestions["nouns"].length) ; 
       if (idx.indexOf(n) === -1) idx.push(n); //if idx not in list, push it in
    }
    console.log(idx)
    // for each index get word and print in a list
    var idxlen = idx.length; 
    var text = "<ul>"
    for (i=0;i<idxlen;i++){ 
      var word = suggestions["nouns"][idx[i]]
      text += "<li>" + word + "</li><br>";
    }
text += "</ul>";

document.getElementById("wordlist").innerHTML = text;
    
}
