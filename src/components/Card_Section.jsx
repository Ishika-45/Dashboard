import React from 'react';
import { Row, Card } from 'antd';
import './style.css';

function Cards({ darkMode }) {
  const textColor = darkMode ? 'text-white' : 'text-black';
  const bgColor = darkMode ? 'bg-zinc-800' : 'bg-gray-300';

  return (
    <div className="p-3 flex rounded-lg justify-between items-center ">
      <Row className="flex flex-wrap gap-[16px] justify-center items-center ">
        {['To-Do Tasks', 'In-Progress Tasks', 'Completed Tasks'].map((title, idx) => (
          <Card className="my-card shadow-2xl p-1.5" key={idx}>
            <div className={`${bgColor} ${textColor} p-4 rounded-lg`}>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-2xl">
                {idx === 0 ? 40 : idx === 1 ? 30 : 100}
              </p>
            </div>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
