interface ContactProps {
    count: number;
}
export default function Contact({ count }: ContactProps) {
    return (
        <div>
            <p>{count}</p>
            <h1>Contact</h1>
        </div>
    );
}