import { DroneSimulator } from "@/components/drone-simulator"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-50"></div>
          <h1 className="text-4xl font-bold text-center mb-2 relative z-10 text-gray-100">DRONE FLIGHT DURATION SIMULATOR</h1>
          <p className="text-center mb-8 max-w-2xl mx-auto text-gray-400 relative z-10">
            Calculate mission duration based on payload specifications. Enter drone parameters below to initiate simulation protocol.
          </p>
        </div>
        <DroneSimulator />
      </main>
    </div>
  )
}
