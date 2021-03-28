//Javascript Fetch API and DOM Manipulation using jQuery


$(document).ready(function(){
            
    $(".head-content").fadeIn("slow", );
    
    });


    
    // console.log(api);

    


    function covidData (){
        let api = 'https://api.covid19api.com/summary';
        fetch(api)
        .then(function(response){
            if(!response.ok){
                throw Error('Error code')
            }
            return response.json()
        
        })
        .then(function(data){
            console.log(data);
            const newUpd = data.Global
            $('td span.g1').html(newUpd.TotalConfirmed);
            $('td span.g2').html(newUpd.TotalDeaths);
            $('td span.g3').html(newUpd.TotalRecovered);
            $('td span.g4').html(newUpd.NewDeaths);
            $('td span.g5').html(newUpd.NewConfirmed);
            $('td span.g6').html(newUpd.NewRecovered);

            const countryUpdate = data.Countries
         
            $('div.country').html(CountryTable(countryUpdate));

            const naijaUpd = data.Countries[125]

            $('td span.n1').html(naijaUpd.TotalConfirmed);
            $('td span.n2').html(naijaUpd.TotalDeaths);
            $('td span.n3').html(naijaUpd.TotalRecovered);
            $('td span.n4').html(naijaUpd.NewDeaths);
            $('td span.n5').html(naijaUpd.NewConfirmed);
            $('td span.n6').html(naijaUpd.NewRecovered);
        }).catch(error =>{
            console.log(error)
        })
    }
    covidData()

    let stringify;

    function CountryTable(country){
         stringify =`
       
       <div class="col-md-12">
       <table class="table table-bordered inner-tab border-primary table-hover table-responsive{-sm|-md|-lg|-xl|-xxl}">
       <thead class="borderless">
                 <tr>
                   <th colspan="7" class="text-center"><h1>Covid-19 Affected Countries Records</h1></th>
                 </tr>
                 <tr>
                   <th>Countries</th>
                   <th>Total Confirmed</th>
                   <th>Total Deaths</th>
                   <th>Total Recovered</th>
                   <th>New Deaths</th>
                   <th>New Confirmed</th>
                   <th>New Recovered</th>
                   
                 </tr>
                 
       </thead>
       <tbody>
       
       `;
       //Loop section

       for(const [i, count] of country.entries() )
       {
           stringify += `
           <tr>
           <td>${count.Country}</td>
           <td>${count.TotalConfirmed}</td>
           <td>${count.TotalDeaths}</td>
           <td>${count.TotalRecovered}</td>
           <td>${count.NewDeaths}</td>
           <td>${count.NewConfirmed}</td>
           <td>${count.NewRecovered}</td>
           </tr>
           ` ;
       

       }
        stringify +=`
        </tbody>
        </table>
        </div>
        
        `;
        return stringify;
        

    } 







