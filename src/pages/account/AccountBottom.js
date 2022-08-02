import React, {useState} from 'react'
import AddProduct from './AddProduct';
import './profile.scss'
import YourProducts from './YourProducts';


const AccountBottom = () => {
    const [selected,setSelect] = useState(false);
    const yourProduct = () =>{
    setSelect(false);
    }
    const addProduct = () =>{
    setSelect(true);
    }
    return (
        <div className='profile-bottom'>
            <div className="profile-bottom-sub">
                <div className='profile-bottom-left'> 
                    <div onClick={yourProduct} className={selected?'profile-your-products profile-left-sub profile-left-inactive':'profile-your-products profile-left-sub profile-left-active'}><p><i class="fa-solid fa-chevron-right"></i> Registered Items</p></div>
                    <div onClick={addProduct} className={selected?'profile-add-products profile-left-sub profile-left-active':'profile-add-products profile-left-sub profile-left-inactive'}><p><i class="fa-solid fa-plus"></i> Register New Item</p></div>
                </div>
                <div className='profile-bottom-right'>
                {selected?<AddProduct />:<YourProducts />}
                    
                    
                </div>
            </div>
        </div>
    )
}

export default AccountBottom