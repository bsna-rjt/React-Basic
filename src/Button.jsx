import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    console.log(props);
  return (
    <div>
        <button style={{backgroundColor:`${props.bgColor}`}}>{props.textInsideButton}</button>
    </div>
  )
}
Button.propTypes={ //for textInsideButton props in string validation
    textInsideButton:PropTypes.string.isRequired
}
Button.defaultProps={ // for default text and color if props not send in parent
    bgColor:'yellow',
    textInsideButton:'Hello World'
}
export default Button