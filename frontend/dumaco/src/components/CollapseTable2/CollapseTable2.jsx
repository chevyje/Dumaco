import React, { useState } from 'react';
import Style from './CollapseTable2.module.css';

const CollapseTable2 = (props) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCheckboxChange = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggle = () => {
    setIsCollapsed(prev => !prev);
  };

  const data = props.content;
  const title = props.title

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
                <th className={Style.collapseTable2}>Start Datum</th>
                <th className={Style.collapseTable2}>Opmerking</th>
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
                        <input type="date" className={Style.dateInput} id={`${label}Date`} />
                      </td>
                      <td className={Style.collapseTable2}>
                        <input type="text" className={Style.opmerkingenInput} id={`${label}Opmerking`} />
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
