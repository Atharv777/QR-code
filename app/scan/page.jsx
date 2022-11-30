'use client';

//scan.js

import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import styles from "../../styles/Home.module.css";

function Scan() {
    const [data, setData] = useState("No result");
    const [facingMode, setFacingMode] = useState("environment");

    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }

                    }
                    }
                    //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
                    // open the front camera
                    constraints={{ facingMode: facingMode }}
                    style={{ width: "40%", height: "40%", border: "1px solid red" }}
                />
                <div className={styles.grid}>

                    <a onClick={() => { setFacingMode("environment") }} className={styles.card}>
                        {/* <h2>Back camera</h2> */}
                        <p>Back camera</p>
                    </a>

                    <a onClick={() => { setFacingMode("user") }} className={styles.card}>
                        {/* <h2>Front camera</h2> */}
                        <p>Front camera</p>
                    </a>

                </div>
                <p>{data}</p>
            </div>
        </div>
    );
}

export default Scan;
