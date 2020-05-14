const express = require('express');
const router = express.Router();
const deploymentController = require('./deployments.controller');

router.get("/list",deploymentController.getAllDeploymentList);
router.delete("/list",deploymentController.deleteDeploymentList);
router.post("/list",deploymentController.addDeploymentList);
router.get("/templates",deploymentController.getAllDeploymentTemplate);


module.exports = router;