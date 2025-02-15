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
            Imagine a world where saving and sharing products is effortless,
            discovering the best deals is seamless, and connecting with vendors
            happens in just a tap. That’s what Gadahere is all about! Our app is
            designed to help you explore products with ease, save your
            favorites, and interact with vendors—all in one place.
          </p>
          <p className="text-gray-500">
            {" "}
            Be among the first to experience the future of effortless shopping
            and sharing. Click below to join our community and stay updated! 🚀
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
