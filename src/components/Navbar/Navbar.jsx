import Container from "../common/Container";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <Container>
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <h2 className="text-white text-3xl font-bold">
            RemoteRecruit
          </h2>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="text-white font-medium hover:opacity-80 transition">
              Sign In
            </button>

            <button
              className="
              bg-sky-300
              px-5
              py-3
              rounded-full
              text-white
              font-semibold
              hover:scale-105
              transition
              "
            >
              Sign Up
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;