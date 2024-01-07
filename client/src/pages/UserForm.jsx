const UserForm = () => {
  return (
    <>
      <div className="border mx-auto m-10 p-5">
        <form className="max-w-4xl mx-auto flex flex-col gap-4 items-center">
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              id="name"
              className="px-5 py-2 text-sm bg-slate-100"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              id="email"
              className="px-5 py-2 text-sm bg-slate-100"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="message" className="">
              Message
            </label>
            <input
              id="message"
              className="px-5 py-2 text-sm bg-slate-100"
              type="text"
              placeholder="Message"
            />
          </div>
          <button className="px-5 py-2 text-sm bg-slate-800 text-white uppercase hover:opacity-95 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
