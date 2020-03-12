import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

import fixDate from '../../utilities/fixDate.js'

function ListQuestions() {
    const [hasError, setErrors] = useState(false);
    const [QList, setQlist] = useState({});
    let history = useHistory();

    async function fetchData() {
        const res = await fetch("https://private-anon-5ac1fb39cc-pollsapi.apiary-mock.com/questions");
        res
            .json()
            .then(res => setQlist(res))
            .catch(err => setErrors(err));
    }

    function redirectQuestion(url) {
        history.push(url);
    }

    useEffect(() => {
        fetchData()
    }, []);
    console.log(QList)
    return (
        <div className="questions">
            {QList.length > 0 &&
            QList.map((q, index) =>
                <div className="questions--item" key={index} onClick={() => redirectQuestion(q.url)}>
                    <h3>{q.question}</h3>
                    <small>Created At : {fixDate(q.published_at)}</small>
                </div>
            )}

            {/*todo : Handel if we have Errors Here*/}

        </div>
    );
}

export default ListQuestions;
