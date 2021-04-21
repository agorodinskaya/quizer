import React from "react";
import classes from "./Loading.module.css";
const Loading = () => {
  return (
    <main className={classes.LoadingMain}>
      <div className={classes.LoaderContainer}>
        <div className={classes.Circle}></div>
        <div className={classes.Circle1}></div>
        <div className={classes.Circle2}></div>
        <div className={classes.Circle3}></div>
        <div className={classes.Circle4}></div>
        <div className={classes.Circle5}></div>
        <div className={classes.Circle6}></div>
        <div className={classes.Circle7}></div>
      </div>
    </main>
  );
};

export default Loading;
