import React from 'react';

const Animation = () => {
    return (
        <>
            <div className="container-animation">
                <div className="ground">
                <div className="ground_top"></div>
                <div className="ground_left"></div>
                <div className="ground_front"></div>
                </div>

                <div className="building">
                <div className="roof top"></div>
                <div className="roof front"></div>
                <div className="roof left"></div>

                <div className="chimney top"></div>
                <div className="chimney front"></div>
                <div className="chimney left"></div>
                <div className="chimney-b front"></div>
                <div className="chimney-b left"></div>

                <div className="building-a top"></div>
                <div className="building-a front windowed"></div>
                <div className="building-a left windowed"></div>

                <div className="building-b top"></div>
                <div className="building-b front"></div>
                <div className="building-b left windowed"></div>

                <div className="building-c top"></div>
                <div className="building-c front"></div>
                <div className="building-c left"></div>

                <div className="colunm-a front"></div>
                <div className="colunm-a left"></div>
                <div className="colunm-b front"></div>
                <div className="colunm-b left"></div>

                <div className="door windowed"></div>

                </div>

            </div>
        </>
    )
};

export default Animation;