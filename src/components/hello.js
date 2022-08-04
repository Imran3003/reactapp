import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Helloo mCHAn</h1>
    //     </div>
    // )
    return React.createElement('div', { className: 'general' }, React.createElement('h1', { id: 'hello' },'Mapla'))
}
export default Hello 