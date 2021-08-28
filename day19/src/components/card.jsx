const Card = ({title}) => {
    
    
    return (<div className="container">
        <div className="card">
        <img src="http://images4.fanpop.com/image/photos/23700000/Funny-random-23797915-1000-981.jpg" alt="imgg" />
        <div className="title">Main titile</div>
        <button style={ {color: (title === 'Title 3' ? 'blue' : 'pink')}}>click</button>
    </div>
    </div>
    );

};

export default Card;