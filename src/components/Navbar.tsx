const Navbar = () => {
    return (
        <div className="sticky top-5 left-0 right-0 z-40 bg-background/50 py-4 hidden md:block">
            <div className="container m-auto ">
                <div className="flex justify-between items-center m-auto w-[95%] text-foreground">
                    <div className="tracking-widest">PORTFÓLIO</div>
                    <div className="tracking-widest">
                        LARISSA DOMINGUES <strong>NUTRICIONISTA</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
