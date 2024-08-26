//  () => {}
import './style.css';

const MyFunction = () => {
    // const steve = "Steve";
    // const steve = 32;
    // const steve = [1, 2, 3];
    const steve = {
        name: "STEVE",
        age: "30"
    }
    return (
        <>
            <div>{JSON.stringify(steve)} and his first component update</div>
            <div>{console.log("Steve check js")}</div>
            <div className="child" style={{ borderRadius: "10px" }}>Child</div>
        </>
    );
}

export default MyFunction;