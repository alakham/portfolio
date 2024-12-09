"use client";

import CountUp from "react-countup";

const stats = [
  { count: 2, text: "Years of experience" },
  { count: 5, text: "Projects completed" },
  { count: 8, text: "Technologies mastered" },
  { count: 100, text: "Codes commits" },
];

function Stats() {
  return (
    <section className="pt-2 pb-4 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap max-w-[80vw] gap-6 mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex items-center justify-center flex-1 gap-4 xl:justify-start"
                key={index}
              >
                <CountUp
                  end={stat.count}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold text-accent-400 xl:text-6xl"
                />
                <p
                  className={`${
                    stat.length < 15 ? "max-w-[6rem]" : "max-w-[8rem]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
