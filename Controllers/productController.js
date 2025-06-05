import Product from '../Models/Products.js';

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getallProduct = async (req, res) => {
    try {
         const getProductDetils = await Product.find();
         res.status(200).json({data:getProductDetils});
    } catch (error) {
        console.log(error);
        
    }
};

// Update a product
export const updateProduct = async (req, res) => { 
    try {
      const productId = req.params.id;
      const { name, description, price, category, image } = req.body;
      
      const updateProduct = await Product.findByIdAndUpdate(
        productId,
        { name, description, price,category, image },
        { new: true }
      );
  
      if (!updateProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product updated successfully", data: updateProduct });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  

 export const deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }