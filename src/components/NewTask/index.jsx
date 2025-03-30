import { useFormik } from "formik";
import * as Yup from "yup"

import "./styles.scss"


function NewTask({ onSubmitHandle }) {
    const form = useFormik({
        initialValues: {
            newTask: "",
        },
        validationSchema: Yup.object({
            newTask: Yup.string().required("Ingresa una tarea válida").max(30, "Máximo 30 caracteres"),
        }),
        onSubmit: (values) => {
            onSubmitHandle(values);
            form.resetForm();
        }
    });

    return (
        <form id="newTaskForm" onSubmit={form.handleSubmit}>
            <div className="formRow">
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

                <button type="submit">Guardar</button>
            </div>

            {form.touched && form.errors.newTask ? (
                <small className="errorMessage">* {form.errors.newTask}</small>
            ) : null}
        </form>
    );
};

export default NewTask;
