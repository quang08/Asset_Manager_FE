import React from 'react';

export const AssetItem = ({ data }) => {
    console.log(data)
    return (
        <div >
            <div>id:{data._id}</div>
            <div>Title:{data.name}</div>
        </div>
    );
};
