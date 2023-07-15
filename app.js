const yargs =require("yargs")
const data2= require("./data2")
//////////(add)//////////////
yargs.command({
   command: "add",
   describe: "to add an item",
   builder: {
      fname: {
         describe: "this is the first name desciption in add command",
         demandOption: true,
         type: "string",
      },
      lname: {
         describe: "this is the last name desciption in add command",
         demandOption: true,
         type: "string",
      },
   },
   handler: (x) => {
      data2.addPerson(x.fname , x.lname , x.city , x.age , x.id)
   }

})
//console.log(yargs.argv)
////////////////////////////////////////////////////////////////////////////
//////////(delete)//////////////
yargs.command({
   command: "delete",
   describe: "to delete an item",
   handler: (x) => {
      data2.deleteData(x.id) 
   }
})
////////////////////////////////////////////////////////////////////////////
//////////(list)//////////////
yargs.command({
   command: "list",
   describe: "list data",
   handler: () => {
      data2.listData()
   }
})
////////////////////////////////////////////////////////////////////////////
//////////(read )//////////////
yargs.command ({
   command : "read",
   describe : "to read data",
   builder : {
       id : {
           describe : "this is id description in read command",
           demandOption : true,
           type : "string"
       }
   },
   handler : (x)=> {
       data2.readData (x.id)
   } 
})

////////////////////////////////////////////////////////////////////////////
 yargs.parse()