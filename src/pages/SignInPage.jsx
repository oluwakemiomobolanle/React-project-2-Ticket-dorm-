
const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 text-black px-4">
      <form className=" rounded-lg w-full max-w-md p-8 ">
        <h1 className="font-medium text-2xl mb-8 ">Sign In</h1>
        <label className="font-bold block mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="h-12 p-3 mb-4 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="email"
          placeholder="Enter Your Email"
        />
        <label className="font-bold block mb-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="h-12 p-3 mb-4 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          type="password"
          placeholder="Enter Your Password"
        />
        <section className="flex items-center justify-between mb-5 text-sm">
          <div className="flex items-center gap-2">
            <input id="remember" type="checkbox" className="h-4 w-4" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </section>
        <button className="h-12 w-full rounded bg-purple-500 hover:bg-purple-600 text-white font-semibold transition">
          Sign In
        </button>
        <p className="text-center mt-6 text-sm">
          Don't have an account?{" "}
          <a className="text-blue-500 hover:underline" href="/SignUpPage">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;

