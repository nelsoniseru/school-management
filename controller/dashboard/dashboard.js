let Fee_item = require('../../models/fee_items')
module.exports.Profile =(req,res)=>{
    res.render("./dashboard/dashboard")
}

module.exports.Item_fee=(req,res)=>{
    const {
        school_fee_amount,
        bus_fee_to_and_fro_amount,
        bus_fee_one_way_amount,
        
        boarding_fee_amount,
        waec_fee_amount,
        
        graduation_amount
    } = req.body
   let item = new Fee_item()
   item.school_fee= school_fee_amount
   item.bus_fee_to_and_fro= bus_fee_to_and_fro_amount
   item.bus_fee_one_way= bus_fee_one_way_amount
   item.boarding_fee=boarding_fee_amount
   item.waec_fee=waec_fee_amount
   item.graduation_fee=graduation_amount
  
   item.save()
  
//fee_item.save()
}

module.exports.Create_Fee_Item=(req,res)=>{
res.render("./dashboard/create_fee_item")
}

module.exports.Create_Fee_Group=async(req,res)=>{

    // let mr = await Fee_item.mapReduce({
    //     "mapreduce": "fee_items",
    //     "map": function() {
    //         for (var key in this.item) { emit(key, null); }
    //     },
    //     "reduce": function() { }, 
    //     "out": "temp_collection_keys"
    // })
  
    let items = await Fee_item.find({})
    
    res.render("./dashboard/create_fee_group",{items})
}