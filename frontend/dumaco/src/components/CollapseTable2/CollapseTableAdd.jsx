import React, { useState } from 'react';
import Style from './CollapseTable2.module.css';
import { useEffect } from 'react';

const CollapseTableAdd = ({ content, title }) => {
    const data = content;
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [items, setItems] = useState(data);
    const [newItem, setNewItem] = useState({ item1: '', item2: '', item3: '' });

    const toggle = () => setIsCollapsed(prev => !prev);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prev => ({ ...prev, [name]: value }));
    };

    const addItem = () => {
        if (newItem.item1 && newItem.item2 && newItem.item3) {
            setItems(prev => [...prev, { ...newItem, item3: Number(newItem.item3) }]);
            setNewItem({ item1: '', item2: '', item3: '' });
        }
    };

    const deleteItem = (index) => {
        setItems(prev => prev.filter((_, i) => i !== index));
    };
    
    useEffect(() => {
        console.log('addTabel data:', items);
    }, [items]);


    return (
        <div className={Style.tableContainer}>
            <table className={Style.collapseTable2}>
                <caption className={Style.captionContainer} onClick={toggle}>
                    {title} {isCollapsed ? '+' : '-'}
                </caption>

                {!isCollapsed && (
                    <>
                        <thead>
                            <tr>
                                <th>Artikel</th>
                                <th>Omschrijving</th>
                                <th>Aantal</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.item1}</td>
                                    <td>{item.item2}</td>
                                    <td>{item.item3}</td>
                                    <td>
                                        <button onClick={() => deleteItem(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>
                                    <input
                                        name="item1"
                                        value={newItem.item1}
                                        onChange={handleInputChange}
                                        placeholder="Artikel"
                                    />
                                </td>
                                <td>
                                    <input
                                        name="item2"
                                        value={newItem.item2}
                                        onChange={handleInputChange}
                                        placeholder="Omschrijving"
                                    />
                                </td>
                                <td>
                                    <input
                                        name="item3"
                                        value={newItem.item3}
                                        onChange={handleInputChange}
                                        placeholder="Aantal"
                                        type="number"
                                    />
                                </td>
                                <td>
                                    <button onClick={addItem}>Add</button>
                                </td>
                            </tr>
                        </tbody>
                    </>
                )}
            </table>
        </div>
    );
};

export default CollapseTableAdd;

