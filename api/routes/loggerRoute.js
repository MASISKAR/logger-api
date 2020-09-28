'use strict';
module.exports = function (app) {
  let reqCount = 1;
  
  app.route('/')
  .post((req, res) => {
    console.log(`======= ${reqCount} =======`,);
    try{
      console.log(JSON.stringify(req.body, null, 4));
    }
    catch(e){
      console.log(`Error from API`, e);
    }
    reqCount++;
    res.status(200);
  });
};
