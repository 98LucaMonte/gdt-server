"use-strict";

function creaViewMain() {
    return `
    <div class="container container-fluid mt-5">
    
      <div class="row">

        <h2>Benvenuto <br>Seleziona il Product System e l'Impact Method su cui vuoi eseguire il calcolo.</h2>
        
        <div class="col-sm-6 order-element0 mt-5">
            
            <p style="font-size:20px">Il Product System descrive l'intero processo di produzione e commercializzazione di un prodotto.</p>

            <p class="text-start"> <strong>Seleziona il Product System</strong></p>
            <select class="form-select" aria-label="Default select example" id="listaProductSystem">
            <option selected id="selectedProductSystem"></option>
            </select>
        </div>

        <div class="col-sm-6 order-element1 mt-5">
            
            <p style="font-size:20px">L'Impact Method descrive un metodo di valutazione dell'impatto da applicare al Product System.</p>

            <p class="text-start"> <strong>Seleziona l'Impact Method </strong></p>
            <select class="form-select" aria-label="Default select example" id="listaImpactMethod">
            <option selected id="selectedImpactMethod"></option>
            </select>
            <button type="button" class="btn btn-outline-primary" id="buttonCalcolaProductSystem">Calcola</button>

        </div>

        <div class="mt-3" id="risultatiRicerca">
          
        </div>

      </div>
    </div>
    `;
}

function creaViewMainRisultati() {
    return `
    <div class="container container-fluid mt-5">
      <div class="row">
  
        <h3>Calcolo terminato</h3>
      
        <div class="col-sm-7 order-element0 mt-5">
          <div class="table-responsive" id="risultatiRicerca">
          
          </div>
        </div>

        <div class="col-sm-5 order-element1 mt-5">
          
          <div>
            <canvas id="myChart"></canvas>
          </div>

        </div>
      </div>
    </div>

    <script>
        const ctx = document.getElementById('myChart');
    
        new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });
    </script>

    `;
}

function creaViewTableTechnosphereFlows() {
    return `
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Provider</th>
                    <th scope="col">Flow</th>
                    <th scope="col">Unit</th>
                </tr>
            </thead>
            <tbody id="datiTabellaTechnosphereFlows">
            </tbody>
        </table>  
    `;
}

function creaViewRowTechnosphereFlows(element,num){
    return `
    <tr class="color-row-table">
        <th scope="row">${num}</th>
        <td>${element.provider.name}</td>
        <td>${element.flow.name}</td>
        <td>${element.flow.refUnit}</td>        
    </tr>
    `;
}


export { creaViewMain, creaViewMainRisultati, creaViewTableTechnosphereFlows, creaViewRowTechnosphereFlows };