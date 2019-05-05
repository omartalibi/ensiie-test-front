const appConfig = require('./app.config');
const JetpackService = require('./src/Service/Api/JetpackApi');
const HttpClient = require('./src/HttpClient');

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

submit.addEventListener('click',submitJetpack);