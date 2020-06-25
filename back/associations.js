const User = require("./models/User")
const InTakes = require("./models/InTakes")
const Treatments = require("./models/Treatments")
const Drugs = require("./models/Drugs")

User.hasMany(Treatments);
Treatments.belongsTo(User);

Treatments.belongsToMany(Drugs, {through: "treatment_drug"})
Drugs.belongsToMany(Treatments, {through: "treatment_drug"})

InTakes.belongsTo(Treatments)
Treatments.hasMany(InTakes)