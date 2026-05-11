export default function BVAWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      
      {/* HERO */}
      <section className="text-center py-24 px-6 border-b border-slate-800">
        <h1 className="text-6xl font-black">
          BOSPHORUS
          <span className="block text-red-500">
            VIRTUAL AIRLINES
          </span>
        </h1>

        <p className="mt-6 text-slate-300 text-xl max-w-2xl mx-auto">
          Modern Turkish Virtual Airline operating on the VATSIM Network.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="https://discord.com"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-bold"
          >
            Join Discord
          </a>

          <a
            href="https://vatsim.net"
            target="_blank"
            className="border border-slate-700 px-6 py-3 rounded-2xl font-bold"
          >
            Visit VATSIM
          </a>
        </div>
      </section>

      {/* INFO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h2 className="text-slate-400 text-sm">HUB</h2>
          <p className="text-2xl font-bold mt-2">LTFM</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h2 className="text-slate-400 text-sm">NETWORK</h2>
          <p className="text-2xl font-bold mt-2">VATSIM</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h2 className="text-slate-400 text-sm">FLEET</h2>
          <p className="text-2xl font-bold mt-2">A320 / B738</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h2 className="text-slate-400 text-sm">REGION</h2>
          <p className="text-2xl font-bold mt-2">Europe</p>
        </div>
      </section>

      {/* FLEET */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-10 text-center">
          Our Fleet
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
            <h3 className="text-3xl font-bold">Airbus A320</h3>

            <p className="text-slate-400 mt-4">
              Modern narrow-body aircraft for short and medium haul operations.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
            <h3 className="text-3xl font-bold">Boeing 737-800</h3>

            <p className="text-slate-400 mt-4">
              Reliable aircraft for realistic VATSIM flights and events.
            </p>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-slate-900/40 border-y border-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">
            Popular Routes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "LTFM → LTAC",
              "LTFM → EGLL",
              "LTFM → EHAM",
              "LTFM → EDDF",
            ].map((route) => (
              <div
                key={route}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center text-xl font-bold"
              >
                {route}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-black">
          Join Bosphorus VA
        </h2>

        <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto">
          Fly with a professional Turkish Virtual Airline on the VATSIM network.
        </p>

        <a
          href="https://discord.com"
          target="_blank"
          className="inline-block mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold text-lg"
        >
          Join Our Discord
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 Bosphorus Virtual Airlines — All Rights Reserved
      </footer>
    </div>
  );
}