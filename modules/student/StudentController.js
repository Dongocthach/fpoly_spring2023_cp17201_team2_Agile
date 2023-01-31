const StudentService = require ('./StudentService');

module.exports.addnew_student = async (req, res) =>  {
    try{
      res.render('form-create-student')
    }catch(error)
    {
      console.log(error)
    }   
}

module.exports.create_student_post = async (req, res) => {
    const { name, mobile, address, course } = req.body;
    try{

      const student = await StudentService.create(name, mobile, address, course);
      res.redirect('/student/new-student');
    }catch(error)
    {
      console.log(error)
    }   
}
module.exports.get_student_get = async (id, res) =>  {
    try{
      const student =await StudentService.getstudentone(id);
      res.render('form-edit-student', { student })
    }catch(error)
    {
      console.log(error)
    }   
  }

module.exports.update = async(req,res,id) =>{
    const { name, mobile, address, course } = req.body;
    try{

      await StudentService.update(id,name, mobile, address, course)
      res.redirect('/student/new-student');
    }catch(error)
    {
      console.log(error);
      next(error);
    }   
  
  }


module.exports.api_student_get = async(id, res) => {
  try{
    const student = await StudentService.getstudentone(id);
    res.json({ student });
  }
  catch(err) {
    res.status(400).json({ err });
  }
}
module.exports.api_create_student_post = async (req, res) => {
  const { name, mobile, address, course } = req.body;
  try{
    const student = await StudentService.create(name, mobile, address, course);
    res.json({ student });
  }catch(error)
  {
    console.log(error)
  }   
}

module.exports.api_student_remove = async(id,res) =>{
    try{
      await StudentService.deletestudent(id);
      res.status(200).json({ id });;
    }catch(error)
    {
      console.log(error)
    }   
  }