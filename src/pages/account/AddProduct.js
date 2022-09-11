import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { Select, FormControl, InputLabel, MenuItem, FormLabel } from '@mui/material';



const AddProduct = () => {
  let categories = [
    {
      cat_id: 1,
      cat_name: "Vehicle",
      cat_value: "vehicle",
      cat_types:[
        {
          type_id: 1,
          type_name: "Car",
          type_value: "car",
        },
        {
          type_id: 2,
          type_name: "Bike",
          type_value: "bike",
        },
        {
          type_id: 3,
          type_name: "Bus",
          type_value: "bus",
        },
        {
          type_id: 4,
          type_name: "Truck",
          type_value: "truck",
        },
      ]
    },
    {
      cat_id: 2,
      cat_name: "Appartment",
      cat_value: "appartment",
      cat_types:[
        {
          type_id: 1,
          type_name: "Home",
        },
        {
          type_id: 2,
          type_name: "Flat",
        },
      ]
    }
  ]
  const [category, setCategory] = useState('');
  // const [type, setType] = useState('');

  const handleCategory = (value) =>{
    setCategory(value)
  }
  return (
    <div className='add-product-main'>
      <div className='add-product-sub'>
      <FormControl fullWidth>
        <InputLabel id="choose-catogory">Choose Category</InputLabel>
        <Select
          labelId="choose-catogory"
          label="Choose Category"
        >{
          categories.map((e)=>(
            <MenuItem key={e.cat_id} onClick={()=>handleCategory(e.cat_value)} value={e.cat_value}>{e.cat_name}</MenuItem>
          ))
        }
        </Select>
    </FormControl>
    <FormControl fullWidth>
        <InputLabel id="choose-type">Choose Type</InputLabel>
        <Select
          labelId="choose-type"
          label="Choose Type"
        >
          {
            categories.filter(e => e.cat_value=== category).map(o=>(
                <MenuItem key={o.type_id} value={o.type_value}>{o.type_name}</MenuItem>
              )
            )
          }
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
      <TextField autoComplete='off' required fullWidth label="Product Name" variant="outlined" />
      <TextField autoComplete='off' required fullWidth label="Price" variant="outlined" />
      <TextField autoComplete='off' required fullWidth label="Product Location" variant="outlined" />
      <TextField autoComplete='off' fullWidth label="Manufactured Date" variant="outlined" />
      <div className='add-product-upload-image'>
        <FormLabel>Add main image of the product</FormLabel>
        <TextField
            autoComplete='off'
            variant="outlined"
            Label= "Change Profile Photo"
            type={"file"}
        ></TextField>
      </div>
      
      </div>
      
      <TextField autoComplete='off' multiline rows={5} fullWidth id="outlined-basic" label="Product Description" variant="outlined" />
      {/* <div className='add-your-image'>
        <label htmlFor="">Insert product image</label>
        <input type="file" id="myFile" name="filename" />
      </div> */}
      
      <button type="submit">Add Product</button>
    </div>
  )
}

export default AddProduct