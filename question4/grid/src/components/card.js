function Card({title,imgSrc,category,timeToRead}){
    return (
        <div className="box">
            <img src={imgSrc} alt="pic"/>
            <div>
                <h4>{title}</h4> 
                <div className="para">
                   <p>{category}</p>
                   <p>{timeToRead}</p>
                </div>
            </div> 
        </div>
    )
}

export default Card;