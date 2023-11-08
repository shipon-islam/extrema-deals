import React, { useEffect, useState } from "react";

export default function GoggleMap() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full relative h-[400px] md:h-[500px] lg:h-[500px] bg-primary-black">
      {isLoading ? (
        <div className="container relative h-full flex justify-center items-center">
          <div className="w-16 h-16 rounded-full absolute border-2 border-solid border-primary-gray "></div>
          <div className="w-16 h-16 rounded-full animate-spin absolute border-2 border-solid border-primary-yellow border-t-transparent "></div>
        </div>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.1439783808432!2d5.537537676585091!3d50.92105357168587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0ddd4e3098ba3%3A0xc7a63dfea02f554!2sZevenputtenstraat%207%2C%203690%20Zutendaal!5e0!3m2!1snl!2sbe!4v1698412852700!5m2!1snl!2sbe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </section>
  );
}
