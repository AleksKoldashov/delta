import React from 'react'
import './App.css';
import Row from './components/Row';

function App() {

const arrHeader=['Показатель','Текущий день','Вчера','Этот день недели']
const arrBody = [
  {id: 1, Indicator: 'Выручка в руб.',nowDay: 500521,  Yesterday: 480521, nowWeek:4805121},
  {id: 2,Indicator: 'Наличные',nowDay: 300000,  Yesterday: 300000, nowWeek:300000},
  {id: 3,Indicator: 'Безналичный расчет',nowDay: 100000,  Yesterday: 100000, nowWeek:100000},
  {id: 4,Indicator: 'Кредитные карты',nowDay: 100521,  Yesterday: 100521, nowWeek:100521},
  {id: 5,Indicator: 'Средний чек  руб.',nowDay: 1300,  Yesterday: 900, nowWeek:900},
  {id: 6,Indicator: 'Средний гость руб.',nowDay: 1200,  Yesterday: 800, nowWeek:800},
  {id: 7,Indicator: 'Удаление из чека(после оплаты) руб.',nowDay: 1000,  Yesterday: 1100, nowWeek:900},
  {id: 8,Indicator: 'Удаление из чека(до оплаты) руб.',nowDay: 1300,  Yesterday: 1300, nowWeek:900},
  {id: 9,Indicator: 'Количество чеков',nowDay: 34,  Yesterday: 36, nowWeek:34},
  {id: 10,Indicator: 'Количество гостей',nowDay: 34,  Yesterday: 36, nowWeek:32},
]

  return (
    <div className="App">
      <div className='header'>
          {
            arrHeader.map((item, index)=><div key={index} className={`item${index+1}`}>{item}</div>)
          }
      </div>
          {
              arrBody.map((item)=><Row item={item} key={item.id}/>)
          }
    </div>
  );
}

export default App;
