import { useState } from "react";

export default function CommentsForm() {
  const initialFormState = {
    username: "",
    comment: "",
    rating: 5,
  };

  let [formData, setFormData] = useState(initialFormState);

  let handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // ✅ Reset form after submit
    setFormData(initialFormState);
  };

  return (
    <div>
      <h4>Give a Comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />

        <br />
        <br />

        <label htmlFor="comment">Comments</label>
        <textarea
          placeholder="comment"
          value={formData.comment}
          onChange={handleInputChange}
          id="comment"
          name="comment"
        ></textarea>

        <br />
        <br />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
