export default function Trust() {
  return (
    <section className="bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Transparent Pricing",
            "Buyer First",
            "Professional Guidance",
          ].map((x) => (
            <div
              key={x}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >
              <h3 className="text-2xl font-bold">
                {x}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}