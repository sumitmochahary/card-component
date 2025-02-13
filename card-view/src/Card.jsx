import profilePic from '/profile.jpg'

function Card(){
    return (
      <div className="card">
        <img className="card-image" src={profilePic} alt="Profile Picture" />
        <h2 className="card-title">Sumit Mochahary</h2>
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          repudiandae!
        </p>
      </div>
    )
}

export default Card