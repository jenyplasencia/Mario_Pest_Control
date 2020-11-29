

function totals(){
    
    var gomB = document.getElementById("Goombas").value;
    var bob = document.getElementById("Bob-ombs").value;
    var cheep = document.getElementById("Cheep-Cheeps").value;
    var gomBPest = parseInt(gomB, 10);
    var bobPest = parseInt(bob, 10);
    var cheepPest = parseInt(cheep, 10);
    var totalPestCaught = gomBPest + bobPest + cheepPest; 
    var totalCost = (gomBPest * 5) + (bobPest * 7) + (cheepPest * 11);
    var x = document.getElementById("totalPest");
    var m = document.createTextNode("Total Pest Caught is:" + " " + totalPestCaught + "..... " + "Total Cost of The Service is:" + " " + totalCost);
    x.appendChild(m);
}
    


