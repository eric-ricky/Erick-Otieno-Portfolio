const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-slate-100 via-white to-slate-100 flex items-center py-28"
    >
      <div className="container mx-auto p-8 md:px-28 lg:px-44">
        <div className="flex flex-col space-y-2">
          <p className="headingxs text-center text-primary">What’s Next?</p>
          <h2 className="headingsm lg:headinglg text-center">Get In Touch</h2>
        </div>

        <div className="lg:w-[55%] mx-auto text-center body">
          <p className="mt-4">
            Please feel free to contact me if you have any questions or if you
            are in need of a front-end developer for your next project.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="mailto:ericricky200@gmail.com"
              className="px-6 py-2 border-2 border-primary rounded-md md:ml-5 flex items-center mt-8 text-primary hover:bg-green-100 cursor-pointer"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
