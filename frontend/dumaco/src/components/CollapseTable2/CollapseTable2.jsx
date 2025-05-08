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
      <table>
        <caption className={Style.captionContainer} onClick={toggle}>
          {title} {isCollapsed ? '+' : '-'}
        </caption>

        {!isCollapsed && (
          <>
            <thead>
              <tr>
                <th>Omschrijving</th>
                <th>Start Datum</th>
                <th>Opmerking</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, label }) => (
                <tr key={id}>
                  <td>
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
                      <td>
                        <input type="date" id={`${label}Date`} />
                      </td>
                      <td>
                        <input type="text" id={`${label}Opmerking`} />
                      </td>
                    </>
                  ) : (
                    <>
                      <td></td>
                      <td></td>
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
