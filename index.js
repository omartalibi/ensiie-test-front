const appConfig = require('./app.config');
const JetpackService = require('./src/Service/Api/JetpackApi');
const HttpClient = require('./src/HttpClient');
const filterByDate = require('./src/util');

const httpClient = new HttpClient(appConfig.apiUrl);
const jetpackService = new JetpackService(httpClient);


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


var name = document.querySelector('input#j_name');
var image = document.querySelector('input#j_image');
var submit = document.querySelector('button#j_submit');

var start = document.querySelector('input#start');
var end = document.querySelector('input#end');
var r_submit = document.querySelector('button#r_submit');


/**
 * Send jetpack object to api: /postJetpack
 */
function submitJetpack(){
    var files = image.files;
    var jetpack_name = name.value;
    if(files.length == 0){
        console.log('no file selected');end
    }
    else{
        var reader = new FileReader();
        reader.onload = function(e){
            console.log(e.target.result);
            jetpackService.postJetpack({name:jetpack_name,image:e.target.result}).then(response => {
                console.log(response);
            });
        }
        var raw = reader.readAsDataURL(files[0]);
    }
}

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


submit.addEventListener('click',submitJetpack);
r_submit.addEventListener('click',searchAvailabilities);

