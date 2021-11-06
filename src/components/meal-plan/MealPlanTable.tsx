import React from 'react';
import RecipeMealCard from './RecipeMealCard';

const MealPlanTable = () => {
  return (
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
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Monday
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Tuesday
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Wednesday
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Thursday
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Friday
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Saturday
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Sunday
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td
                    style={{
                      textOrientation: 'sideways',
                      writingMode: 'vertical-lr',
                    }}
                    className='text-center text-sm whitespace-nowrap font-medium text-gray-900'>
                    Breakfast
                  </td>
                  {[1, 2, 3, 4, 5, 6, 7].map((meal) => (
                    <td className='px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                      <RecipeMealCard />
                    </td>
                  ))}
                </tr>
                <tr className='bg-gray-100'>
                  <td
                    style={{
                      textOrientation: 'sideways',
                      writingMode: 'vertical-lr',
                    }}
                    className='text-center text-sm whitespace-nowrap font-medium text-gray-900'>
                    Lunch
                  </td>
                  {[1, 2, 3, 4, 5, 6, 7].map((meal) => (
                    <td className='px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                      <RecipeMealCard />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td
                    style={{
                      textOrientation: 'sideways',
                      writingMode: 'vertical-lr',
                    }}
                    className='text-center text-sm whitespace-nowrap font-medium text-gray-900'>
                    Dinner
                  </td>
                  {[1, 2, 3, 4, 5, 6, 7].map((meal) => (
                    <td className='px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900'>
                      <RecipeMealCard />
                    </td>
                  ))}
                </tr>
                <tr className='bg-gray-100'>
                  <td
                    style={{
                      textOrientation: 'sideways',
                      writingMode: 'vertical-lr',
                    }}
                    className='text-center text-sm whitespace-nowrap font-medium text-gray-900'>
                    Nutrient
                  </td>
                  {[1, 2, 3, 4, 5, 6, 7].map((meal) => (
                    <td className='px-3 py-2 whitespace-nowrap text-sm text-gray-900'>
                      <div>
                        Calories: <span className='font-medium'>1400</span>
                      </div>
                      <div>
                        Fat: <span className='font-medium'>100g</span>
                      </div>
                      <div>
                        Protein: <span className='font-medium'>425g</span>
                      </div>
                      <div>
                        Carbs: <span className='font-medium'>200g</span>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanTable;
