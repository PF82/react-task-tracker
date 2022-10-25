// import React from 'react' (no longer needed in new components)


// // PROPS EXAMPLE

// //to retrieve the prop inside of the component,
// //we take in props as a parameter
// const Header = (props) => {
//   return (
//     <header>
//         {/* replace static text with props */}
//         <h1>{props.title}</h1>
//     </header>
//   )
// }


// // DEFAULT PROPS EXAMPLES

// //to retrieve the prop inside of the component,
// //we take in props as a parameter
// const Header = (props) => {
//     return (
//         <header>
//             {/* replace static text with props */}
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

// Header.defaultProps = {
//     title: 'Task Tracker',
// }


// //we can destructure
// const Header = ({title}) => {
//     return (
//         <header>
//             {/* replace static text with just title */}
//             <h1>{title}</h1>
//         </header>
//     )
// }

// Header.defaultProps = {
//     title: 'Task Tracker',
// }


// // PROP TYPES (SLITGHLY DIFERENT FROM ONE ON TUTORIAL VIDEO)

// import { ReactPropTypes } from "react"

// const Header = ({ title }) => {
//     return (
//         <header>
//             {/* replace static text with just title */}
//             <h1>{title}</h1>
//         </header>
//     )
// }

// Header.defaultProps = {
//     title: 'Task Tracker',
// }

// Header.ReactPropTypes = {
//     // title: ReactPropTypes.string,
//     title: ReactPropTypes.string.isRequired, // in case it is required
// }


// STYLING (CSS IN JS)EXAMPLES

// const Header = ({ title }) => {
//     return (
//         <header>
//             <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
//         </header>
//     )
// }

// Header.defaultProps = {
//     title: 'Task Tracker',
// }


// const Header = ({ title }) => {
//     return (
//         <header>
//             <h1 style={headingStyle}>{title}</h1>
//         </header>
//     )
// }

// Header.defaultProps = {
//     title: 'Task Tracker',
// }

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

const Header = ({ title }) => {
    return (
        <header className="header"> 
            <h1>{title}</h1>
            <button className="btn">Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header