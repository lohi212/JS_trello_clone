

// IIFE - Immediatly Invoked Function Expression
// Anonymous function - 

(function() {
    const url="/test-url";
    fetch(url)
	.then(response => response.json())
	.then(data => {
        const container = document.querySelector("#container");
        for (var i = 0; i < data.length; i ++)
        {
            for(x in data[i]) { 
                var card=document.createElement('div');
                card.innerHTML = data[i][x];
                container.appendChild(card);
            }
        }
        

    });
    
})();