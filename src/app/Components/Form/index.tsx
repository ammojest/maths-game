"use client";
import { useRef, useState } from "react";

const Form = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");
  console.log(input);
  return (
    <>
      <section>
        <div className="flex w-full justify-center items-center h-[50vh]">
          <div className="bg-black w-full">
            <h1>This is the form</h1>
            <form>
              <input
                ref={ref}
                className="form-control mb-4"
                type="text"
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
