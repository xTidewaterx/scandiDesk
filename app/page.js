import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] ">

      {/* NAVBAR */}
      <nav className="absolute pt-8  top-0 left-0 w-full z-20 px-14 py-10 flex justify-between items-center">
        <h1 className="text-black text-3xl font-light tracking-[0.25em] drop-shadow">
          ScandiDesk
        </h1>

        <ul className="flex gap-12 text-white text-sm font-light tracking-[0.2em] drop-shadow">
          <li className="hover:opacity-80 transition cursor-pointer">HOME</li>
          <li className="hover:opacity-80 transition cursor-pointer">PRODUKTER</li>
          <li className="hover:opacity-80 transition cursor-pointer">OM OSS</li>
        </ul>
      </nav>

{/* HERO */}
<section className="relative w-full h-[60vh] flex items-end justify-center pb-24 mb-0">
  <Image
    src="https://www.yankodesign.com/images/design_news/2022/06/this-beautiful-wooden-desk-has-subtle-ways-for-you-to-organize-your-things/pessoa-desk-8.jpg"
    alt="ScandiDesk Hero"
    fill
    priority
    className="object-cover object-[center_0%]"
  />

  <div className="relative z-10 text-center px-6">
    <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white drop-shadow-xl">
      ScandiDesk
    </h1>

    <p className="text-lg md:text-xl max-w-xl mx-auto text-white/90 leading-relaxed mt-4 drop-shadow">
      Scandinavian desk essentials in natural wood.
    </p>
  </div>
</section>




      {/* EVERYTHING BELOW HERO IS BEIGE */}
      <div className="bg-[#faf8f5] pt-12">

        {/* PRODUCT GRID */}
        <section className="px-6 py-14 max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-20">
            Calm. Natural. Nordic.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

            {/* Amazon Image */}
            <div className="group">
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition relative">
                <Image
                  src="https://m.media-amazon.com/images/I/61TT58q9iBL._AC_UF894,1000_QL80_.jpg"
                  alt="Treprodukt"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-light mt-4">Premium Treholder</h3>
              <p className="text-[#4a4a4a] text-sm mt-1">
                Elegant skandinavisk design i naturlig treverk.
              </p>
              <p className="font-medium mt-2">899 kr</p>
            </div>

            {/* Gstatic Image */}
            <div className="group">
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition relative">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvAliU8LdonpM-TYKbwWfkxnZtHZy8l-u1j_CrKYul6puLZns"
                  alt="Treprodukt 2"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-light mt-4">Nordic Treobjekt</h3>
              <p className="text-[#4a4a4a] text-sm mt-1">
                Et moderne, minimalistisk objekt i skandinavisk stil.
              </p>
              <p className="font-medium mt-2">799 kr</p>
            </div>

            {/* AliExpress Image */}
            <div className="group">
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition relative">
                <Image
                  src="https://s.alicdn.com/@sc04/kf/H9d3acbf9101c47f7ae5f4dea85bde292l.jpg"
                  alt="Treprodukt 3"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-light mt-4">Skandinavisk Treholder</h3>
              <p className="text-[#4a4a4a] text-sm mt-1">
                Et moderne objekt i lyst treverk, perfekt for et rolig skrivebord.
              </p>
              <p className="font-medium mt-2">849 kr</p>
            </div>

          </div>
        </section>

        {/* SUSTAINABLE WOOD SECTION */}
        <section className="px-6 py-32">
          <div className="max-w-4xl mx-auto bg-[#e9e4db] rounded-2xl p-16 shadow-sm">

            <h2 className="text-3xl font-light mb-6 text-center">
              Sustainable Scandinavian Wood
            </h2>

            <p className="text-[#4a4a4a] text-lg leading-relaxed mb-6 text-center">
              Every ScandiDesk object is crafted from responsibly sourced Nordic wood.
              We work with small, certified suppliers who harvest slowly, respectfully
              and with deep knowledge of the forests they care for.
            </p>

            <p className="text-[#4a4a4a] text-base leading-relaxed text-center">
              When you choose ScandiDesk, you support sustainable craftsmanship,
              long‑lasting materials and a calmer way of living. Our products are
              made to age beautifully — not to be replaced.
            </p>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-24 text-center text-sm text-[#6a6a6a] bg-white mt-24">
          <div className="flex flex-col items-center gap-6">

            <div className="flex items-center gap-3 opacity-90">
              <Image
                src="https://media.magflags.net/media/catalog/product/cache/bbfe81b5dc693f3f88259968def067fa/N/O/NO-2.5x1.png"
                alt="Norwegian Flag"
                width={32}
                height={22}
                className="object-contain"
              />
              <span className="text-base tracking-[0.2em] text-[#4a4a4a]">
                ScandiDesk — Designed in Norway
              </span>
            </div>

            <p className="text-xs text-[#7a7a7a] mt-4 tracking-wide">
              © {new Date().getFullYear()} ScandiDesk — Scandinavian Desk Objects
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
}


      </div>
    </main>
  );
}

