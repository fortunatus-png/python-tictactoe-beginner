import React from 'react';

const Square = () => {

    return (
        <div className='buttons'>

            <div className="fstRow row">
                <button type="button" key={1}></button>
                <button type="button" key={2}></button>
                <button type="button" key={3}></button>
            </div>
            <div className="sndRow row">
                <button type="button" key={4}></button>
                <button type="button" key={5}></button>
                <button type="button" key={6}></button>
            </div>
            <div className="thirdRow row">
                <button type="button" key={7}></button>
                <button type="button" key={8}></button>
                <button type="button" key={9}></button>
            </div>

        </div>
    );

}

/* const Square = () => (<button type="button" key={1}></button>); */

export default Square;