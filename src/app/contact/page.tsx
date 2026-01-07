import BookingForm from "@/components/BookingForm"

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact & Booking</h1>

      <p>
        No. 1 Obi Link Drive, off Okpanam Road, opposite 5 Star Restaurant, Asaba
      </p>
      <p>Phone: 08100670347</p>
      <p>Email: info@vivicclinic.org</p>

      <BookingForm />
    </main>
  )
}
