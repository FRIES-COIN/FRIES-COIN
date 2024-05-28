import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish";

export default function FAQ() {
  const placeholders = [
    "Why should I buy $FRIES?",
    "What is a meme coin?",
    "What is the utility of $FRIES Coin?",
    "Does $FRIES have any airdrops mechanism?",
    "Does $FRIES have any unique features?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-gray-100">
        Ask anything about{" "}
        <span className="text-[#ffd543] font-semibold">$FRYS</span>
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
