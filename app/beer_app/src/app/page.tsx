"use client"

import {Order} from "@/components/orderStatus/order";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-2xl w-full text-center mb-8">Welcome to Cometa Beers</h1>
        <Order></Order>
      </div>
    </main>
  );
}
