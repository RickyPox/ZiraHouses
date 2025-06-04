import BookButton from "./bookButton";
import FloatingButton_layout from "./floatingButton_layout";

export default async function floatingButton({ language }: { language: string }) {
    return <FloatingButton_layout button={<BookButton target="_blank" lang={language} className=""></BookButton>}></FloatingButton_layout>;
}
