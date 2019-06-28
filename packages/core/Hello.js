import React from 'react';

function Hello({level='1', title='bijay shrestha'}) {
    return React.createElement(`h${level}`, {}, title);;
}

export default Hello;