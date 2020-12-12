const Parent = require('./parent')
const Spouse = require('./spouse')
const Child = require('./child')

//ONE to ONE
Parent.hasOne(Spouse, { as: 'otherHalf' })
Spouse.belongsTo(Parent, { as: 'otherHalf' })

//ONE to MANY
Parent.hasMany(Child)
Child.belongsTo(Parent)

module.exports = {
  Parent,
  Child,
  Spouse
}