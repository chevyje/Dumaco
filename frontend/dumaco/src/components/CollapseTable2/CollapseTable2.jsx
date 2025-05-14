import React, { useState } from 'react';
import Style from './CollapseTable2.module.css';

const CollapseTable2 = (props) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [itemDetails, setItemDetails] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCheckboxChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleOpmerkingChange = (id, value) => {
    setItemDetails(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        opmerking: value
      }
    }));
  };

const handleDateChange = (id, value) => {
  setItemDetails(prev => {
    const updated = {
      ...prev,
      [id]: {
        ...prev[id],
        date: value
      }
    };

    const checkedData = Object.entries(checkedItems)
      .filter(([_, checked]) => checked)
      .map(([itemId]) => {
        const item = data.find(d => d.id.toString() === itemId);
        return {
          id: itemId,
          label: item?.label || itemId,
          opmerking: updated[itemId]?.opmerking || '',
          date: updated[itemId]?.date || ''
        };
      });

    console.log('Bewerkingen:', checkedData);

    return updated;
  });
};

  const toggle = () => {
    setIsCollapsed(prev => !prev);
  };

  const data = props.content;
  const title = props.title;

  return (
    <div className={Style.tableContainer}>
      <table className={Style.collapseTable2}>
        <caption className={Style.captionContainer} onClick={toggle}>
          {title} {isCollapsed ? '+' : '-'}
        </caption>

        {!isCollapsed && (
          <>
            <thead className={Style.collapseTable2}>
              <tr className={Style.collapseTable2}>
                <th className={Style.collapseTable2}>Omschrijving</th>
                <th className={Style.collapseTable2}>Opmerking</th>
                <th className={Style.collapseTable2}>Start Datum</th>
              </tr>
            </thead>
            <tbody className={Style.collapseTable2}>
              {data.map(({ id, label }) => (
                <tr className={Style.collapseTable2} key={id}>
                  <td className={Style.collapseTable2}>
                    <input
                      type='checkbox'
                      checked={!!checkedItems[id]}
                      onChange={() => handleCheckboxChange(id)}
                      id={`checkbox-${id}`}
                    />
                    <label htmlFor={`checkbox-${id}`}>{label}</label>
                  </td>
                  {checkedItems[id] ? (
                    <>
                      <td className={Style.collapseTable2}>
                        <input
                          type="text"
                          className={Style.opmerkingenInput}
                          value={itemDetails[id]?.opmerking || ''}
                          onChange={(e) => handleOpmerkingChange(id, e.target.value)}
                        />
                      </td>
                      <td className={Style.collapseTable2}>
                        <input
                          type="date"
                          className={Style.dateInput}
                          value={itemDetails[id]?.date || ''}
                          onChange={(e) => handleDateChange(id, e.target.value)}
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td className={Style.collapseTable2}></td>
                      <td className={Style.collapseTable2}></td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

export default CollapseTable2;
