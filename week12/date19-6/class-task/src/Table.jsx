import React from "react";
import './App.css'

const Table = () => {
  return (
    <div className="full">
    <div className="table-container">
      <table className="table">
        <thead>
        <tr className="row1">
          <th>#</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
        </thead>
        <tbody>
        <tr className="row2">
          <td>#1</td>
          <td>🎬Inception</td>
          <td>Sci-fi</td>
          <td>5⭐</td>
        </tr>
        <tr className="row3">
          <td>#2</td>
          <td>🎬The Dark Knight</td>
          <td>Action</td>
          <td>5⭐</td>
        </tr>
         <tr className="row4">
          <td>#3</td>
          <td>🎬Interstellar</td>
          <td>Adventure</td>
          <td>5⭐</td>
        </tr>
         <tr className="row5">
          <td>#4</td>
          <td>🎬Parasitet</td>
          <td>Drama</td>
          <td>4⭐</td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;
