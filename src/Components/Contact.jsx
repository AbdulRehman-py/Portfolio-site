

const Contact = () => {
return (
    <section className="p-global rounded-lg shadow-lg mt-12 text-center">
        <h2 className="text-darkyel font-bold text-5xl font-k2d mb-4">Contact</h2>
        <p className="text-blue1 font-mono text-lg mb-8">Get in touch with me:</p>
        <form className="flex flex-col gap-4 items-center">
            <input
                type="text"
                placeholder="Your Name"
                className="w-[300px] p-2 font-mono rounded-[6px] border outline-none text-base"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="w-[300px] p-2 font-mono rounded-[6px] border outline-none text-base"
            />
            <textarea
                placeholder="Your Message"
                className="w-[500px] p-2  rounded-lg border border-blue1 focus:outline-none focus:ring-2 focus:ring-blue1 text-base"
                rows="5"
            ></textarea>
            <div className="flex gap-[8rem]">
                <div className="flex items-center ">
                    <img src="/mail.png" alt="Mail Icon" className="mr-2" width={28} />
                    <p><a href="mailto:abdulrehmans30@outlook.com" className="text-blue1 font-mono text-[0.9rem]">abdulrehmans30@outlook.com</a></p>
                </div>
                <button
                    type="submit"
                    className="bg-darkyel text-darkbrown font-mono font-bold py-2 px-4 rounded-lg hover:bg-darkbrown hover:text-darkyel transition duration-300 text-base"
                >
                    Send Message
                </button>
            </div>
        </form>
    </section>
);
};

export default Contact;