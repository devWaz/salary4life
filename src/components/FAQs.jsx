
const Question = ({number , question}) => {
    return (
        <div className="flex gap-4 text-white p-1 px-3 py-3 align-center content-center border-b-2 border-[rgba(255, 255, 255, 0.1)]">
            <h1 className="text-[2rem] font-bold leading-none">{number}</h1>
            <p className="p-0 flex align-center content-around h-0">{question}</p>
        </div>
    )
}

const FAQs = () => {
    return ( 
        <div className="p-4 pb-20 bg-white">
            <div className="bg-[#28743A] rounded p-1 py-6">
                <h3 className="text-[#BBFF4B] p-3">Frequently Asked Questions</h3>
                <div>
                    <Question number={1} question={"How do I play?"}/>
                    <Question number={2} question={"How do I cashout my winnings?"}/>
                    <Question number={3} question={"How do I get my monthly salary?"}/>
                    <Question number={4} question={"Can I invite more people?"}/>
                </div>
            </div>
        </div>
     );
}
 
export default FAQs;