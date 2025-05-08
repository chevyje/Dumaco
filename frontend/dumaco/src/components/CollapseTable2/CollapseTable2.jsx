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
      <table className={Style.collapseTable}>
        <caption className={Style.captionContainer} onClick={toggle}>
          {title} {isCollapsed ? '+' : '-'}
        </caption>

        {!isCollapsed && (
          <>
            <thead className={Style.collapseTable}>
              <tr className={Style.collapseTable}>
                <th className={Style.collapseTable}>Omschrijving</th>
                <th className={Style.collapseTable}>Start Datum</th>
                <th className={Style.collapseTable}>Opmerking</th>
              </tr>
            </thead>
            <tbody className={Style.collapseTable}>
              {data.map(({ id, label }) => (
                <tr className={Style.collapseTable} key={id}>
                  <td className={Style.collapseTable}>
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
                      <td className={Style.collapseTable}>
                        <input type="date" className={Style.dateInput} id={`${label}Date`} />
                      </td>
                      <td className={Style.collapseTable}>
                        <input type="text" className={Style.opmerkingenInput} id={`${label}Opmerking`} />
                      </td>
                    </>
                  ) : (
                    <>
                      <td className={Style.collapseTable}></td>
                      <td className={Style.collapseTable}></td>
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
