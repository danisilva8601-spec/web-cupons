import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <CheckoutForm />
      </main>
      <Footer />
    </div>
  )
}
