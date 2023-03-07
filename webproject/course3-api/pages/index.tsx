import { useRef, useState } from "react";

interface Feedback {
  id: string;
  email: string;
  text: string;
}

export default function Homepage() {
  const [feedbackItems, setFeedbackItems] = useState<Feedback[]>([]);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

  function submitFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredFeedback = feedbackInputRef.current?.value;
    const reqBody = { email: enteredEmail, text: enteredFeedback };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    //email:test@email.com text: "test sending feedback"
  }

  function showFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackitems(data.feedback);
      });
  }

  return (
    <>
      <main>
        <div>
          <h1>Home</h1>
          <form onSubmit={submitFormHandler}>
            <div>
              <label htmlFor="email">Your Email Address</label>
              <input type="email" id="email" ref={emailInputRef} />
            </div>
            <div>
              <label htmlFor="feedback">Your Feedback</label>
              <textarea id="feedback" rows={5} ref={feedbackInputRef}></textarea>
            </div>
            <button>Send Feedback</button>
          </form>
          <hr />
          <button onClick={showFeedbackHandler}>Load Feedback</button>
          <ul>
            {feedbackItems.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
