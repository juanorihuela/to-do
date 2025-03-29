import { useFormik } from "formik";
import * as Yup from "yup"


function NewTask({ onSubmitEvent }) {
    const form = useFormik({
        initialValues: {
            newTask: "",
            status: false
        },
        validationSchema: Yup.object({
            newTask: Yup.string().required("Ingresa una tarea válida").max(30, "Máximo 30 caracteres"),
            status: Yup.bool().required()
        }),
        onSubmit: (values) => {
            onSubmitEvent(values);
            form.resetForm();
        }
    });

    return (
        <form onSubmit={form.handleSubmit}>
            <input
                id="newTask"
                name="newTask"
                type="text"
                placeholder="Ingresa nueva tarea"
                autoComplete="off"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.newTask}
            />
            {form.touched && form.errors.newTask ? (
                <small>{form.errors.newTask}</small>
            ) : null }

            <button type="submit">Guardar</button>
        </form>
    );
}

export default NewTask;
