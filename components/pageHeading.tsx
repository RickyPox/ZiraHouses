import BookButton from "./bookButton";
import PageHeading_layout from "./pageHeading_layout";

export default async function PageHeading(props: any) {
    return (
        <PageHeading_layout
            img={props.img}
            title={props.title}
            children={props.children}
            button={<BookButton target={"_blank"} lang={props.lang} className={"mt-[50px]"}></BookButton>}
        />
    );
}
