const appConfig = require('./app.config');
const JetpackService = require('./src/Service/Api/JetpackApi');
const HttpClient = require('./src/HttpClient');

const httpClient = new HttpClient(appConfig.apiUrl);
const jetpackService = new JetpackService(httpClient);
const filterByDate = require('./src/util');







jetpackService.getJetpacks().then(jetpacks => {
    let html =  '';
    jetpacks.forEach((jetpack) => {
        html +=
            '<div class="card" style="width: 18rem;">\n' +
            '  <img src="'+ jetpack.image +'" class="card-img-top" alt="...">\n' +
            '  <div class="card-body">\n' +
            '    <h5 class="card-title">' + jetpack.name + '</h5>\n' +
            '    <a href="#" class="btn btn-primary">Edit</a>\n' +
            '  </div>\n' +
            '</div>'

    });

    document.getElementById('jetpacks').innerHTML = html;
});

/**
 * 
 * @param {*} jpid 
 *  reserve functionality
 * send availability to api: /postBooking
 */
function bookJetpack(jpid){
    console.log(jpid);
    var later = new Date();
    later.setDate(30);
    jetpackService.postBookings({
        "jetpack_id": jpid,
        "start_date": (new Date()).toJSON(),
        "end_date": later.toJSON()
    }).then(response => {
        console.log(response);
    });
}

/**
 * find available jetpacks based on date interval: /getAvailabilities
 * updates DOM accordingly.
 */
function searchAvailabilities(){
    jetpackService.getAvailabilities({}).then(availabilities => {
        console.log(availabilities);
        jetpackService.getJetpacks().then(jetpacks => {
            jetpacks = filterByDate(jetpacks,availabilities,start.value,end.value);
            let html =  '';
            jetpacks.forEach((jetpack) => {
                html +=
                    '<div class="card" style="width: 18rem;">\n' +
                    '  <img src="'+ jetpack.image +'" class="card-img-top" alt="...">\n' +
                    '  <div class="card-body">\n' +
                    '    <h5 class="card-title">' + jetpack.name + '</h5>\n' +
                    '    <button class="btn btn-primary reserve">Réserver</button>\n' +
                    '  </div>\n' +
                    '</div>'

            });
            document.getElementById('search_result').innerHTML = html;
            let reserves = document.getElementsByClassName("reserve");
            console.log(reserves);
            for(let i = 0; i < reserves.length; i++){
                reserves[i].addEventListener('click',bookJetpack,jetpacks[i].id);
            }

        });
    });
}


r_submit.addEventListener('click',searchAvailabilities);