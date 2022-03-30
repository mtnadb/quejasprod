    var _lightningReady = false;

    function setupLightning(callback) {
      var appName = "c:CasePublic";
      
      if (_lightningReady) {
        if (typeof callback === "function") {
          callback();
        }
      } else {
        var url = "https://coppel.force.com/quejaspublic";

        $Lightning.use(
          appName, 
          function() {
            _lightningReady = true;
			document.getElementById("lexcontainer").innerHTML = "";
            document.getElementById("lexcontainer").style.display = "";
            if (typeof callback === "function") {
              callback();
            }
          },
          url
        );
      }
    }

    function createChatterFeed() {
      setupLightning(function() {
        $Lightning.createComponent("c:casePublicCmp", {origin: '1a07afe7fc2c54d466d12569f05fb391'}, "lexcontainer");
      });
    }
    
    createChatterFeed();