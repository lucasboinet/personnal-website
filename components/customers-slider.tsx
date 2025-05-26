import Image from "next/image";

const customers = [
  '/icons/skyloud_logo.png',
  '/icons/tokatab_logo.png',
]

export default function CustomersSlider() {
  return (
    <div
      id="clients-slider"
      className="flex flex-col sm:flex-row items-center justify-center w-full gap-20 overflow-x-auto px-4 py-12"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {customers.map((customer) => (
        <Image
          key={customer}
          src={customer}
          width={200}
          height={40}
          alt="customer logo"
          className="max-h-14 w-auto max-w-56 [filter:grayscale(1)] opacity-60"
        />
      ))}
    </div>
  )
}
