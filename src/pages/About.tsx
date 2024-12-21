
interface ICount {
    count: number;
}

export default function About({ count }: ICount) {
    return (
        <div>
            <p>{count}</p>
            <h1>About</h1>
        </div>
    );
}