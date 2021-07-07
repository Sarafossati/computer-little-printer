var obj;

fetch('https://random-data-api.com/api/computer/random_computer')
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

      var platform = document.createElement("h1")
      var type = document.createElement("h2");
      var os = document.createElement("h3");
      var stack = document.createElement("h4");

      platform.innerHTML = obj.platform;
      document.body.appendChild(platform);  

      type.innerHTML = obj.type;
      document.body.appendChild(type);  

      os.innerHTML = obj.os;
      document.body.appendChild(os);  

      stack.innerHTML = obj.stack;
      document.body.appendChild(stack);

    })