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
};

postJetpack(jetpack) 
{
    return this.httpClient.fetch('/jetpacks', {
        method: "POST", 
        body: JSON.stringify(jetpack) 
    }).then(response => {
        return response;
    });
}