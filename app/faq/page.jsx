export default function Page() {
  return (
    <main>

      {/* HERO */}

      <section className="pt-40 pb-24 bg-black text-white">

        <div className="max-w-6xl mx-auto px-8">

          <div className="max-w-3xl">

            <div className="inline-flex rounded-full border border-white/20 px-5 py-2 text-sm">

              Frequently Asked Questions

            </div>

            <h1 className="mt-8 text-7xl font-black leading-[0.95]">

              Questions.
              <br />

              Answered.

            </h1>

            <p className="mt-8 text-xl text-gray-400">

              Everything you need to know about
              flat-fee buyer representation.

            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="bg-[#faf8f4]">

        <div className="max-w-5xl mx-auto px-8 py-20">

          <div className="space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-2xl font-semibold">
                How does flat fee buying work?
              </h2>

              <p className="mt-4 text-gray-600">

                Transparent buyer representation
                with one fixed fee.

              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-2xl font-semibold">
                What services are included?
              </h2>

              <p className="mt-4 text-gray-600">

                Guidance from search through closing.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}