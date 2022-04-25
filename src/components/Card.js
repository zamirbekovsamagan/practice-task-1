import './Card.css'

function Card (props){
    return (
        <div className="card">
            <div className="wallpaper" style={{backgroundColor:props.wallpaper}}></div>
            <img src={props.profilePic} alt="surot"/>
            <div className="user">
            <p><span className='bold'>{props.username}</span><span className='gray'>{props.id}</span></p>
            <span className='about'>About</span>
            <p>{props.userInfo}</p>
            <p>web <a href="https://phin.dev">https://phin.dev</a></p>
            <p>Twitter <a href="https://twitter.com/?lang=ru">https://twitter.com/?lang=ru</a></p>
            </div>
        </div>
    )
}

export default Card