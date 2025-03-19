

const Contact = () => {
return (
    <section className="p-global rounded-lg shadow-lg mt-12 text-center">
        <h2 className="text-darkyel font-bold md:text-5xl sm:text-3xl text-2xl font-k2d mb-4">Contact</h2>
        <p className="text-blue1 font-mono text-[0.8rem] sm:text-lg mb-8 text-center">Get in touch with me:</p>
        <form className="flex flex-col gap-4 items-center">
            <input
                type="text"
                placeholder="Your Name"
                className="mdw-[300px]  p-2 font-mono rounded-[6px] border outline-none text-base"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="md:w-[300px] p-2 font-mono rounded-[6px] border outline-none text-base"
            />
            <textarea
                placeholder="Your Message"
                className="md:w-[500px] exsmall:w-[200px] sm:w-[350px] p-2  rounded-lg border border-blue1 focus:outline-none focus:ring-2 focus:ring-blue1 text-base"
                rows="8"
            ></textarea>
            <div className="flex flex-wrap gap-4 items-center justify-center md:gap-[8rem]">
                <div className="flex items-center ">
                    <img src="/mail.png" alt="Mail Icon" className="mr-auto" width={28} />
                    <p><a href="mailto:abdulrehmans30@outlook.com" className="text-blue1 font-mono text-[0.9rem]">abdulrehmans30@outlook.com</a></p>
                </div>
                <button
                    type="submit"
                    className="bg-darkyel text-darkbrown font-mono font-bold py-2 px-4 rounded-lg hover:bg-darkbrown text-[0.8rem] hover:text-darkyel transition duration-300 md:text-base"
                >
                    Send Message
                </button>
            </div>
        </form>
    </section>
);
};

export default Contact;