import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cdn.britannica.com/26/94226-050-9B713036/Skyline-Houston-Texas.jpg" 
            alt="" 
            className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>Houston</h1>
                <h1>123 fake street</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="" 
            className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>Cuba</h1>
                <h1>123 fake street</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="" 
            className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>Italy</h1>
                <h1>123 fake street</h1>
            </div>
        </div>

    </div>
  )
}

export default Featured