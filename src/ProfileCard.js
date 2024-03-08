// function ProfileCard(props){
//     return (<div>
//         <div>Title is {props.title}</div>
//         <div>Handle is {props.handle}</div>
//     </div>);
// }
//Or
// function ProfileCard(props){
//     const title = props.title;
//     const handle = props.handle;
//     return (<div>
//         <div>Title is {title}</div>
//         <div>Handle is {handle}</div>
//     </div>);
// }
//Or
// function ProfileCard(props){
//     const {title, handle} = props;
//     return (<div>
//         <div>Title is {title}</div>
//         <div>Handle is {handle}</div>
//     </div>);
// }
function ProfileCard({title, handle, image, description}){
    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
            <img src={image} alt="Personal Disgital Assistant Logo"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
            <div className="content">{description}</div>
        </div>
    </div>);
}
export default ProfileCard;