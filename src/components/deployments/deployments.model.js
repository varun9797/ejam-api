
const deploymentSchema = require('../../schemas/deploymentschema');
const deploymentTemplateSchema = require('../../schemas/deploymenttemplateschema');
module.exports.getAllDeployments = () => new Promise((resolve, reject) => {
    deploymentSchema.find({}, function (err, data) {
        if (err) {
            reject(err)
        } else {
            console.log(data);
            resolve(data);
        }
    });
});
module.exports.getAllDeploymentTemplate = () => new Promise((resolve, reject) => {
    deploymentTemplateSchema.find({}, function (err, data) {
        if (err) {
            reject(err)
        } else {
            console.log(data);
            resolve(data);
        }
    });
});
module.exports.deleteDeploymentList = (id) => new Promise((resolve, reject) => {
    deploymentSchema.deleteOne({ _id : id }, function (err, data) {
        if (err) {
            reject(err)
        } else {
            console.log(data);
            resolve("Deleted successfully");
        }
    });
});
module.exports.addDeploymentList = (data) => new Promise((resolve, reject) => {
    var deploymentObject = new deploymentSchema({
        name: data.name,
        versions: data.versions,
        url: data.url
    });

    deploymentObject.save(function (err) {
        if (err) {
            reject(err);
        } else {
            console.log('UserObject saved successfully!');
            resolve('UserObject saved successfully!');
        }
    });
});