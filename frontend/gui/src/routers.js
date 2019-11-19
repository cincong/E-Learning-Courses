import React from 'react'

import { Route } from 'react-router-dom';
import AssignmentList from './container/AssignmentList';
import AssignmentDetails from './container/AssignmentDetails';
import LessonsList from './container/LessonsList';
import LessonsDetails from './container/LessonsDetails';
import AssignmentCreate from './container/AssignmentCreate';
const BaseRouter = () => (
  <div>
    <Route exact path ='/' component={AssignmentList}/>
    <Route exact path ='/create' component={AssignmentCreate}/>
    <Route exact path ='/:assignmentID' component={AssignmentDetails}/>
    <Route exact path ='/:assignmentID/lessons' component={LessonsList}/>
    <Route exact path ='/:assignmentID/lessons/:lessonsID' component={LessonsDetails}/>
    


  </div>
)

export default  BaseRouter;