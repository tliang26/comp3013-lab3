export default function Cover({image, name}) {
    return (
        <img 
            className="large-cover-photo"
            src={image}
            alt={`${name} album cover photo`} 
        />
    );
}