import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({image, Name, Desc, Text, Color }) => {
    return (
        <>
        <div div className='Cards'>
            <Card style={{ width: '19rem' }}>
                <Card.Img variant='top' src={image} className='Perro'/>
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    {Desc}
                </Card.Body>
                <Tags text= {Text} color={Color}/>
            </Card>
        </div>
        </>
    );
};

export default MyCard;