import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Btn = (props) => {
    return (
        <>
            <Button variant={props.color}>
                {props.text} <Badge bg='secondary'></Badge>
            </Button>
        </>
    );
};

export default Btn;