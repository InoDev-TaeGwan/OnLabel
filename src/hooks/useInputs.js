import { useState, useCallback } from 'react';

const useInputs = (initData) => {
    const [form, setForm] = useState(initData);

    const onChange = useCallback((event) => {
        const {
            target: { name, value },
        } = event;
        setForm((prev) => ({ ...prev, [name]: value }));
    }, []);

    const reset = useCallback(() => setForm(initData), [initData]);
    return [form, onChange, reset]
};

export default useInputs