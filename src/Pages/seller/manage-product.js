import React from "react";
import Table from "../../Components/seller/tableComp";
import AccordionTabs from "../../Components/seller/accordionTabs";

const ManageProducts = () => {

   const confirmFunc = () => {
      window.confirm("Are you sure you wnat to delete this product?")
   }


        return (   
            
        <div className="tableContainer">

        <Table 
        
        headData = { 
          
          <>
             <th>Product Name</th>
             <th>Product Category</th>
             <th>Product Sub Category</th>
             <th>Product Price</th>
             <th>Product Avaibility</th>            
             <th colSpan={2}>Action</th>           
          </>
          
        }

        bodyRows = { 

          <>
          
            <tr>
                <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                <td data-label="Product Category">Mobile</td>
                <td data-label="Product Sub Category">Smartphone</td>
                <td data-label="Product Price">&#8377; 12000</td>
                <td data-label="Product Availability" className="stock mpstk">In Stock</td>
                <td data-label="Edit" className="edit">
                   <i class="fa-solid fa-pen-to-square"></i><br />
                   <span>Edit</span>
                </td>
                <td data-label="Delete" className="delete" onClick={confirmFunc}>
                   <i class="fa-solid fa-trash" ></i><br />
                   <span>Delete</span>
                </td>
            </tr>

            <tr className="altRow">
                <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                <td data-label="Product Category">Mobile</td>
                <td data-label="Product Sub Category">Smartphone</td>
                <td data-label="Product Price">&#8377; 12000</td>
                <td data-label="Product Availability" className="outStock mpstk">Out of Stock</td>
                <td data-label="Edit" className="edit">
                   <i class="fa-solid fa-pen-to-square"></i><br />
                   <span>Edit</span>
                </td>
                <td data-label="Delete" className="delete" onClick={confirmFunc}>
                   <i class="fa-solid fa-trash"></i><br />
                   <span>Delete</span>
                </td>
            </tr>

            <tr>
                <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                <td data-label="Product Category">Mobile</td>
                <td data-label="Product Sub Category">Smartphone</td>
                <td data-label="Product Price">&#8377; 12000</td>
                <td data-label="Product Availability" className="stock mpstk">In Stock</td>
                <td data-label="Edit" className="edit">
                   <i class="fa-solid fa-pen-to-square"></i><br />
                   <span>Edit</span>
                </td>
                <td data-label="Delete" className="delete" onClick={confirmFunc}>
                   <i class="fa-solid fa-trash"></i><br />
                   <span>Delete</span>
                </td>
            </tr>

            <tr className="altRow">
                <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                <td data-label="Product Category">Mobile</td>
                <td data-label="Product Sub Category">Smartphone</td>
                <td data-label="Product Price">&#8377; 12000</td>
                <td data-label="Product Availability" className="outStock mpstk">Out of Stock</td>
                <td data-label="Edit" className="edit">
                   <i class="fa-solid fa-pen-to-square"></i><br />
                   <span>Edit</span>
                </td>
                <td data-label="Delete" className="delete" onClick={confirmFunc}>
                   <i class="fa-solid fa-trash"></i><br />
                   <span>Delete</span>
                </td>
            </tr>

            <tr>
                <td data-label="Product Name" className="responsive-color">Samsung Galaxy Note 10</td>
                <td data-label="Product Category">Mobile</td>
                <td data-label="Product Sub Category">Smartphone</td>
                <td data-label="Product Price">&#8377; 12000</td>
                <td data-label="Product Availability" className="stock mpstk">In Stock</td>
                <td data-label="Edit" className="edit">
                   <i class="fa-solid fa-pen-to-square"></i><br />
                   <span>Edit</span>
                </td>
                <td data-label="Delete" className="delete" onClick={confirmFunc}>
                   <i class="fa-solid fa-trash"></i><br />
                   <span>Delete</span>
                </td>
            </tr>

          </>
          
        }

        />
        
        </div>

       );   

   

}


export default ManageProducts;