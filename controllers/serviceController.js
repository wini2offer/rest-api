exports.getAllService = (req, res) => {
    res.status(200);
    res.json([
      {
       serviceName: "laundry",
      servicePrice: "30000",
      },
  
      {
        serviceName: "car servicing",
        servicePrice: "20000",
      },
  
      {
        serviceName: "house keeping",
        servicePrice: "15000",
      },
  
      {
        serviceName: "fumigation",
        servicePrice: "20500",
      },
  
      
    ]);
  };
  
  exports.getSingleService = (req, res) => {
    res.status(200);
    res.json([
      {
        serviceName:  "fumigation",
        servicePrice: "20500",
      },
    ]);
  };
  
  exports.getNewService = (req, res) => {
    res.status(200);
    res.json([
      {
        serviceName:  "fumigation",
        servicePrice: "20500",
      },
    ]);
  };
  
  exports.updateService= (req, res) => {
    res.status(200);
    res.json([
      {
        serviceName:  "fumigation",
        servicePrice: "20500",
      },
    ]);
  };
  
  exports.deleteService = (req, res) => {
    res.status(200);
    res.json([
      {
        serviceName:  "fumigation",
        servicePrice: "20500",
      },
    ]);
  };
  