import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumb">
          <Link to="/messages">MESSAGES</Link> &gt; JOHN DOE &gt;
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              officia sequi sunt adipisci hic rem recusandae nobis temporibus
              iste? Recusandae ratione vero quam nihil iusto odit, facilis
              assumenda placeat blanditiis.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              officia sequi sunt adipisci hic rem recusandae nobis temporibus
              iste? Recusandae ratione vero quam nihil iusto odit, facilis
              assumenda placeat blanditiis.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              officia sequi sunt adipisci hic rem recusandae nobis temporibus
              iste? Recusandae ratione vero quam nihil iusto odit, facilis
              assumenda placeat blanditiis.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              officia sequi sunt adipisci hic rem recusandae nobis temporibus
              iste? Recusandae ratione vero quam nihil iusto odit, facilis
              assumenda placeat blanditiis.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="Write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
