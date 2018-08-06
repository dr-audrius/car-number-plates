exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customerDB',function(err,rows)
        {
            
            if(err)
            console.log("Error Selecting : %s ",err );
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(rows));
           
         });
         
    });
  
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customerDB WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
            console.log("Error Selecting : %s ",err );
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(rows));   
           
         });
    }); 
};

exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name,
            surname   : input.surname,  
            plateid   : input.plateid 
        
        };
        
       console.log('save request...', data);

        var query = connection.query("INSERT INTO customerDB set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify('success'));
          
        });
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name,
            surname : input.surname,
            plateid   : input.plateid
        
        };
        
        connection.query("UPDATE customerDB set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
          console.log("Error Updating : %s ",err );
         
          res.redirect('/customers');
          
        });
    
    });
};


exports.delete_customer = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM customerDB  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/customers');
             
        });
        
     });
};

exports.check_customer = function(req,res){
          
    var id = req.params.id;
   
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customerDB',function(err,rows)
        {
            
            if(err)
            console.log("Error Selecting : %s ",err );
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(rows));
           
         });
         
    });
};




