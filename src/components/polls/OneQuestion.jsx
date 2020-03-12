import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import OneChoice from './OneChoice'
import fixDate from '../../utilities/fixDate.js'


function OneQuestion() {
    let {qNum} = useParams();
    const [hasError, setErrors] = useState(false);
    const [QData, setQData] = useState({});

    async function fetchData() {
        const res = await fetch("https://private-anon-5ac1fb39cc-pollsapi.apiary-mock.com/questions/" + qNum);
        res
            .json()
            .then(res => setQData(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData()
    }, []);


    // Getting the Max Votes and make it the 100% of our comparison

    let MaxVal = 0;
    function getMaxVote() {
        if (QData.choices && QData.choices.length > 0) {
            QData.choices.forEach(ele => {
                if (ele.votes > MaxVal) {
                    MaxVal = ele.votes
                }
            })
        }
    }


    function getRectWidth(vote) {
        return (vote / MaxVal) * 100
    }

    getMaxVote();
    return (

        < div className="question">
            {QData
                ? <>
                    <h3>{QData.question}</h3>
                    <small>{QData.published_at && fixDate(QData.published_at)}</small>
                    <hr/>
                    {QData.choices && QData.choices.length > 0 &&

                    QData.choices.map(
                        (ele, index) =>
                            <OneChoice
                                rectWidth={getRectWidth(ele.votes)}
                                ele={ele}
                                key={index}
                            />
                    )}

                </>
                : <p>Loading</p>
            }

            {/*todo : Handel if Has Errors More*/}
        </div>
    )
}

export default OneQuestion;