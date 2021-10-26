import React, { useCallback, useEffect, useState } from 'react';
import { storageService } from '../../FireBase';

const TestStorage = () => {
    const [list, setList] = useState('');
    const getStorage = useCallback(async () => {
        const reference = storageService.ref().child('/');
        const list = await reference.listAll();
        list.items.forEach((element) => {
            console.log(element.name);
        });
    }, []);
    useEffect(() => {
        getStorage();
    }, [getStorage]);
    return <div></div>;
};

export default TestStorage;
