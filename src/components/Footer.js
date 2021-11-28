import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({title, website, address, postcode, isOpen}) => {
    // const {title, website, address, postcode} = props;

    // const nickName = "Mon"

    return (
        <div>
            <h3>{title} &copy; {new Date().getFullYear()}</h3>
            <p>{website} {address} {postcode} {isOpen.toString()}</p>
        </div>
    )
}

Footer.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
    postcode: PropTypes.number,
    isOpen:PropTypes.bool

};

export default Footer
