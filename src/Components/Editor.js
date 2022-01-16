/* eslint-disable */

import React, { useState } from "react";
import "./Editor.css";
import Reviewer from "./Reviewer";

const Editor = () => {
  const [text, setText] = useState("**Hello World!**");
  return (
    <div className="editor-main">
      <h2>Editor</h2>
      <textarea
        className="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={20}
        cols={50}

      />
      <Reviewer text={text} />
    </div>
  );
};

export default Editor;
