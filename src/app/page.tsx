"use client";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    tailNumber: "",
    aircraftType: "",
    date: "",
    airportId: "",
    fboName: "",
    services: "",
    transportation: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://auto-inst.thevibe.builders/webhook/8a2d98da-3691-42a4-8412-69ff712c2ed2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Reservation Submitted successfully!");
        setForm({
          tailNumber: "",
          aircraftType: "",
          date: "",
          airportId: "",
          fboName: "",
          services: "",
          transportation: "",
        });
      } else {
        alert("Failed to submit reservation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center">🛫 Pilot Reservation Form</h1>

        <input
          type="text"
          name="tailNumber"
          value={form.tailNumber}
          onChange={handleChange}
          placeholder="Tail Number"
          className="w-full border rounded px-3 py-2 text-sm text-black"
        />
        
        <input
          type="text"
          name="aircraftType"
          value={form.aircraftType}
          onChange={handleChange}
          placeholder="Aircraft Type"
          className="w-full border rounded px-3 py-3 text-sm text-black"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-sm text-black"
        />

        <input
          type="text"
          name="airportId"
          value={form.airportId}
          onChange={handleChange}
          placeholder="Airport Identifier"
          className="w-full border rounded px-3 py-2 text-sm text-black"
        />
          
        <input
          type="text"
          name="fboName"
          value={form.fboName}
          onChange={handleChange}
          placeholder="FBO Name"
          className="w-full border rounded px-3 py-2 text-sm text-black"
        />

        <input
          type="text"
          name="services"
          value={form.services}
          onChange={handleChange}
          placeholder="Requested Services"
          className="w-full border rounded px-3 py-2 text-sm text-black"
        />

        <input
          type="text"
          name="transportation"
          value={form.transportation}
          onChange={handleChange}
          placeholder="Transportation"
          className="w-full border rounded px-3 py-2 text-sm text-black"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Submit Reservation
        </button>
      </form>
    </main>
  );
}
