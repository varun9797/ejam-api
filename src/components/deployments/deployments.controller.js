const deploymentModel = require('./deployments.model');
module.exports.getAllDeploymentList = async (req, res) => {
    try {
        let data = await deploymentModel.getAllDeployments();
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("something went wrong")
    }
}
module.exports.getAllDeploymentTemplate = async (req, res) => {
    try {
        let data = await deploymentModel.getAllDeploymentTemplate();
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("something went wrong")
    }
}
module.exports.deleteDeploymentList = async (req, res) => {
    try {
        let data = await deploymentModel.deleteDeploymentList(req.body._id);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("something went wrong")
    }
}
module.exports.addDeploymentList = async (req, res) => {
    try {
        let data = await deploymentModel.addDeploymentList(req.body);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("something went wrong")
    }
}