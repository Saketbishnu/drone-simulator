import { Navbar } from "@/components/navbar"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">About Drone Flight Simulator</h1>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="mb-4">
            The Drone Flight Duration Simulator helps drone operators estimate flight times based on payload weight. The
            simulator uses a mathematical model that accounts for:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Base drone weight</li>
            <li>Battery capacity (in Watt-hours)</li>
            <li>Base power consumption</li>
            <li>Additional payload weight</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Calculation Method</h2>
          <p className="mb-4">The simulator calculates flight time using the following formula:</p>

          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p className="font-mono">
              Total Weight = Base Weight + Payload Weight
              <br />
              Power Consumption = Base Power * (Total Weight / Base Weight)
              <br />
              Flight Time (minutes) = (Battery Capacity / Power Consumption) * 60
            </p>
          </div>

          <p className="mb-4">
            This model assumes that power consumption scales linearly with weight, which is a reasonable approximation
            for many drone configurations.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
          <p>
            This simulator provides estimates only. Actual flight times may vary due to factors such as wind conditions,
            temperature, battery age, and flying style. Always maintain a safety margin and follow proper battery
            management practices when operating your drone.
          </p>
        </div>
      </main>
    </div>
  )
}
