const { user } = require('./data')

exports.root = {
    getPerson: ({id}) => {
        return user.find(n => n.id === id)
    },
    getAllPerson:()=>{
       return user
    },
    updatePersonName:(name)=>{
        console.log(name)
        return name
    }
}