export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f4] via-white to-[#ece7df]" />

      <div className="absolute top-0 left-[30%] w-[700px] h-[700px] rounded-full bg-black/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex rounded-full bg-black text-white px-5 py-2">

              Save Thousands • Flat Fee Buying

            </div>

            <h1 className="mt-8 text-[70px] lg:text-[90px] font-black leading-[0.92] tracking-tight">

              Buy Your
              <br />

              Dream Home.
              <br />

              Not Extra Fees.

            </h1>

            <p className="mt-8 text-xl text-gray-600 max-w-xl">

              Full-service buyer representation with
              transparent flat pricing.

              Keep more of your money for the things
              that matter.

            </p>

            <div className="mt-10 flex gap-5">

              <button className="bg-black text-white px-8 py-5 rounded-full hover:scale-105 transition">

                Schedule Consultation

              </button>

              <button className="rounded-full border px-8 py-5 hover:bg-white">

                Calculate Savings

              </button>

            </div>

            <div className="mt-14 flex gap-12">

              <Metric
                number="$4,999"
                label="Flat Fee"
              />

              <Metric
                number="100%"
                label="Buyer Focused"
              />

              <Metric
                number="CA"
                label="Coverage"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="relative">

              <div className="absolute -top-10 -left-10 w-full h-full rounded-[50px] bg-black" />

              <div className="relative rounded-[50px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,.15)]">

                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop"
                  alt=""
                  className="w-full h-[720px] object-cover"
                />

                {/* floating card */}

                <div className="absolute bottom-8 left-8 right-8">

                  <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6">

                    <div className="text-sm text-gray-500">

                      Estimated Buyer Savings

                    </div>

                    <div className="mt-2 text-5xl font-black">

                      $32,500

                    </div>

                    <div className="mt-2 text-gray-600">

                      Example scenario only

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Metric({
  number,
  label,
}) {
  return (
    <div>

      <div className="text-4xl font-black">

        {number}

      </div>

      <div className="text-gray-500">

        {label}

      </div>

    </div>
  );
}