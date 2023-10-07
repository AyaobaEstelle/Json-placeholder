// import React from 'react'
import { useState } from "react";
import useDate from "./custom-hooks/useDate";

const Posts = ({ item, onRemove }) => {
  const [editPost, setEditPost] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [editedBody, setEditedBody] = useState(item.body);
  const date = useDate("");

  const handleEdit = () => {
    console.log(item);
    setEditPost(true);
  };

  const handleCancel = () => {
    setEditPost(false);
  };

  const handleSave = () => {
    item.title = title;
    item.body = editedBody;
    setEditPost(false);
  };

  return (
    <>
      <section className="postbox">
        {!editPost ? (
          <>
            <div className="post-item">
              <span>Title:</span> {item.title} <br />
              <div className="item-body">{item.body}</div>
              <button onClick={() => onRemove(item.id)}>Delete</button>
              <button onClick={handleEdit}>Edit</button> <br />
              Date: {date.toString()}
            </div>
          </>
        ) : (
          <>
            <div className="post-item">
              <input
                className="input"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <br />
              <textarea
                className="textarea"
                type="text"
                name={item.id}
                value={editedBody}
                onChange={(event) => setEditedBody(event.target.value)}
              />
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleSave}>Save</button>
              Date: {date.toString()}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Posts;
