const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deploymentTemplateSchema = new Schema({
  name: { type: String, required: true, unique: true },
  versions : { type: Array, required: true },
}, {collection:'deploymenttemplate'});

deploymentTemplateSchema.pre('save', function(next) {
  let currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

const deploymentTemplateSchemaModel = mongoose.model('deploymenttemplate', deploymentTemplateSchema);

module.exports = deploymentTemplateSchemaModel;