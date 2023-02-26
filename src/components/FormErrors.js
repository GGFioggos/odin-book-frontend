const FormErrors = (props) => {
    const errors = props.errors;
    return (
        <ul className="errors">
            {errors.map((err, i) => (
                <li key={i} className="error">
                    {err.msg && err.msg}
                    {!err.msg && err}
                </li>
            ))}
        </ul>
    );
};

export default FormErrors;
