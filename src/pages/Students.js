import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Student from "../components/Student";
import { getUsers } from "../actions/auth";
import styles from "../styles/Students.module.css";

const Students = () => {
  const dispatch = useDispatch();
  const {user, users } = useSelector((state) => state.auth);
  const sortUsers = users.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  return (
    <div className={styles.students}>
      <div className={styles.titles}>
        <p>Students</p>
        <p>Actions</p>
      </div>

<div className={styles.list}>
  {sortUsers.map((user) => (
    <Student key={user._id} id={user._id} timestamp={user.createdAt} name={user.name} level={user.level} program={user.program} email={user.email} />
  ))}
</div>
    </div>
  );
};

export default Students;
