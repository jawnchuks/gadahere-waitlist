import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#F4aa06]/80 relative overflow-hidden">
          <Image
            src="/mobile-app.png"
            alt="Mobile App Screenshots"
            fill
            className="object-contain px-14 object-center"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 md:mt-20 justify-start px-6 pb-10">
          <div className="h-20 relative overflow-hidden">
            <Image
              src="/logo.png"
              alt="Mobile App Screenshots"
              fill
              className="object-contain px-14 object-bottom"
            />
          </div>
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg text-center md:text-left">
            Gadahere is Coming Soon – Be the First to Join!
          </h1>
          <p className="text-gray-500">
            Imagine a world where payments and communities blend effortlessly,
            discovering top shopping deals is seamless, and connecting with
            vendors happens in just a tap. That's what Gadahere is all about!
          </p>
          <p className="text-gray-500">
            Our app simplifies your shopping experience, allowing you to:
            <ul>
              <li>• ⁠⁠Make effortless payments</li>
              <li>•⁠ ⁠Explore eCommerce listings with ease</li>
              <li>•⁠ ⁠Stay connected with your community</li>
              <li>•⁠ ⁠Interact with vendors in one convenient place</li>
            </ul>
          </p>
          <p className="text-gray-500">
            Be among the first to experience the future of social payment and
            commerce. Click below to join our community and stay updated! 🚀
          </p>

          <button
            className="max-w-sm flex h-14 shrink-0 items-center justify-center gap-1 rounded-lg bg-[#000F2D] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
            type="submit"
          >
            <span>Join the community</span>
          </button>

          {/* <EmailForm /> */}
        </main>
      </section>
    </>
  );
}
