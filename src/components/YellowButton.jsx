export default function YellowButton({ title, ...rest }) {
  return (
    <button
      {...rest}
      className="bg-gradient-to-b from-secondary-yellow to-primary-yellow inline-block text-center whitespace-nowrap font-primary text-primary-black text-[0.7rem] xl:text-[0.8rem] font-bold xl:font-extrabold tracking-widest uppercase rounded-md border-0 px-3 py-2 hover:from-secondary-yellow hover:to-secondary-yellow active:scale-95 transition-colors duration-500 active:duration-200 w-[80%] xl:w-fit"
    >
      {title}
    </button>
  );
}
