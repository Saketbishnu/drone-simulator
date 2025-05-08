"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FlightTimeChart } from "./flight-time-chart"

export function DroneSimulator() {
  const [baseWeight, setBaseWeight] = useState<string>("1.5")
  const [batteryWh, setBatteryWh] = useState<string>("150")
  const [basePower, setBasePower] = useState<string>("100")
  const [payloads, setPayloads] = useState<string>("0,0.25,0.5,0.75,1.0")

  const [results, setResults] = useState<
    Array<{
      payload: number
      totalWeight: number
      power: number
      flightTime: number
    }>
  >([])

  const [chartData, setChartData] = useState<
    Array<{
      payload: number
      flightTime: number
    }>
  >([])

  const simulate = () => {
    try {
      const baseWeightNum = Number.parseFloat(baseWeight)
      const batteryWhNum = Number.parseFloat(batteryWh)
      const basePowerNum = Number.parseFloat(basePower)
      const payloadsArray = payloads.split(",").map((p) => Number.parseFloat(p.trim()))

      if (isNaN(baseWeightNum) || isNaN(batteryWhNum) || isNaN(basePowerNum)) {
        alert("INVALID PARAMETERS DETECTED. PLEASE VERIFY INPUT VALUES.")
        return
      }

      const newResults = payloadsArray.map((payload) => {
        const totalWeight = baseWeightNum + payload
        const power = basePowerNum * (totalWeight / baseWeightNum)
        const flightTime = (batteryWhNum / power) * 60

        return {
          payload,
          totalWeight,
          power,
          flightTime,
        }
      })

      setResults(newResults)
      setChartData(newResults.map((r) => ({ payload: r.payload, flightTime: r.flightTime })))
    } catch (error) {
      alert("SIMULATION ERROR. VERIFY INPUT FORMAT AND RETRY.")
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="border-b border-gray-700">
          <CardTitle className="text-xl text-gray-100">MISSION PARAMETERS</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="baseWeight" className="text-gray-300">BASE UNIT WEIGHT (kg)</Label>
              <Input
                id="baseWeight"
                value={baseWeight}
                onChange={(e) => setBaseWeight(e.target.value)}
                placeholder="Enter base weight"
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batteryWh" className="text-gray-300">POWER CAPACITY (Wh)</Label>
              <Input
                id="batteryWh"
                value={batteryWh}
                onChange={(e) => setBatteryWh(e.target.value)}
                placeholder="Enter battery capacity"
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="basePower" className="text-gray-300">BASE POWER CONSUMPTION (W)</Label>
              <Input
                id="basePower"
                value={basePower}
                onChange={(e) => setBasePower(e.target.value)}
                placeholder="Enter base power"
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="payloads" className="text-gray-300">PAYLOAD WEIGHTS (comma-separated kg)</Label>
              <Input
                id="payloads"
                value={payloads}
                onChange={(e) => setPayloads(e.target.value)}
                placeholder="Enter payloads"
                className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              />
            </div>
          </div>
          <Button
            className="mt-6 w-full md:w-auto bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600"
            onClick={simulate}
          >
            INITIATE SIMULATION
          </Button>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="border-b border-gray-700">
              <CardTitle className="text-xl text-gray-100">SIMULATION RESULTS</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ScrollArea className="h-[300px] w-full rounded-md border border-gray-700">
                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-2 text-gray-300">PAYLOAD (kg)</th>
                        <th className="text-left p-2 text-gray-300">TOTAL WEIGHT (kg)</th>
                        <th className="text-left p-2 text-gray-300">POWER (W)</th>
                        <th className="text-left p-2 text-gray-300">FLIGHT TIME (min)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => (
                        <tr key={index} className="border-b border-gray-700">
                          <td className="p-2 text-gray-300">{result.payload.toFixed(2)}</td>
                          <td className="p-2 text-gray-300">{result.totalWeight.toFixed(2)}</td>
                          <td className="p-2 text-gray-300">{result.power.toFixed(1)}</td>
                          <td className="p-2 text-gray-300">{result.flightTime.toFixed(1)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="border-b border-gray-700">
              <CardTitle className="text-xl text-gray-100">FLIGHT TIME VS PAYLOAD ANALYSIS</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[400px] w-full">
                <FlightTimeChart data={chartData} />
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
