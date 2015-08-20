var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');


 module.exports = function(router){
  router.route('/students')
   .get(student.find);
  
  router.route('/teachers')
   .get(teacher.view)
   .post(teacher.add)
   .put(teacher.update)
   .delete(teacher.delete);
   
  return router;
 };
