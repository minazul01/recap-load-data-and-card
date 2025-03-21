import { useEffect, useState } from "react";



const ProductData = () => {
    const [Product, setProduct] = useState([]);
    
    useEffect(() => {
        fetch('./Alldata.json')
            .then(res => res.json())
            .then(data => {
                setProduct(data.AllData); // Make sure the data structure matches your API response
            })
    }, []);

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                Product.map(({ product_id, product_title, product_image, price }) => (
                    <div key={product_id}>
                        <div className="bg-base-100 shadow-sm">
                            <figure>
                                <img
                                className="block mx-auto max-w-full max-h-[200px] object-contain"
                                    src={product_image} // Use product_image from destructured object
                                    alt={product_title} // Use product_title from destructured object
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product_title}</h2>
                                <p>{price}</p>
                                <div className="card-actions justify-start">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductData;
