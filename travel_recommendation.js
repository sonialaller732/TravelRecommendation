	  const btnSearch = document.getElementById('btnSearch');
	  const btnreset= document.getElementById('reset');
	
	   
     function resetButton() {
		 const resultDiv = document.getElementById('result');
          document.getElementById("conditionInput").value = "";
		  resultDiv.innerHTML = '';
		  
		  resultDiv.innerHTML = `<div class="box2">
<div class="box3">
<p>Explore Dream Destination</p>
</div>
<div class="box4"><h2>Travel may be local, regional, national (domestic) or international. In some countries, non-local internal travel may require an internal passport, while international travel typically requires a passport and visa. Tours are a common type of travel. Examples of travel tours are expedition cruises,[14] small group tours,[15] and river cruises</h2></div>
</div>


<button id="">Book Now</button>`;
	 }

	
	  function searchCondition() {
        const input = document.getElementById('conditionInput').value.toLowerCase();
		console.log(input); 
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
		fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
			  console.log(data);
            //const condition = data.countries(item => item.countries.toLowerCase() === input.toLowerCase());
			
			
			if(input ==='australia' || input ==='japan' || input ==='brazil'){ 
				 resultDiv.innerHTML += `<h2>Search Result</h2><br><br>`;
					data.countries.forEach(country => {
					  country.cities.forEach(city => {

						if (city.name.toLowerCase().includes(input)) {
						  result = {
							country: country.name,
							city: city.name,
							countryimage:city.imageUrl,
						  description: city.description,
						  };
						  CountryDate = {
							timeZone:country.timeZone,
							hour12:true,
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit"
						  
						  };
							const newYorkTime = new Date().toLocaleTimeString('en-US', CountryDate);
						
							  resultDiv.innerHTML +=			  
							  `<div class="country">
							  <h2>${result.city}</h2>
							  <p> ${result.description}</p>
							  <p> ${newYorkTime}</p>
							  <img src="${result.countryimage}" height="60%" width="60%">
							  </div>`;
						}
						
					  });
					  
					});
		  }else if(input ==='temples'){
			  
			 
			   resultDiv.innerHTML += `<h2>Search Result</h2><br><br>`;
			  data.temples.forEach(temple => {	
								 resultDiv.innerHTML += `
								<div class="temple">
								<h2>${temple.name}</h2>
								<p>${temple.description}</p>
								<img src="${temple.imageUrl}" height="60%" width="60%">
								</div>
								`;		  
						   
						});
					}else if(input ==='beaches'){
						 resultDiv.innerHTML += `<h2>Search Result</h2><br><br>`;
							data.beaches.forEach(beach => {
								resultDiv.innerHTML += `
								<div class="beach">
							<h2>${beach.name}</h2>
								<p>${beach.description}</p>
								<img src="${beach.imageUrl}" height="60%" width="60%">
								</div>
							`;
								
			                  //  resultDiv.innerHTML += `<h2>${beach.name}</h2><br>`;
								//resultDiv.innerHTML += `<h2>${beach.description}</h2><br>`;
								//resultDiv.innerHTML += `<h2>${beach.imageUrl}</h2><br>`;
							});
							}else{
								resultDiv.innerHTML += `<h2>No Data found...</h2><br>`;
								
							}
							
						}).catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
	  }
	    btnSearch.addEventListener('click', searchCondition);
		btnreset.addEventListener("click", resetButton);
		
			

	  
	  