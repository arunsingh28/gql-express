const { user } = require('./data')

exports.root = {
    getPerson: ({id}) => {
        //  return data after filtering according to id       
        return user.find(n => n.id === id)
    },
    getAllPerson:()=>{
       return user
    },
    updatePersonName:(name)=>{
        // show data from query        
        console.log(name)
        return name
    }
}
