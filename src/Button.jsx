import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    console.log(props);
  return (
    <div>
        {/* <button style={{backgroundColor:`${props:bgColor}`}}>{props.textInsideButton}</button> */}
        <button>{props.textInsideButton}</button>
    </div>
  )
}
Button.propTypes={
    textInsideButton:PropTypes.string.isRequired
}
// Button.defaultProps={
//     bgColor:'yellow',
//     textInsideButton:'Hello World'
// }
export default Button