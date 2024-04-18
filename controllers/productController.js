exports.getAllProduct = (req, res) => {
    res.status(200);
    res.json([
      {
        productName: "Egg",
       productPrice: "350",
      },
  
      {
        productName: "Tomatoes",
        productPrice: "500",
      },
  
      {
        productName: "Eggroll",
        productPrice: "200",
      },
  
      {
        productName: "Beans",
        productPrice: "150",
      },
  
      {
        productName: "Sardine",
        productPrice: "650",
      },
  
      {
        productName: "Bread",
        productPrice: "300",
      },
  
      {
        productName: "Milk",
        productPrice: "600",
      },
    ]);
  };
  
  exports.getSingleProduct = (req, res) => {
    res.status(200);
    res.json([
      {
        productName: "Milk",
        productPrice: "600",
      },
    ]);
  };
  
  exports.getNewProduct = (req, res) => {
    res.status(200);
    res.json([
      {
        productName: "Milk",
        productPrice: "600",
      },
    ]);
  };
  
  exports.updateProduct = (req, res) => {
    res.status(200);
    res.json([
      {
        productName: "Milk",
        productPrice: "600",
      },
    ]);
  };
  
  exports.deleteProduct = (req, res) => {
    res.status(200);
    res.json([
      {
        productName: "Milk",
        productPrice: "600",
      },
    ]);
  };
  