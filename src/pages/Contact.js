import "../css/Contact.css";

function f() {
  console.log("submitted");
}

export default function Contact() {
  return (
    <div style={{ width: "80%", justifyContent: "center", alignItems:'center', display: "flex" }}>
      <div>
        <h1>Contact Me</h1>
          <ul style={{ padding: "20px" }}>
            <li>
              Email&nbsp;
              <a href="mailto: ethan.james.lindsey@gmail.com">
                ethan.james.lindsey@gmail.com
              </a>
            </li>
            <li>
              LinkedIn&nbsp;
              <a href="https://www.linkedin.com/in/ejlindseycs/">ejlindseycs</a>
            </li>
            <li>
              GitHub&nbsp;
              <a href="https://github.com/EthanJLindsey">EthanJLindsey</a>
            </li>
          </ul>
      </div>
      <div style={{ padding: "20px" }}>
        <h1 style={{textAlign:'left','lineHeight':1}}>Have questions or want to share comments with me?</h1>
        <p style={{textAlign:'left','marginTop':0}}>
          You can email me or send me a message LinkedIn. Alternatively, you can
          also sent me direct feedback using the textbox below.
        </p>
        <textarea></textarea>
        <button onClick={f}>Submit</button>
      </div>
    </div>
  );
}
