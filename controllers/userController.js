exports.getAllUser = (req, res) => {
    res.status(200);
    res.json([
      {
        userName: "John",
        userPhone: "09086176543",
      },
  
      {
        userName: "Sarah",
        userPhone: "09786176543",
      },
  
      {
        userName: "Amos",
        userPhone: "09086178543",
      },
  
      {
        userName: "Paul",
        userPhone: "07086176543",
      },
  
      {
        userName: "Mayor",
        userPhone: "07087861760",
      },
  
      {
        userName: "Hebrew",
        userPhone: "0726176543",
      },
  
      {
        userName: "Lips",
        userPhone: "0709876543",
      },
    ]);
  };
  
  exports.getSingleUser = (req, res) => {
    res.status(200);
    res.json([
      {
        userName: "Lips",
        userPhone: "0709876543",
      },
    ]);
  };
  
  exports.getNewUser = (req, res) => {
    res.status(200);
    res.json([
      {
        userName: "Lips",
        userPhone: "0709876543",
      },
    ]);
  };
  
  exports.updateUser = (req, res) => {
    res.status(200);
    res.json([
      {
        userName: "Lips",
        userPhone: "0709876543",
      },
    ]);
  };
  
  exports.deleteUser = (req, res) => {
    res.status(200);
    res.json([
      {
        userName: "Lips",
        userPhone: "0709876543",
      },
    ]);
  };
  