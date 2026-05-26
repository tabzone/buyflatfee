export default function Process() {
  const steps = [
    "Book Call",
    "Find Home",
    "Submit Offer",
    "Close",
  ];

  return (
    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-black">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {steps.map((x, i) => (
            <div
              key={x}
              className="border rounded-3xl p-10"
            >
              <div className="text-5xl font-black">
                0{i + 1}
              </div>

              <div className="mt-4 text-xl">
                {x}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}