/*
    input 3개를 만든다 (productName, price, stock)
    확인 버튼을 누르면 table에 추가한다.
*/

import { useState } from "react"

export default function InputState4() {
    const inputValueEmpty = {
        productName: "",
        price: "",
        stock: "",
    };
    
    const [ products, setProducts ] = useState([]);                     // 배열
    const [ inputValue, setInputValue ] = useState(inputValueEmpty);    // 객체

    const handleOnChange = e => {
        const {name, value} = e.target;
        setInputValue(prev => ({...prev, [name]: value}));
    }

    const handleOnCilk = e => {
        setProducts((prev) => [...prev, inputValue]);
        setInputValue(inputValueEmpty);
    }
    // console.log(products);
    // 여기서 로그를 넣을 시 입력중에 빈 배열이 나오지만 버튼 누를 시 저장이 됨

    return <div>
        <div>
            <label htmlFor="">상품명</label>
            <input type="text" name="productName" value={inputValue.productName} onChange={handleOnChange}/>
        </div>
        <div>
            <label htmlFor="">가격</label>
            <input type="text" name="price" value={inputValue.price} onChange={handleOnChange}/>
        </div>
        <div>
            <label htmlFor="">수량</label>
            <input type="text" name="stock" value={inputValue.stock} onChange={handleOnChange}/>
        </div>
        <div>
            <button onClick={handleOnCilk}>확인</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>수량</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, index) => (<tr key={index}>
                        <th>{product.productName}</th>       
                        <th>{product.price}</th>       
                        <th>{product.stock}</th>
                    </tr>))
                }
            </tbody>
        </table>
    </div>
}