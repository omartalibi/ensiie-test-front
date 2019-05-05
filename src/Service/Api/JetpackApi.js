const JetpackApi = require('../../Entity/Jetpack');
module.exports = class  {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getJetpacks() {
        return this.httpClient.fetch('/jetpacks', {}).then(rows => {

            return rows.map(row => {
                let jetpack = new JetpackApi();
                jetpack.id = row.id;
                jetpack.name = row.name
                jetpack.image = row.image;
                return jetpack
            });
        });
    }

    getAvailabilities(){
        return this.httpClient.fetch('/availabilities', {}).then(rows => {
            return rows;
        })
    }

    postJetpack(jetpack) {
        return this.httpClient.fetch('/jetpacks', {
            method: "POST", 
            body: JSON.stringify(jetpack) 
        }).then(response => {
            return response;
        });
    }

    postBookings(booking) {
        return this.httpClient.fetch('/bookings',{
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            //mode: "cors", // no-cors, cors, *same-origin
           //headers: {
           //    "Content-Type": "application/json",
           //    // "Content-Type": "application/x-www-form-urlencoded",
           //},
           // referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(booking) // body data type must match "Content-Type" header
        }).then(response => {
            return response;
        });
    }
};