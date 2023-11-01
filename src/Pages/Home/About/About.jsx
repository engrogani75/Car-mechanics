

const About = () => {
    return (
        <div className="grid grid-cols-2 justify-center items-center gap-4 mt-10">

            {/* pic */}
            <div className="flex justify-center items-center">
                <img src="/assets/images/about_us/person.jpg" alt="" className="h-60"/>
                <img src="/assets/images/about_us/parts.jpg" alt="" className="h-40 relative top-20 -left-32 border-8"/>
            </div>
            {/* content */}
            <div>
                <h2 className="text-orange-700 font-bold">About Us</h2>
                <h1 className="text-6xl font-bold">We are qualified & of experience <br /> in this field</h1>
                <p className="mt-4 text-[#737373]">
                    There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected humour,
                     or randomised words which don't look even slightly believable.
                      </p>
                      <p className="text-[#737373] mt-6">
                      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                      </p>
                      <button className="bg-[#FF3811] px-6 py-2 text-white border-2 rounded-xl mt-4 hover:-translate-y-2 duration-75">Get More Info</button>
            </div>
        </div>
    );
};

export default About;