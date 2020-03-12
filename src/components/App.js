import React from 'react';
import ListQuestions from "./polls/ListQuestions";
import OneQuestion from "./polls/OneQuestion";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import '../scss/app.scss'

// Todo
//  - Creating a List for All Questions.
//  - View Result page for Every Question.
//  - Add new Question Page.



function App() {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ListQuestions/>
                    </Route>
                    <Route exact path="/questions/:qNum">
                        <OneQuestion></OneQuestion>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;


