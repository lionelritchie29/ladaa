import { format, nextMonday, previousMonday, startOfWeek } from 'date-fns';
import { endOfWeek } from 'date-fns/esm';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { MealSlot } from '../../models/enum/meal-slot';
import { MealPlanWeek } from '../../models/MealPlanWeek';
import MealPlanService from '../../services/api/meal-plan-service';
import RecipeMealCard from './RecipeMealCard';

type props = {
  mealPlanService: MealPlanService;
};

const MealPlanTable = ({ mealPlanService }: props) => {
  const [meals, setMeals] = useState<MealPlanWeek>({ days: [] });
  const [currentStartOfWeek, setCurrentStartOfWeek] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 }),
  );
  const [loggedUser, setLoggedUser] = useContext(AuthContext);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const fetchMealPlanWeek = async () => {
    if (loggedUser !== null) {
      setMeals(
        await mealPlanService.getMealPlanWeek(loggedUser, currentStartOfWeek),
      );
    }
  };

  useEffect(() => {
    fetchMealPlanWeek();
  }, [currentStartOfWeek]);

  const renderTdTemplate = (content: any, idx: number) => {
    return (
      <td
        key={idx}
        className='px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
        {content}
      </td>
    );
  };

  const getItemForSlot = (slot: MealSlot) => {
    let results: any = [];
    days.forEach((day) => {
      const idx = meals.days.findIndex(
        (d) => d.day.toLowerCase() === day.toLowerCase(),
      );
      if (idx !== -1) {
        const temp: any[] = [];
        meals.days[idx].items.forEach((item) => {
          if ((item as any).slot === slot) {
            temp.push(item);
          }
        });
        temp.length != 0 ? results.push(temp) : results.push([]);
      } else {
        results.push([]);
      }
    });

    return results;
  };

  const renderItemForSlot = (slot: MealSlot) => {
    return getItemForSlot(slot).map((items: any[], idx: number) => {
      if (items.length === 0)
        return renderTdTemplate(
          <span className='flex justify-center'>-</span>,
          idx,
        );
      else {
        const itemsInDay: any[] = [];
        items.forEach((item) => {
          itemsInDay.push(<RecipeMealCard recipe={item.value} key={item.id} />);
        });
        return renderTdTemplate(itemsInDay, idx);
      }
    });
  };

  return (
    <>
      <div className='mb-2 text-sm'>
        <span className='font-medium'>Current Week</span>:{' '}
        {format(
          startOfWeek(currentStartOfWeek, { weekStartsOn: 1 }),
          'dd MMMM yyyy',
        )}{' '}
        {' - '}
        {format(
          endOfWeek(currentStartOfWeek, { weekStartsOn: 1 }),
          'dd MMMM yyyy',
        )}
      </div>

      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Type
                    </th>
                    {days.map((day) => (
                      <th
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  <tr>
                    <td
                      style={{
                        textOrientation: 'sideways',
                        writingMode: 'vertical-lr',
                      }}
                      className='text-center py-3 text-sm whitespace-nowrap font-medium text-gray-900'>
                      Breakfast
                    </td>
                    {renderItemForSlot(MealSlot.BREAKFAST)}
                  </tr>
                  <tr className='bg-gray-100'>
                    <td
                      style={{
                        textOrientation: 'sideways',
                        writingMode: 'vertical-lr',
                      }}
                      className='text-center py-3 text-sm whitespace-nowrap font-medium text-gray-900'>
                      Lunch
                    </td>
                    {renderItemForSlot(MealSlot.LUNCH)}
                  </tr>
                  <tr>
                    <td
                      style={{
                        textOrientation: 'sideways',
                        writingMode: 'vertical-lr',
                      }}
                      className='text-center py-3 text-sm whitespace-nowrap font-medium text-gray-900'>
                      Dinner
                    </td>
                    {renderItemForSlot(MealSlot.DINNER)}
                  </tr>
                  <tr className='bg-gray-100'>
                    <td
                      style={{
                        textOrientation: 'sideways',
                        writingMode: 'vertical-lr',
                      }}
                      className='text-center py-3 text-sm whitespace-nowrap font-medium text-gray-900'>
                      Nutrient
                    </td>
                    {days.map((day, _idx) => {
                      const idx = meals.days.findIndex(
                        (d) => d.day.toLowerCase() === day.toLowerCase(),
                      );

                      if (idx !== -1) {
                        return (
                          <td
                            key={_idx}
                            className='px-3 py-2 whitespace-nowrap text-sm text-gray-900'>
                            {meals.days[idx].nutritionSummary.nutrients.map(
                              (nutrient, idx) =>
                                (nutrient.name == 'Calories' ||
                                  nutrient.name == 'Fat' ||
                                  nutrient.name == 'Carbohydrates' ||
                                  nutrient.name == 'Protein') && (
                                  <div key={idx}>
                                    {nutrient.name}:{' '}
                                    <span className='font-medium'>
                                      {nutrient.amount} {nutrient.unit}
                                    </span>
                                  </div>
                                ),
                            )}
                          </td>
                        );
                      } else {
                        return renderTdTemplate(
                          <span key={_idx} className='flex justify-center'>
                            -
                          </span>,
                          _idx,
                        );
                      }
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='text-right mt-3'>
        <button
          onClick={() =>
            setCurrentStartOfWeek(previousMonday(currentStartOfWeek))
          }
          className='mr-3 hover:bg-green-700 btn bg-green-600 text-white px-2 rounded-md'>
          Prev Week
        </button>

        <button
          onClick={() => setCurrentStartOfWeek(nextMonday(currentStartOfWeek))}
          className='btn hover:bg-green-700 bg-green-600 text-white px-2 rounded-md'>
          Next Week
        </button>
      </div>
    </>
  );
};

export default MealPlanTable;
