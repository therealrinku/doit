import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Arrows from "../components/Arrows";
import Footer from "../components/Footer";
import Nav2 from "../components/Nav2";
import TodoPage from "../components/TodoPage";
import * as userActions from "../redux/user/userActions";
import * as todosActions from "../redux/todos/todosActions";
import moment from "moment";
import { Redirect } from "react-router-dom";

const Homepage = ({
  CURRENTUSER,
  SIGNOUT,
  FULLTODOLIST,
  FETCH_TODOS,
  LOADING,
  ERROR,
}) => {
  const [newTodo, setNewTodo] = useState("");
  const [datePlus, setDatePlus] = useState(0);
  const formatedDate = moment(
    moment(new Date()).add({ days: datePlus })
  ).format("ddd MMM Do YYYY");

  const todosObject = FULLTODOLIST.filter((data) => data.date === formatedDate);

  useEffect(() => {
    if (!todosObject[0]?.date) {
      FETCH_TODOS(CURRENTUSER, formatedDate);
    }
  }, [formatedDate]);

  return (
    <div className="homepage">
      <Nav2 currentUser={CURRENTUSER} SIGNOUT={SIGNOUT} />
      <TodoPage
        loading={LOADING}
        todos={todosObject[0]?.todos || []}
        formatedDate={formatedDate}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        datePlus={datePlus}
      />
      <Arrows setDatePlus={setDatePlus} />
      {!CURRENTUSER ? <Redirect to="/" /> : null}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ERROR: state.todos.error,
    LOADING: state.todos.loading,
    FULLTODOLIST: state.todos.todos,
    CURRENTUSER: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FETCH_TODOS: (currentUser, date) =>
      dispatch(todosActions.FETCH_TODOS(currentUser, date)),
    SIGNOUT: () => dispatch(userActions.SIGNOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);