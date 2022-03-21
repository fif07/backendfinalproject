const findAll = async(req,res) =>{
    try {
        const result = await req.context.models.curriculum.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send('no data found')
    }
}

// const createCurr = async(req,res)=>{
//     const {files,fields} = req.fileAttrb
//     try {
//         const result = await req.context.models.curriculum.create({
//             curr_name : fields[0].value,
//             curr_title : fields[1].value,
//             curr_description : fields[2].value,
//             curr_duration: fields[3].value,
//             curr_learning_type : fields[4].value,
//             curr_tag_skill : fields[5].value,
//             curr_inst_id  : parseInt(fields[6].value)
//         })
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).json({
//             status : "failed",
//             message : "",
//             error:error
//         })
//     }
// }

// const updateCurr = async (req,res,next) =>{
//     const {files,fields} = req.fileAttrb
//     try {
//         const result = await req.context.models.curriculum.update({
//             curr_name : fields[0].value,
//             curr_title : fields[1].value,
//             curr_description : fields[2].value,
//             curr_duration: fields[3].value,
//             curr_learning_type : fields[4].value,
//             curr_tag_skill : fields[5].value,
//             curr_inst_id  : fields[6].value
//         },
//         {returning : true, where : {curr_id : req.params.id}})
//         return res.send(result)
//     } catch (error) {
//         return res.status(404).json({
//             status : "failed",
//             message : "",
//             error:error
//         })
//     }
// }

const remove = async (req,res)=>{
    try {
        const curriculums = await req.context.models.curriculum.destroy({
            where :  {curr_id : req.params.id}
        })
        return res.send("delete"+curriculums+"rows")
    } catch (error) {
        return res.status(404).send("not found")
    }
}


export default {
    findAll,
    //createCurr,
    // updateCurr,
    remove
}