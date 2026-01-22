import { useState } from "react";

export default function FinanceForm({eventSubmit}) {


  const [form, setForm] = useState({
    amount: "",
    note: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function cleanForm(){
    setForm({
      amount: "",
      note: "",
      date: "",
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    eventSubmit(form)
    cleanForm();
  }

  return (
    <form onSubmit={handleSubmit} className={FORM_CONFIG[config].style}>
      <div>
        <label>Monto</label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Nota</label>
        <textarea
          name="note"
          value={form.note}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
}
