var promise= new Promise(
    function(resolve,reject) {
        resolve({
            ten:"khang",
            tuoi:18
        });
    }
)

promise 
      .then(function(result) {
          return result;
      })
      .then(function(result) {
          console.log( result);
          return 2;  
      })
      .then(function(result) {
          console.log(result);
          return 3;
      })
      .catch(function(err) {
          console.log(err);
      })
      .finally(function() {
          console.log("done")
      })