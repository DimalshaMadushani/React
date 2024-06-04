
export default function Property({id,name, rating , price}){
    return(
        <div className="Property">
            <p style={{fontSize:'20px', fontWeight:'bold'}}>{name}</p>
            <p>${price} a night</p>
            <p>{rating}⭐</p>
        </div>
    )
}