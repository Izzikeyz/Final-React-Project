import React from 'react';
import './list.css';

const List = (props) => {
    return ( 
        <div className="listItems">
            <ul className='lists'>
                <li className='names'>{props.names}</li>
                <li>{props.emailAddress}</li>
                <li>{props.phoneNumber}</li>
                <li>{props.website}</li>
            </ul>
        </div>
     );
}
 
export default List;