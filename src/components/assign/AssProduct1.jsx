import './AssProducts1.css';

function AssProduct1(props) {
    return (
        <div className="card text-center h-100 bg-light p-3">
            <img src={props.p.image} alt={props.p.title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.p.title}</h5>
                <p className="card-text">{props.p.category}</p>
                <p className="card-text">{props.p.description}</p>
                <p className="card-text"><strong>${props.p.price}</strong></p>
            </div>
        </div>
    );
}

export default AssProduct1;
