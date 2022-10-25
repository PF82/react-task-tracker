import PropTypes from 'prop-types'

// 1.6.pass onClick as a prop
// 1.7.move bullet point 1.3 & 1.4 to Header.js
const Button = ({ color, text, onClick }) => {

    // // 1.3.create function called onClick
    // // 1.4.pass in the event object
    // const onClick = (e) => {
    //     console.log('click')
    //     console.log(e)
    // }

    return (
        <button
            // 1.1.add event to the button
            // 1.2.add onClick and set that to a function called onClick
            onClick={onClick}
            style={{ backgroundColor: color }}
            className="btn"
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

//not working properly; slighly diferent from video
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    // 1.8.add below
    onClick: PropTypes.func,
}

export default Button