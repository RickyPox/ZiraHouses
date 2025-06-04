import { getFilteredContentByLanguage } from "@/app/utils/getFilteredContentByLanguage";
import Button from "./button";

type ButtonData = {
    title: string;
    path: string;
};

export default async function BookButton({ target, lang, className }: { target: string; lang: string; className: any }) {
    const data = await getFilteredContentByLanguage<ButtonData>("book_button", lang);

    if (!data || data.length === 0) return null;

    const button = data[0];

    return <Button text={button.title} href={button.path} target={target} className={className} />;
}
