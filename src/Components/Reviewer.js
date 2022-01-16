import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import remarkDirective from "remark-directive";

import "./Reviewer.css";

const Reviewer = (props) => {
  return (
    <div className="reviewer">
      <h2>Preview</h2>
      <ReactMarkdown
        className="preview"
        remarkPlugins={[
          [remarkGfm],
          [emoji, { padSpaceAfter: false, emoticon: true }],
          [remarkDirective],
        ]}
      >
        {props.text}
      </ReactMarkdown>
    </div>
  );
};

export default Reviewer;
