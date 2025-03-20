import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import emailjs from "emailjs-com";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();

    // Validate form data
    if (!message.name || !message.email || !message.message) {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setIsLoading(true); // Set loading state

    // Send the email using EmailJS
    emailjs
      .send(
        "service_e3o4qks", // Your EmailJS Service ID
        "template_xkkv4nm", // Your EmailJS Template ID
        message, // The form data
        "wHeNNgiIN26ocUr5M" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);

          // Show a success toast notification
          toast.success("Message Sent Successfully!", {
            position: "top-center",
            autoClose: 3000, // Automatically close after 3 seconds
          });

          // Reset the form fields
          setMessage({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error:", error.text);

          // Show an error toast notification
          toast.error("Failed to send the message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      )
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  return (
    <section className="sm:p-global p-[5rem] rounded-lg shadow-lg mt-12 flex flex-col items-center justify-center text-center">
      <h2 className="text-darkyel font-bold md:text-5xl exsmall:text-3xl text-2xl font-k2d mb-4">Contact</h2>
      <p className="text-blue1 font-mono text-[0.8rem] exsmall:text-lg mb-8 text-center">Get in touch with me:</p>
      <form onSubmit={handleclick} className="flex flex-col gap-4 items-center">
        <input
          type="text"
          name="name"
          value={message.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="md:w-[300px] p-2 font-mono rounded-[6px] border outline-none text-base"
          required
        />
        <input
          type="email"
          name="email"
          value={message.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="md:w-[300px] p-2 font-mono rounded-[6px] border outline-none text-base"
          required
        />
        <textarea
          name="message"
          value={message.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="md:w-[500px] exsmall:w-[350px] w-full p-2 rounded-lg border border-blue1 focus:outline-none focus:ring-2 focus:ring-blue1 text-base"
          rows="6"
          required
        ></textarea>
        <button
          type="submit"
          className={`bg-darkyel text-darkbrown font-mono font-bold py-2 px-4 rounded-lg hover:bg-darkbrown text-[0.8rem] hover:text-darkyel transition duration-300 md:text-base ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Toastify Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;