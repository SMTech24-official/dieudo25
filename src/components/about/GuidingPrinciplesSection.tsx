export default function GuidingPrinciplesSection() {
  return (
    <section className="bg-coal text-white py-16">
      <div className="container mx-auto ">
        {/* Main Heading Section */}
        <div className="lg:w-1/2 mb-12">
          <h4 className="text-lime-400 uppercase text-sm mb-2">— our values</h4>
          <h2 className="text-4xl font-bold mb-6">Our Guiding Principles</h2>
          <a
            href="#get-started"
            className="inline-block px-6 py-3 bg-lime-500 text-black rounded-lg font-medium hover:bg-lime-600 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Inclusivity | One people
            </h3>
            <p className="text-gray-400">
              Danish marshmallow icing bonbon muffin. Jelly jelly beans
              shortbread bear claw macaroon donut marshmallow jujubes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Integrity | One belief
            </h3>
            <p className="text-gray-400">
              Danish marshmallow icing bonbon muffin. Jelly jelly beans
              shortbread bear claw macaroon donut marshmallow jujubes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Purpose | One vision</h3>
            <p className="text-gray-400">
              Danish marshmallow icing bonbon muffin. Jelly jelly beans
              shortbread bear claw macaroon donut marshmallow jujubes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Trust | One assurance
            </h3>
            <p className="text-gray-400">
              Danish marshmallow icing bonbon muffin. Jelly jelly beans
              shortbread bear claw macaroon donut marshmallow jujubes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
