import { CDN_URL } from "../utils/constant"

const ItemList = (items) => {
    console.log('Items', items.dummy)
    return (
        <div>
            {items?.data.map((x) =>
            
                <div key={x?.card?.info?.id || x?.card?.info?.name} className="p-2 m-2 border-black border-b-2 text-left flex justify-between">
                    {console.log(x?.card?.info?.name)}
                    <div className="w-9/12">
                        <div className="text-lg py-2">
                            <span className="">{x.card.info.name}- </span>
                            <span>₹ {x.card.info.price / 100}</span>
                        </div>
                        <p className="text-s">{x.card.info.description}</p>
                    </div>
                    <div >
                        <img src={CDN_URL + x.card.info.imageId} className="w-35 "></img>
                        <div >
                            <button className="p-2 m-2 border-1 bg-white mx-2">Add +</button>
                        </div>

                    </div>
                </div>
            )}
        </div>

    )
}
export default ItemList