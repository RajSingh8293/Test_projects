/* eslint-disable no-unused-vars */
import { products } from "@/data";
import { useRef, useState } from "react";
const Shop = () => {

    const [productsData, setProductsData] = useState(products);
    const dragItem = useRef()
    const dragOverItem = useRef()

    const handleSort = () => {
        let products = [...productsData]
        const movedItem = products.splice(dragItem.current, 1)[0];
        products.splice(dragOverItem.current, 0, movedItem)
        dragItem.current = null
        dragOverItem.current = null
        setProductsData(products)
    }
    return (
        <div className="shop_hero">
            <div className="hero_cards  mt-8 min-h-[70vh]">
                <h1 className="text-7xl font-bold text-white text-center">Product List</h1>
                <div className="product-list">
                    {productsData.map((product, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={(e) => dragItem.current = index}
                            onDragEnter={(e) => dragOverItem.current = index}
                            onDragEnd={handleSort}
                            className="product-card"
                        >
                            <h2 className="text-2xl">{product.id}</h2>
                            <div>
                                <h2>{product.name}</h2>
                                <p>Price: ${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative p-20 text-black">
                <div className="shop_content">
                    <h1>About Shop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dignissimos illo velit deleniti culpa unde sunt quae laborum non, optio facilis corporis nisi deserunt sed? Saepe quo quod modi dolore aliquid sed, at corporis eaque mollitia ullam explicabo voluptate, quisquam iure repudiandae, veniam esse ducimus ratione fugit eligendi deserunt a natus sint consequuntur. Aliquid est optio modi expedita quasi ipsam deleniti dolores nisi architecto sint fugiat placeat, quo nesciunt magnam animi dolor reprehenderit laborum nulla! Cupiditate repellat eligendi inventore voluptatem consequatur. Dolore, voluptatibus praesentium sapiente animi mollitia harum illum rerum error dolor vel. Ullam iste enim soluta repellat corrupti vero accusantium quos debitis, qui iusto quod mollitia velit dicta nisi quidem inventore. Impedit amet voluptate nostrum accusantium quia? Fuga iure sit fugiat consequatur est nisi quam corrupti excepturi perspiciatis quasi natus, delectus beatae nam vel! Deserunt, modi tempore laborum perspiciatis aliquam sequi quia magnam veniam odit temporibus hic eaque, libero dolor animi repellendus, eveniet voluptatem. Sapiente voluptatum reprehenderit optio magnam asperiores accusantium inventore explicabo adipisci corporis voluptates commodi a voluptatibus consectetur facere veritatis obcaecati dolorum, incidunt libero saepe tenetur officia consequuntur velit. Quia porro est sequi incidunt nostrum? Tempore quis dolore at ipsam fugit officia. Suscipit, praesentium. Pariatur repudiandae autem nesciunt perspiciatis exercitationem reprehenderit aliquid, iste ad nobis maiores tempora nam? Ab, sunt molestiae mollitia, tempora magni ipsa labore ratione tenetur impedit nihil blanditiis quasi eius eligendi! Culpa delectus, rerum asperiores exercitationem placeat aliquam. Enim minima accusantium optio iste eius distinctio illum magnam. Tenetur, ut illum! Quia, consequatur enim at vel veritatis doloribus inventore quasi culpa quod, obcaecati alias id ducimus doloremque, maxime quibusdam! Error fugit expedita aspernatur culpa nobis at veritatis. Quam pariatur sequi dolor debitis consequuntur repudiandae atque aliquid nam sed ut, non ullam iusto voluptatum est magnam in rerum. Eum nam maiores ad, aliquid numquam laboriosam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusamus voluptatibus laudantium facere assumenda, eius ex placeat, deserunt possimus delectus modi nostrum quasi? Voluptatem expedita ea temporibus rem illum facere, aspernatur modi enim nulla ipsa odit deleniti debitis iste laboriosam velit ad, iusto quia. Odio blanditiis, dolores veniam ea quos ullam debitis error repellat sapiente corporis tenetur numquam accusamus recusandae, nemo laborum ipsum aperiam quis sed minima, laudantium ut placeat incidunt? Officia tempore molestias voluptates pariatur odit debitis cumque, laborum tenetur repellat, architecto vitae. Dolorem itaque incidunt praesentium quia explicabo, eligendi consectetur aliquid sed aperiam accusantium labore, accusamus assumenda sapiente ad beatae nemo enim, magni veritatis. Sequi commodi eum optio dignissimos corrupti non, reiciendis laudantium repellendus molestias obcaecati itaque eius, possimus ad cumque voluptates, magnam explicabo tempore perferendis omnis quis nulla! Distinctio, beatae? Nulla praesentium pariatur sed reiciendis labore mollitia omnis doloribus commodi delectus consectetur asperiores, molestiae sint dolorem. Magni facilis quibusdam atque quaerat doloremque omnis beatae minima asperiores. Deserunt beatae est similique quod iusto dolore voluptatum praesentium vero laudantium facere repellendus unde et, consequatur, cum maiores! Animi neque cumque culpa expedita reiciendis saepe enim. Sunt cum quae nisi amet sequi quaerat dolore quam excepturi non inventore cupiditate dolorum veniam in, corporis rem. Molestias iure laboriosam nostrum inventore placeat impedit voluptates dolores. Blanditiis magni repellat culpa esse ipsa veritatis reprehenderit, dolore officia amet eos, porro ut accusamus, error dolor cum quibusdam qui tenetur alias sequi maiores recusandae ex illum aliquid. Vitae delectus quis aut officiis aspernatur quidem rerum voluptatibus ea. Aliquam, quidem. Amet officiis laborum ducimus recusandae. Sed minus, consectetur rerum maxime non, necessitatibus facere ducimus suscipit quam hic fuga doloribus adipisci, at error. Ut dicta veritatis distinctio impedit! Dignissimos incidunt delectus possimus voluptatum, inventore a aperiam voluptatem soluta? Mollitia, suscipit quisquam repellendus delectus voluptate excepturi illo quae doloribus eligendi!</p>
                </div>
            </div>
        </div >
    );
};

export default Shop;
