const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deploymentSchema = new Schema({
  name: { type: String, required: true },
  versions : { type: String, required: true },
  url:{ type: String, required: true },
  created_at: Date,
  updated_at: Date
}, {collection:'deploymentCollection'});

deploymentSchema.pre('save', function(next) {
  let currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

const deploymentSchemaModel = mongoose.model('deploymentCollection', deploymentSchema);

module.exports = deploymentSchemaModel;