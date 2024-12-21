

interface HomeProps {
    count: number;
    handleClick: () => void;
}

export default function Home({ count, handleClick }: HomeProps) {

    return (
        <div>
            <h1>Home</h1>
            <p>{count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}