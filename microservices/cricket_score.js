const fetch = require('node-fetch');
module.exports = async function () {
    let cricket = await fetch("https://cricapi.com/api/matches?apikey=rB4qumLqStWQdZh6hfeEtZ8POhD2"     
    ).then(response  => response.json());    
    let matches = cricket.matches;
    var finalMatches="";
  
    if(matches.length > 0) {
     for(i=0; i<matches.length && i<100; i++) {           
    
    if(`${matches[i].type}`=="ODI" || `${matches[i].type}`=="Twenty20"){
        let team1 = `${matches[i]["team-1"]}`;
        let team2 = `${matches[i]["team-2"]}`;
        let date =`${matches[i].date}`;
        let dateArray= date.split("T");
        let finalDate=dateArray[0];
        let finalCricket = " "+`${team1}`+ " vs " + `${team2}`+" on " +`${finalDate}`;
        if(finalMatches=="")
          finalMatches= finalCricket;
         else 
        finalMatches=`${finalMatches} ,
        ${finalCricket}`;

        }
     
    }
    return finalMatches;
    }
    else{
        let msg = "No matches for now";
        return msg;
    }
 

};