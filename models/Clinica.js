const mongoose = require('mongoose');

const clinicaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  especialidades: { type: [String], required: true },
  status: { type: String, enum: ['Ativa', 'Inativa'], default: 'Ativa' }
});

module.exports = mongoose.model('Clinica', clinicaSchema);