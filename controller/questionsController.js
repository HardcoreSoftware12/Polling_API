// Questions Section

const Question = require('../models/questions')
const Option = require('../models/options')

// 1. Craete question

module.exports.create = async function(req,res){
    console.log(req.body);
    console.log(req.url);

    await Question.create(req.body).then((result)=>{
        res.send(result)

    })  
}

// 2.Show question details
module.exports.show = async function(req,res){
    // console.log(req.params);

    const question = await Question.findById(req.params.qid).populate('options')
    console.log(question);

//    (question?res.send(question) : res.send("id does not exist"))

if(question){   
    res.send(question)
}
else{
    res.send("not found")
}
}


// 3. Delete Question
module.exports.delete=async function(req,res){
    
        const ques= await Question.findById(req.params.id).clone().catch(function(err){ console.log(err)})
        if(ques){
            
            await Question.deleteOne(req.params.id).clone().catch(function(err){ console.log(err)})
            
            await Option.deleteMany({question:req.params.id}).clone().catch(function(err){ console.log(err)})
                res.send("ques deleted");
    
        }
        
        else{
            res.send('question does not exists')
        }
}



