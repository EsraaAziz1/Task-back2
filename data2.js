//////////////(add 7 person)//////////////////
const fs = require("fs")


const addPerson = (fname, lname, city, age, id) => {
    const allData = loadData()

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })
    console.log(duplicatedData)

    if (duplicatedData.length == 0 && id <=7)  {
        allData.push({
            id: id,
            fname: fname,
            lname,
            city: city,
            age: age
        })

        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID or ID > 7")
    }
}


////////////////(Load Data)////////////////
const loadData = () => {
    
    try {
        const dataJson = fs.readFileSync ("data2.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

  }

//////////////(Save All Data)//////////////

const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData) 
    fs.writeFileSync("data2.json" , saveAllDataJson)
}

////////////////////////////////////////////////////////////////////////////////
 //////////////(delete 4 to 6 person)//////////////////
 const deleteData = (id) => {
    const allData = loadData()

    const dataToKeep = allData.filter ((obj) => {
          
        if(id >= 4 && id <= 6){
            return ( obj.id !== 4 && obj.id !== 5 && obj.id !== 6)
        }
        else{
            return obj.id
        }
      /* 
      ////(delete 4 & 6)
         if(id === 4 || id === 6){
            return ( obj.id !== 4  && obj.id !== 6)
        }
        else{
            return obj.id
        }
      */

        

    })
         
    
     console.log(dataToKeep)
    saveAllData(dataToKeep)

}
////////////////////////////////////////////////////////////////////////////////
 ////////////(list fname & lname & city person)/////////////
const listData =()=>{
    const allData = loadData()
    allData.forEach ((obj) => {
        console.log(obj.fname , obj.lname , obj.city)
    });
}
/////////////////////////////////////////////////////////////////////////////////
////////////(read all data for only the 5th person)/////////////
const readData =(id)=>{
    const allData = loadData()
    const read = allData.find( (obj)=>{
        if(id == 5){
            return obj.id == id
        }
    })
    console.log(read)
}

 ////////////////////////////////////////////////////////////////////////////////

module.exports = {
    addPerson,
    deleteData,
    listData,
    readData,

}