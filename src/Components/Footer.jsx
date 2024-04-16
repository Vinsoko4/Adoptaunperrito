const Footer = (props) => {
    
    return (
        <>
            <h4 className="Footer"> {props.footer} </h4>
            <p className="warning">{props.warning}</p>
        </>
    );
};

export default Footer;