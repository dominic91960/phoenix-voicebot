interface Props {
  active: string;
}

const Navbar = ({ active }: Props) => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  return (
    <nav className="flex items-center justify-between py-6">
      <a
        href="/home"
        className="font-outfit font-bold drop-shadow-[0px_0px_5px_rgb(0,0,0)] transition-transform duration-300 hover:scale-110"
      >
        PHOENIX
      </a>
      <div className="flex items-center gap-x-20 font-outfit">
        <a
          href="/components"
          className={`drop-shadow-[0px_0px_5px_rgb(0,0,0)] transition-transform duration-300 hover:scale-110 ${active === "components" && "text-primary"}`}
        >
          components
        </a>
        <a
          href="/features"
          className={`drop-shadow-[0px_0px_5px_rgb(0,0,0)] transition-transform duration-300 hover:scale-110 ${active === "features" && "text-primary"}`}
        >
          features
        </a>
        <a
          href="/past-records"
          className={`drop-shadow-[0px_0px_5px_rgb(0,0,0)] transition-transform duration-300 hover:scale-110 ${active === "past-records" && "text-primary"}`}
        >
          past records
        </a>
        <a
          href="/live-feed"
          className={`drop-shadow-[0px_0px_5px_rgb(0,0,0)] transition-transform duration-300 hover:scale-110 ${active === "live-feed" && "text-primary"}`}
        >
          live feed
        </a>
        <a
          className="cursor-pointer rounded-full bg-primary px-5 py-2 drop-shadow-[0px_0px_5px_rgb(0,0,0)] transition-transform duration-300 hover:scale-110"
          onClick={logout}
        >
          log out
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
