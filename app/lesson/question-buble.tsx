import Image from "next/image";

type Props = {
    question:string;
};

export const QuestionBuble = ({}: Props) => {
    return (
        <div className="flex items-center gap-x-4 mb-6">
            <Image 
                src={"/mascot.svg"}
                alt="Mascot"
                height={60}
                width={60}
                className="hidden lg:block"
            />
        </div>
    )
}