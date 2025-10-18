import {useState} from "react";
import * as React from "react";

type FormValues = {
    name: string,
    email: string,
    message: string
};

const initialValues: FormValues = {
    name: "",
    email: "",
    message: ""
};

const MultifieldForm = () => {
    const [values, setValues] = useState(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setValues((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleClear = () => {
        setValues(initialValues);
        setSubmittedData(null);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedData(values);
        setValues(values);
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4 mt-12">

                <input type="text"
                       name="name"
                       value={values.name}
                       onChange={handleChange}
                       placeholder="Name"
                       className="w-full border rounded px-4 py-2"
                       required />

                <input type="text"
                       name="email"
                       value={values.email}
                       onChange={handleChange}
                       placeholder="Email"
                       className="w-full border rounded px-4 py-2"/>

                <textarea name="message"
                          value={values.message}
                          onChange={handleChange}
                          placeholder="Message"
                          rows={5}
                          className="w-full border rounded px-4 py-2"
                          minLength={5}>
                </textarea>

                <div className="flex gap-4">
                    <button className="bg-cf-dark-red text-white px-4 py-2 rounded">
                        Submit
                    </button>
                    <button
                        onClick={handleClear}
                        className="bg-cf-dark-grey text-white px-4 py-2 rounded">
                        Clear
                    </button>
                </div>
            </form>

            {submittedData && (
                <>
                    <div className="mt-6 max-w-sm mx-auto border-t pt-4 text-cf-dark-gray space-y-2">
                        <p>Name: {submittedData.name}</p>
                        <p>Email: {submittedData.email}</p>
                        <p>Message: {submittedData.message}</p>
                    </div>
                </>
            )}
        </>
    )
}

export default MultifieldForm