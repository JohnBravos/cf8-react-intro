import {useState} from "react";

const ControlledInput = () => {

    const [name, setName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <>
        <div className="text-center mt-12">
            <input
                type="text"
                value={name}
                className="border rounded px-4 py-2"
                onChange={handleChange}
            />
            <p className="mt-2">Value: {name}</p>
        </div>
        </>
    )
}

export default ControlledInput;