/* global __dirname */
const fs = require('fs');

const getResourcesDirectory = (path) => {
    const resourcesDirectory = `${__dirname}/../../resources/`;

    return `${resourcesDirectory}${path}`;
};

const getFileContents = (resourcePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(getResourcesDirectory(resourcePath), 'utf8', function (error, data) {
            if (error) {
                reject(error);
            }

            resolve(data);
        });
    });
};

module.exports = {
    getFileContents
};
