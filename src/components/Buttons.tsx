import React, { useState } from "react";
import "../styles/Buttons.css";

export function Button() {
    function handleY() {
        console.log("Y=");
    }

    function handleWindow() {
        console.log("WINDOW");
    }

    function handleZoom() {
        console.log("ZOOM");
    }

    function handleTrace() {
        console.log("TRACE");
    }

    function handleGraph() {
        console.log("GRAPH");
    }

    function handleSecond() {
        console.log("2nd");
    }

    function handleMode() {
        console.log("2nd");
    }

    function handleDelete() {}

    function handleAlpha() {
        console.log("ALPHA");
    }

    function handleVars() {
        console.log("X,T,Ø,n");
    }

    function handleStat() {}

    return (
        <div className="buttons">
            <div className="row1">
                <button className="button" onClick={handleY}>
                    Y=
                </button>
                <button className="button" onClick={handleWindow}>
                    WINDOW
                </button>
                <button className="button" onClick={handleZoom}>
                    ZOOM
                </button>
                <button className="button" onClick={handleTrace}>
                    TRACE
                </button>
                <button className="button" onClick={handleGraph}>
                    GRAPH
                </button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleSecond}>
                    2ND
                </button>
                <button className="button" onClick={handleMode}>
                    MODE
                </button>
                <button className="button" onClick={handleDelete}>
                    DEL
                </button>
                <button className="button" onClick={handleDelete}>
                    {"<"}
                </button>
                <button className="button" onClick={handleDelete}>
                    {"^"}
                </button>
                <button className="button" onClick={handleDelete}>
                    {">"}
                </button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleAlpha}>
                    ALPHA
                </button>
                <button className="button" onClick={handleVars}>
                    X,T,Ø,n
                </button>
                <button className="button" onClick={handleStat}>
                    STAT
                </button>
                <button className="button" onClick={handleStat}>
                    {"↓"}
                </button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleDelete}>
                    MATH
                </button>
                <button className="button" onClick={handleDelete}>
                    APPS
                </button>
                <button className="button" onClick={handleDelete}>
                    PGRM
                </button>
                <button className="button" onClick={handleDelete}>
                    VARS
                </button>
                <button className="button" onClick={handleDelete}>
                    CLEAR
                </button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleDelete}>X^-1</button>
                <button className="button" onClick={handleDelete}>SIN</button>
                <button className="button" onClick={handleDelete}>COS</button>
                <button className="button" onClick={handleDelete}>TAN</button>
                <button className="button" onClick={handleDelete}>^</button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleDelete}>X^2</button>
                <button className="button" onClick={handleDelete}>,</button>
                <button className="button" onClick={handleDelete}>{'('}</button>
                <button className="button" onClick={handleDelete}>{')'}</button>
                <button className="button" onClick={handleDelete}>/</button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleDelete}>LOG</button>
                <button className="button" onClick={handleDelete}>7</button>
                <button className="button" onClick={handleDelete}>8</button>
                <button className="button" onClick={handleDelete}>9</button>
                <button className="button" onClick={handleDelete}>*</button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleDelete}>LN</button>
                <button className="button" onClick={handleDelete}>4</button>
                <button className="button" onClick={handleDelete}>5</button>
                <button className="button" onClick={handleDelete}>6</button>
                <button className="button" onClick={handleDelete}>-</button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleDelete}>STO</button>
                <button className="button" onClick={handleDelete}>1</button>
                <button className="button" onClick={handleDelete}>2</button>
                <button className="button" onClick={handleDelete}>3</button>
                <button className="button" onClick={handleDelete}>+</button>
            </div>

            <div className="row1">
                <button className="button" onClick={handleDelete}>0</button>
                <button className="button" onClick={handleDelete}>.</button>
                <button className="button" onClick={handleDelete}>(-)</button>
                <button className="button" onClick={handleDelete}>=</button>
            </div>
        </div>
    );
}
