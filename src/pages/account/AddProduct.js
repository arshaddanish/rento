import React from 'react'
import TextField from "@mui/material/TextField";


const AddProduct = () => {
  return (
    <div className='add-product-main'>
      <div className='add-product-sub'>
      <TextField fullWidth id="outlined-basic" label="Product Name" variant="outlined" />
      <TextField fullWidth id="outlined-basic" label="Price" variant="outlined" />
      </div>
      <TextField multiline rows={5} fullWidth id="outlined-basic" label="Product Description" variant="outlined" />
      <div className='add-your-image'>
        <label htmlFor="">Insert product image</label>
        <input type="file" id="myFile" name="filename" />
      </div>
      <button type="submit">Add Product</button>
    </div>
  )
}

export default AddProduct