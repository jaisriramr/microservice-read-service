const DB_URL = process.env.DB_URL;
const invoke = require("../../lib/http/invoke");

let readService = async (query) => {
    try {

        var queryObject = {
            url: query.url,
            database: query.cluster,
            client: query.client,
            docType: query.docType,
            query: query.query
        }
        let response = await invoke.makeHttpCall("post", "read", queryObject);
        return response.data.statusMessage;

    }catch(err) {
        console.log(err)
        return err;
    }
}

module.exports = {
    readService
}