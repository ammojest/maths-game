import Image from "next/image";
import Form from "./Components/Form";
import Results from "./Components/Results";

export default function Home() {
  return (
    <>
      <main>
        <section className="flex w-full flex-col">
          <Form />
          <Results />
        </section>
      </main>
    </>
  );
}
